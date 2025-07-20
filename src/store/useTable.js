import { create } from 'zustand';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { apiGet, apiPost, apiPatch, apiDelete } from '../utils/api.js';

const storeCache = {};

const createTableStore = (apiPath, default_params, searchParams) => {
  const defaultPath = new URLSearchParams(default_params).toString();
  if (!storeCache[`${apiPath}_${defaultPath}`]) {
    storeCache[`${apiPath}_${defaultPath}`] = create((set, get) => ({
      datas: [],
      error: null,
      onloadApi: '',
      loading: {},
      indexModal: {},
      openModal: {},
      radioSelect: {},
      pageSize: searchParams.get('limit') || 10,
      currentPage: searchParams.get('page') || 1,
      countItem: 0,
      selectedRows: [],
      searchParams: {},
      searchCache: {},
      currentPageReset: null,
      timeout: null,

      resetStore: () => {
        set({
          datas: [],
          error: null,
          onloadApi: '',
          loading: {},
          indexModal: {},
          openModal: {},
          radioSelect: {},
          selectedRows: [],
        });
      },

      setCurrentPageReset: (value) => {
        set({ currentPageReset: value });
      },

      setLoading: (newdata) => {
        set((state) => ({
          loading: { ...state.loading, ...newdata },
        }));
      },

      setRadioSelect: (newdata) => {
        set((state) => ({
          radioSelect: { ...state.radioSelect, ...newdata },
        }));
      },

      setSelectedRows: (rowId) => {
        set({ selectedRows: rowId ? rowId : [] });
      },

      setSearchParams: (newdata) => {
        set((state) => ({
          searchParams: { ...state.searchParams, ...newdata },
        }));
      },

      setOpenModal: (newdata) => {
        set((state) => ({
          openModal: { ...state.openModal, ...newdata },
        }));
      },

      setIndexModal: (newdata) => {
        set((state) => ({
          indexModal: { ...state.indexModal, ...newdata },
        }));
      },

      setPageSize: (number) => {
        set({ pageSize: number });
      },

      setCurrentPage: (number) => {
        set({ currentPage: number });
      },

      setSearchCache: (newdata, delay = 1000, resetPage = true) => {
        const timeout = get().timeout;
        if (timeout) {
          clearInterval(timeout);
        }

        if (resetPage && get().currentPage > 1) {
          set({ currentPage: 1 });
        }

        if (get().datas.length > 0) {
          set({ datas: [] });
        }

        const isOnloadApi = get().onloadApi;
        if (isOnloadApi.includes('on_')) {
          return;
        }

        set((state) => ({
          searchCache: {
            ...state.searchParams,
            ...state.searchCache,
            ...newdata,
          },
        }));

        if (!get().loading.table) {
          set((state) => ({ loading: { ...state.loading, table: true } }));
        }

        set({
          timeout: setTimeout(() => {
            set((state) => ({
              searchParams: Object.fromEntries(Object.entries(state.searchCache).filter(([_, value]) => value !== '')),
              loading: { ...state.loading, table: false },
            }));
          }, delay),
        });
      },

      // method (GET)
      findAllData: async (params) => {
        if (default_params) {
          for (let key of Object.keys(default_params)) {
            params[key] = default_params[key];
          }
        }

        set({ onloadApi: 'on_findAll', error: null });
        try {
          const queryStr = '?' + new URLSearchParams(params).toString();
          const finData = await apiGet(apiPath + queryStr);
          set({ datas: finData.data, countItem: finData.count || finData.data.count });
        } catch (error) {
          set({ error: error, countItem: 0 });
        }
        set({ onloadApi: 'off_findAll' });
      },

      // method (POST)
      addData: async (addata) => {
        set({ onloadApi: 'on_add', error: null });
        try {
          await apiPost(apiPath, addata);
        } catch (error) {
          set({ error: error });
        }
        set({ onloadApi: 'off_add' });
      },

      // method (PATCH)
      updateData: async (updateData, isRespo = false) => {
        set({ onloadApi: 'on_update', error: null });
        try {
          const response = await apiPatch(apiPath, updateData);
          if (isRespo) {
            return response;
          }
        } catch (error) {
          set({ error: error });
        }
        set({ onloadApi: 'off_update' });
      },

      // method (PATCH) update multiple status
      updateMultipleStatus: async (updateData) => {
        set({ onloadApi: 'on_update', error: null });
        try {
          await apiPatch(apiPath + '/updateStatus', updateData);
        } catch (error) {
          set({ error: error });
        }
        set({ onloadApi: 'off_update' });
      },

      // method (DELETE)
      deleteData: async (deleteData) => {
        set({ onloadApi: 'on_delete', error: null });
        try {
          await apiDelete(apiPath, deleteData); // Send data with array of IDs
        } catch (error) {
          set({ error: error });
        }
        set({ onloadApi: 'off_delete' });
      },

      // method (POST)
      restoreData: async (restoreData) => {
        set({ onloadApi: 'on_trash_restore', error: null });
        try {
          await apiPost(apiPath + '/trash/restore', restoreData); // Send data with array of IDs
        } catch (error) {
          set({ error: error });
        }
        set({ onloadApi: 'off_trash_restore' });
      },
    }));
  }

  return storeCache[`${apiPath}_${defaultPath}`];
};

const useTableStore = (apiPath, defaultParams) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const store = createTableStore(apiPath, defaultParams, searchParams)();

  useEffect(() => {
    if (Object.keys(store.searchParams).length > 0) {
      const queryStr = '?' + new URLSearchParams(store.searchParams).toString();
      window.history.replaceState({}, '', location.pathname + queryStr);
      store.findAllData(store.searchParams);
    }
  }, [store.searchParams]);

  useEffect(() => {
    const params = { page: store.currentPage, limit: store.pageSize };
    if (Object.keys(store.searchParams).length == 0) {
      for (let [key, value] of searchParams.entries()) {
        params[key] = value;
      }
    }
    store.setSearchCache(params, 100, null);
  }, [store.pageSize, store.currentPage]);

  useEffect(() => {
    return () => {
      if (typeof store.resetStore === 'function') {
        store.resetStore();
      }
      const timeout = store.timeout;
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [location.pathname]); // mỗi lần đổi path là reset

  return store;
};

export default useTableStore;
