import { useEffect } from 'react';
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

  const jobInfo = {
    data: [
      {
        title: 'Lập trình viên Backend thực tập',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: '3 Tháng',
        salary: 'Thỏa thuận',
        updateTime: '1 tuần trước',
      },
      {
        title: 'Lập trình viên Backend',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: '8-15 triệu đồng',
        updateTime: '1 tuần trước',
      },
      {
        title: 'Lập trình viên Frontend',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: '8-15 triệu đồng',
        updateTime: '1 tuần trước',
      },
      {
        title: 'Designer',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: '8-15 triệu đồng',
        updateTime: '1 tuần trước',
      },
    ],
  };

  const datasRecruitment = jobInfo?.data;

  return (
    <>
      {contextHolder}
      <div className="layout">
        <div className="layout__content home">
          {/* ================= banner ================= */}
          <div className="home__banner">
            <div className="home__width">
              <div className="banner__hero">
                <div className="banner__text">
                  <h1 className="banner__title">
                    <div>
                      UY TÍN, <span style={{ color: 'var(--blue)' }}>CHẤT LƯỢNG,</span>
                    </div>
                    <span>BẮT KỊP XU THẾ</span>
                  </h1>
                  <p className="banner__subtitle">
                    DEB BETA với đội ngũ trẻ, luôn luôn năng động, nhiệt huyết và sáng tạo. Chúng tôi sẽ cung cấp các
                    dịch vụ phần mềm tốt nhất và hiệu quả nhất cho khách hàng của chúng tôi
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
          </div>

          <div className="section section--sub-banner">
            <div className="section__width">
              <SubBanner baseUrl={BASE_URL_FE} />
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
