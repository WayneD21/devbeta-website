import { create } from "zustand";
import { apiGet } from "../utils/api.js";

const useInfoWebStore = create((set, get) => ({
  infoWeb: null,
  loading: true,
  error: null,

  fetchInfoWeb: async () => {
    set({ loading: true, error: null });
    try {
      const resp = await apiGet("/site-setting/info-web");
      set({ infoWeb: resp.data, loading: false });
      return resp;
    } catch (err) {
      set({ error: err, loading: false });
      throw err;
    }
  },

  clearError: ()=> {
    set({ error: null });
  }

}));

export default useInfoWebStore;
