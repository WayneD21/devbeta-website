import { useEffect, useState } from 'react';
import { Layout, Image, Menu, Select} from 'antd';
import { getNavMenuItems } from '../Components/menu-item/NavMenuItems';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useProfileStore from '../store/useProfile';
import { useTranslation } from 'react-i18next';
import useInfoWebStore from '../store/infoWeb';
import routes from '../configs/routesPath';
import { logoutApp } from '../utils/auth';
import { getSid } from '../utils/auth';
import '../Styles/Header.scss';

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const { Header } = Layout;

const HeaderCustom = () => {
  const [navSelectKey, setNavSelectKey] = useState(null); // Cho navMenuItems
  const [userSelectKey, setUserSelectKey] = useState(null); // Cho userMenuItems

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'vi');
  const location = useLocation();
  const navigate = useNavigate();

  const { fetchInfoWeb } = useInfoWebStore();
  const { profile, fetchProfile } = useProfileStore(); // call profile

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    fetchInfoWeb();
  }, []);

  useEffect(() => {
    if (getSid()) {
      fetchProfile();
    }
  }, [fetchProfile]);

  const languageFiles = [
    { value: 'vi', flag: BASE_URL_FE + 'images/vnflag.png' },
    { value: 'en', flag: BASE_URL_FE + 'images/americaflag.png' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // i18next sẽ tự cache
    setLanguage(lng);
  };

  const handleUserMenuClick = (key) => {
    if (key === routes.logout) {
      logoutApp();
    } else if (key === routes.login) {
      navigate(routes.login);
    } else {
      setUserSelectKey(key);
      navigate(`${routes.account}/${key}`);
    }
  };

  const handleMenuClick = (key) => {
    setNavSelectKey(key);
    navigate(key);
  };

  const navMenuItems = getNavMenuItems(t);

  useEffect(() => {
    setNavSelectKey(location.pathname); // menu điều hướng chính
    const userPath = location.pathname.startsWith(routes.account)
      ? location.pathname.replace(routes.account, '').replace(/^\//, '') || ''
      : null;
    setUserSelectKey(userPath); // menu người dùng
  }, [location.pathname]);

  const optionsLanguage = languageFiles.map((item) => ({
    key: item.value,
    value: item.value,
    label: (
      <div className="btn-language">
        <Image
          className="rounded-circle"
          width={26}
          title={item.name}
          src={item.flag}
          preview={false}
          style={{
            verticalAlign: 'initial',
          }}
        />
      </div>
    ),
  }));

  return (
    <div className="header-container">
      <Header className="header-layout">
        <div className='wrap-logo-menu'>
          {/* Logo --------------------------------- */}
          <Link className="wrap-logo" to={'/'}>
            <Image preview={false} src={BASE_URL_FE + 'images/logo-devbeta.svg'} alt="Image" />
          </Link>
          {/* Navigation Menu --------------------------------- */}
          <Menu
            className="menu-head-container"
            theme="light"
            mode="horizontal"
            selectedKeys={[navSelectKey]}
            onClick={({ key }) => handleMenuClick(key)}
            items={navMenuItems}
          />
        </div>
        {/* select language --------------------------------- */}
        <div className='wrap-language'>
          <Select
            className="select-language me-20"
            style={{ width: '42px', height: '34px' }}
            value={language}
            onChange={changeLanguage}
            options={optionsLanguage}
            suffixIcon={null}
          />
        </div>
      </Header>
    </div>
  );
};

export default HeaderCustom;
