import Cookies from "js-cookie";
import { apiGet } from "./api";
import routes from "../configs/routesPath";

export const getSid = () => {
  return Cookies.get("session_id");
};

export const removeSid = () => {
  if (getSid()) {Cookies.remove("session_id")}
};

export const saveSid = (sid) => {
  removeSid();
  Cookies.set("session_id", sid);
};

export const logoutApp = async (cancel) => {
  try {
    await apiGet("/auth/logout");
    if (typeof cancel === 'function') {
      cancel();
    } 
    removeSid();
    window.location.replace(routes.login);
  } catch (error) {
    throw error;
  }
};
