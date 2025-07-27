import { useEffect, useState } from 'react';
import { Layout, Image, Menu, Select, Button, Drawer } from 'antd';
import { getNavMenuItems } from '../Components/menu-item/NavMenuItems';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useProfileStore from '../store/useProfile';
import { useTranslation } from 'react-i18next';
import useInfoWebStore from '../store/infoWeb';
import routes from '../configs/routesPath';
import { logoutApp } from '../utils/auth';
import { getSid } from '../utils/auth';
import '../Styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const { Header } = Layout;

const HeaderCustom = () => {
  const [navSelectKey, setNavSelectKey] = useState(null); // Cho navMenuItems
  const [userSelectKey, setUserSelectKey] = useState(null); // Cho userMenuItems

  const [openDrawer, setOpenDrawer] = useState(false); // state open drawer

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

  const getInitMode = () => (typeof window !== 'undefined' && window.innerWidth < 1023 ? 'inline' : 'horizontal');
  const [menuMode, setMenuMode] = useState(getInitMode);

  // màn hình nhỏ hơn 1023 sẽ là horizontal()
  useEffect(() => {
    const handleResize = () => setMenuMode(window.innerWidth < 1023 ? 'inline' : 'horizontal');
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="language__label">
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
    <div className="header">
      <Header className="header__layout">
        <div className="header__left">
          {/* Logo --------------------------------- */}
          <Link className="header__logo-link" to={'/'}>
            <Image className="header__img" preview={false} src={BASE_URL_FE + 'images/logo-devbeta.svg'} alt="Image" />
          </Link>
          <Button
            className="header__btn-drawer"
            style={{ display: menuMode === 'inline' ? 'block' : 'none' }}
            type="primary"
            onClick={() => {
              setOpenDrawer(true);
            }}
            icon={<FontAwesomeIcon icon={faBars} />}
          />
          {/* Navigation Menu --------------------------------- */}
          {menuMode === 'inline' ? (
            <Drawer
              closable={false}
              onClose={() => {
                setOpenDrawer(false);
              }}
              maskClosable={true}
              open={openDrawer}
            >
              <Menu
                className="head__menu"
                theme="light"
                mode={menuMode}
                selectedKeys={[navSelectKey]}
                onClick={({ key }) => handleMenuClick(key)}
                items={navMenuItems}
              />
            </Drawer>
          ) : (
            <Menu
              className="head__menu"
              theme="light"
              mode={menuMode}
              selectedKeys={[navSelectKey]}
              onClick={({ key }) => handleMenuClick(key)}
              items={navMenuItems}
            />
          )}
        </div>
        {/* select language --------------------------------- */}
        <div className="language">
          <Select
            className="language__select"
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
