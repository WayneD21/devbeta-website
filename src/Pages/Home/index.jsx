import { Image, message, Typography } from 'antd';
import useStateDev from '../../utils/useStateDev';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FieldActivity from './Components/FieldActivity';
import FeaturedProducts from './Components/FeaturedProducts';
import FAQ from './Components/FAQ';
import '../../Styles/HomePage.scss';
import EmployeeTeam from './Components/EmployeeTeam';

const { Title } = Typography;

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const HomePage = () => {
  const state = useStateDev();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Language
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <div className="layout">
        <div className="layout__content home">
          {/* ================= banner ================= */}
          <div className="home__banner">
            <div className="banner__hero">
              <div className="banner__text">
                <h1 className="banner__title">
                  <div>
                    UY TÍN, <span style={{ color: 'var(--blue)' }}>CHẤT LƯỢNG,</span>
                  </div>
                  <span>BẮT KỊP XU THẾ</span>
                </h1>
                <p className="banner__subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                  fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
                </p>
              </div>
            </div>
            <Image
              className="banner__img"
              fallback="Error"
              preview={false}
              src={BASE_URL_FE + 'images/banner-primary.png'}
            />
          </div>

          {/* ================= content ================= */}
          {/* Field Activity --------------------------------------------- */}
          <div className="section section--activity">
            {/* title ------------------ */}
            <Title className="section__title" level={2}>
              Lĩnh vực hoạt động
            </Title>
            <FieldActivity baseUrl={BASE_URL_FE} />
          </div>

          {/* Featured Products --------------------------------------------- */}
          <div className="section section--products">
            {/* title ------------------ */}
            <Title className="section__title" level={2}>
              Sản phẩm nổi bật
            </Title>
            <FeaturedProducts baseUrl={BASE_URL_FE} />
          </div>

          {/* Featured Products --------------------------------------------- */}
          <div className="section section--employee-team">
            {/* title ------------------ */}
            <Title className="section__title" level={2}>
              Đội ngũ nhân viên
            </Title>
            <EmployeeTeam baseUrl={BASE_URL_FE} />
          </div>

          {/* FAQ --------------------------------------------- */}
          <div className="section section--fqa">
            {/* title ------------------ */}
            <Title className="section__title" level={2}>
              Câu hỏi thường gặp
            </Title>

            <FAQ baseUrl={BASE_URL_FE} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
