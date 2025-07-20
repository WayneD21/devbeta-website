import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // tải ngôn ngữ từ backend hoặc file JSON
  .use(LanguageDetector) // tự động phát hiện ngôn ngữ
  .use(initReactI18next) // tích hợp với React
  .init({
    supportedLngs: ['vi', 'en'], // Sử dụng 'vi' thay vì 'vn' cho tiếng Việt
    fallbackLng: 'vi', // Ngôn ngữ mặc định là tiếng Việt
    detection: {
      // Ưu tiên đọc localStorage trước, nếu chưa có thì mới đọc cookie, navigator…
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage'], // hoặc ['cookie', 'localStorage'] nếu muốn dùng cả hai
      lookupLocalStorage: 'i18nextLng',
      cookieName: 'language',
    },
    backend: {
      loadPath: '/languages/{{lng}}.json', // Đường dẫn đến file JSON chứa ngôn ngữ
    },
    interpolation: {
      escapeValue: false, // React tự động xử lý XSS
    },
    // debug: true, // kiểm tra lỗi
  });

export default i18n;
