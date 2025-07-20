import { RouterProvider } from 'react-router-dom';
import { appRoutes } from './appRoutes/index';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import viVN from 'antd/locale/vi_VN'; // Locale tiếng Việt
import enUS from 'antd/locale/en_US'; // Locale tiếng Việt
import 'dayjs/locale/vi'; // import locale cho dayjs
import 'dayjs/locale/en';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <ConfigProvider
      // key={i18n.language}
      locale={i18n.language == 'vi' ? viVN : enUS}
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      <RouterProvider router={appRoutes} />
    </ConfigProvider>
  );
}

export default App;
