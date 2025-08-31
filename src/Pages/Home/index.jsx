import { useEffect, useState } from 'react';
import { Form, Image, message, Typography } from 'antd';
import useStateDev from '../../utils/useStateDev';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FieldActivity from './Components/FieldActivity';
import FeaturedProducts from './Components/FeaturedProducts';
import useInfoWebStore from '../../store/infoWeb';
import '../../Styles/HomePage.scss';
import FAQ from './Components/FAQ';
import SubBanner from './Components/SubBanner';

const { Title } = Typography;

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const HomePage = () => {
  const state = useStateDev();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Language
  const [messageApi, contextHolder] = message.useMessage();
  const [formRecruitment] = Form.useForm();

  const { infoWeb, fetchInfoWeb } = useInfoWebStore();

  useEffect(() => {
    fetchInfoWeb(); // gọi API lấy info web
  }, []);

  const [bannerSrc, setBannerSrc] = useState(BASE_URL_FE + 'images/banner-primary.jpg');

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setBannerSrc(BASE_URL_FE + 'images/banner-primary-mobile.jpg');
    } else {
      setBannerSrc(BASE_URL_FE + 'images/banner-primary.jpg');
    }
  };

  handleResize(); // chạy lần đầu
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <>
      {contextHolder}
      <div className="layout">
        <div className="layout__content home">
          {/* ================= banner ================= */}
          <div className="home__banner">
            <div className="home__width">
              <Image
                className="banner__img"
                fallback="Error"
                preview={false}
                src={bannerSrc}
              />
            </div>
          </div>

          <div className="section section--sub-banner">
            <div className="section__width">
              <SubBanner infoWeb={infoWeb} baseUrl={BASE_URL_FE} />
            </div>
          </div>

          {/* ================= content ================= */}
          {/* Field Activity --------------------------------------------- */}
          <div className="section section--activity">
            <div className="section__width">
              <Title className="section__title" level={2}>
                Lĩnh vực hoạt động
              </Title>
              <FieldActivity baseUrl={BASE_URL_FE} />
            </div>
          </div>

          {/* Featured Products --------------------------------------------- */}
          <div className="section section--products">
            <div className="section__width">
              <Title className="section__title" level={2}>
                Sản phẩm nổi bật
              </Title>
              <FeaturedProducts baseUrl={BASE_URL_FE} />
            </div>
          </div>

          {/* Recruitment --------------------------------------------- */}
          {/* <div className="section section--employee-team">
            <Title className="section__title" level={2}>
              Tuyển dụng
            </Title>
            <Recruitment form={formRecruitment} datas={datasRecruitment} baseUrl={BASE_URL_FE} />
          </div> */}

          {/* design DevTeam --------------------------------------------- */}
          {/* <div className="section section--employee-team">
            <Title className="section__title" level={2}>
              Đội ngũ nhân viên
            </Title>
            <EmployeeTeam baseUrl={BASE_URL_FE} />
          </div> */}

          {/* FAQ --------------------------------------------- */}
          <div className="section section--fqa">
            <div className="section__width">
              <Title className="section__title" level={2}>
                Câu hỏi thường gặp
              </Title>
              <FAQ baseUrl={BASE_URL_FE} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
