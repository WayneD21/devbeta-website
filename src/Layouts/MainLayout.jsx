import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import routes from '../configs/routesPath';
import { getSid } from '../utils/auth';
import FooterD from '../Components/FooterComps';
import HeaderCustom from './Header';
import '../Styles/MainLayout.scss';
import { Layout } from 'antd';

const MainLayout = () => {
  const [islog, setIsLog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const bypass_log = [routes.base_url, routes.home, routes.product, routes.rules, routes.document];

  useEffect(() => {
    if (!getSid() && !bypass_log.includes(location.pathname)) {
      navigate(routes.login);
    } else {
      setIsLog(true);
    }
  }, [location.pathname]);

  return (
    islog && (
      <>
        <div className="wrap-main-layout">
          <Layout className="layout-nef">
            <HeaderCustom />
            <main className="main-layout">
              <Outlet />
            </main>
            {/* footer ---------------------------------------------- */}
            <FooterD />
          </Layout>
        </div>
      </>
    )
  );
};

export default MainLayout;
