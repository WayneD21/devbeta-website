import { useEffect, useRef, useState } from 'react';
import { Image, Row, Col, Button, message, Modal, Card } from 'antd';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import FooterD from '../../Components/FooterComps';
import useStateDev from '../../utils/useStateDev';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import routes from '../../configs/routesPath';
import '../../Styles/HomePage.scss';
import FieldActivity from './Components/FieldActivity';
import FeaturedProducts from './Components/FeaturedProducts';
const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const HomePage = () => {
  const state = useStateDev();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Language
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <div className="wrap-content-page">
        <div className="content-nef">
          {/* ================= banner ================= */}
          <div className="banner">
            <div className="hero">
              <div className="hero-text">
                <h1 className="hero-title">
                  <div>
                    UY TÍN, <span style={{ color: 'var(--blue)' }}>CHẤT LƯỢNG,</span>
                  </div>
                  <span>BẮT KỊP XU THẾ</span>
                </h1>
                <p className="hero-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                  fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
                </p>
              </div>
            </div>
            <Image
              className="img-banner"
              fallback="Error"
              preview={false}
              src={BASE_URL_FE + 'images/banner-primary.jpg'}
            />
          </div>
          {/* ================= content ================= */}
          {/* Field Activity --------------------------------------------- */}
          <div className="session session-first">
            {/* title ------------------ */}
            <div className="title">Lĩnh vực hoạt động</div>
            <FieldActivity baseUrl={BASE_URL_FE} />
          </div>

          {/* Featured Products --------------------------------------------- */}
          <div className="session session-second">
            {/* title ------------------ */}
            <div className="title">Sản phẩm nổi bật</div>
            <FeaturedProducts baseUrl={BASE_URL_FE} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
