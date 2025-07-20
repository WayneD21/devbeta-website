import { useState, useRef } from "react";
import { apiRequestConfig } from "./api";

function useStateDev() {
  const [data, setData] = useState<any>({});
  const [open, setOpen] = useState<any>({});
  const [loading, setLoading] = useState<any>({});
  const [checkout, setCheckout] = useState<any>({});
  const [search, setSearch] = useState<any>({});
  const timeoutRef = useRef<any>(null);
  let searchCache: any = {};

  const setURLSearch = (params: { [key: string]: string }) => {
    const queryStr = "?" + new URLSearchParams(params).toString();
    window.history.replaceState({}, "", window.location.pathname + queryStr);
  };

  const queryParams = ({ defaultPage, defaultLimit }: { defaultPage: number; defaultLimit: number }): object => {
    let updateParams: any = null;
    const searchs = new URLSearchParams(window.location.search);
    const queryObj = {};
    if (searchs.size > 0) {
      for (let [key, value] of searchs.entries()) {
        queryObj[key] = value;
      }
    }
    const keys = Object.keys(queryObj);
    if (!keys.includes("page")) {
      queryObj["page"] = defaultPage;
      updateParams = true;
    }
    if (!keys.includes("limit")) {
      queryObj["limit"] = defaultLimit;
      updateParams = true;
    }
    if (updateParams) {
      setURLSearch(queryObj);
    }
    return queryObj;
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 KB";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatNumber = (text: string | number, format = ","): string => {
    return text
      .toString()
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, format);
  };

  const numberToUnit = (num: number): string => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const generateString = (length: number = 20, isNumber: boolean = true, isString: boolean = true): string => {
    let chars = "";
    if (isNumber) {
      chars += "0123456789";
    }
    if (isString) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array)
      .map((value) => chars[value % chars.length])
      .join("");
  };

  const setDataValue = (key: string | number, value: any) => {
    setDataValues({ [key]: value });
  };

  const setDataValues = (values: { [key: string | number]: any }) => {
    setData((prev: any) => ({
      ...prev,
      ...values
    }));
  };

  const setOpenValue = (key: string | number, value: any) => {
    setOpenValues({ [key]: value });
  };

  const setOpenValues = (values: { [key: string | number]: any }) => {
    setOpen((prev: any) => ({
      ...prev,
      ...values
    }));
  };

  const setLoadingValue = (key: string | number, value: any) => {
    setLoadingValues({ [key]: value });
  };

  const setLoadingValues = (values: { [key: string | number]: any }) => {
    setLoading((prev: any) => ({
      ...prev,
      ...values
    }));
  };

  const setCheckoutValue = (key: string | number, value: any) => {
    setCheckoutValues({ [key]: value });
  };

  const setCheckoutValues = (values: { [key: string | number]: any }) => {
    setCheckout((prev: any) => ({
      ...prev,
      ...values
    }));
  };

  const setSearchValue = ({
    key,
    value,
    delay,
    dataKey
  }: {
    key: string | number;
    value: string | number | boolean;
    delay: number | null;
    dataKey: string | number | null;
  }) => {
    if (dataKey) {
      setDataValue(dataKey, null);
    }
    searchCache = { ...searchCache, [key]: value };
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSearch((prev: any) =>
        Object.fromEntries(
          // loại bỏ các name mà key rỗng
          Object.entries({
            ...prev,
            ...searchCache
          }).filter(([_, value]) => value !== "")
        )
      );
    }, delay || 1000);
  };

  const setSearchValues = ({
    params,
    delay,
    dataKey
  }: {
    params: { [key: string]: string };
    delay: number | null;
    dataKey: string | number | null;
  }) => {
    if (dataKey) {
      setDataValue(dataKey, null);
    }
    searchCache = { ...searchCache, ...params };
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSearch((prev: any) =>
        Object.fromEntries(
          // loại bỏ các name mà key rỗng
          Object.entries({
            ...prev,
            ...searchCache
          }).filter(([_, value]) => value !== "")
        )
      );
    }, delay || 1000);
  };

  const asjs = async ({
    method,
    endpoint,
    baseURL,
    data,
    params,
    headers,
    responseType,
    timeout,
    loading,
    closeOpen,
    dataKey,
    autoClearData,
    onProgressUpload,
    onProgressDownload,
    beforeSend,
    complete,
    success,
    failure
  }: {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
    endpoint: string;
    baseURL?: string | null;
    data?: any | null;
    headers?: { [key: string]: string } | null;
    params?: { [key: string]: string } | null;
    responseType?: "json" | "text" | "blob" | "arraybuffer" | "stream" | "document" | null;
    timeout?: number | null;
    loading?: [any, ...any] | null;
    closeOpen?: [any, ...any] | null;
    dataKey?: string | null;
    autoClearData?: null | true | false;
    onProgressUpload?: (event: any) => void | null;
    onProgressDownload?: (event: any) => void | null;
    beforeSend?: () => void | null;
    complete?: () => void | null;
    success?: (response: any) => void | null;
    failure?: (error: any) => void | null;
  }) => {
    if (autoClearData && dataKey) {
      setDataValue(dataKey, null);
    }
    beforeSend?.();
    loading?.map((item) => setLoadingValue(item, true));
    let response: any;
    try {
      response = await apiRequestConfig({
        method: method,
        url: endpoint,
        baseURL: baseURL || "env",
        data: data,
        params: params,
        headers: headers,
        timeout: timeout,
        responseType: responseType,
        onUploadProgress: (event: any) => {
          onProgressUpload?.(event);
        },
        onDownloadProgress: (event: any) => {
          onProgressDownload?.(event);
        }
      });
      if (dataKey) {
        setDataValue(dataKey, response);
      }
      success?.(response);
      closeOpen?.map((item) => setOpenValue(item, false));
    } catch (error) {
      response = error;
      failure?.(response);
    }
    complete?.();
    loading?.map((item) => setLoadingValue(item, false));
    return response;
  };

  return {
    data,
    open,
    loading,
    checkout,
    search,
    searchCache,
    formatNumber,
    formatBytes,
    queryParams,
    setURLSearch,
    generateString,
    numberToUnit,

    // full setters
    setData,
    setOpen,
    setLoading,
    setSearch,
    setCheckout,

    // value setters
    setDataValue,
    setOpenValue,
    setLoadingValue,
    setSearchValue,
    setCheckoutValue,

    // bulk setters
    setDataValues,
    setOpenValues,
    setLoadingValues,
    setSearchValues,
    setCheckoutValues,

    // gọi api
    asjs
  };
}

export default useStateDev;