import { create } from "zustand";
import { apiGet } from "../utils/api.js";

/**
 * Store chuyên quản lý dữ liệu hồ sơ người dùng (/users/profile).
 * - Luôn cache kết quả lần đầu để các page khác tái sử dụng.
 * - Cung cấp hàm refreshProfile nếu cần ép gọi lại API.
 */
const useProfileStore = create((set, get) => ({
  /** Dữ liệu profile */
  profile: null,
  /** Trạng thái loading khi gọi mạng */
  loading: false,
  /** Thông tin lỗi (nếu có) */
  error: null,

  /**
   * Gọi API /users/profile duy nhất 1 lần và cache.
   * Trả về dữ liệu (hoặc cache) để component có thể await.
   */
  fetchProfile: async () => {
    // 1. Nếu đã có profile → trả cache luôn
    if (get().profile) return get().profile;
    // 2. Nếu đang loading → bỏ qua (tránh double‑request)
    if (get().loading) return null;

    set({ loading: true, error: null });
    try {
      const resp = await apiGet("/users/profile");

      set({ profile: resp, loading: false });
      return resp;
    } catch (err) {
      set({ error: err, loading: false });
      throw err;
    }
  },

  /**
   * Ép làm mới profile: xoá cache rồi gọi lại fetchProfile.
   */
  refreshProfile: async () => {
    set({ profile: null });
    return get().fetchProfile();
  },
}));

export default useProfileStore;
