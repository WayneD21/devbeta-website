import { Form, Image, message, Typography } from 'antd';
import useStateDev from '../../utils/useStateDev';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FieldActivity from './Components/FieldActivity';
import FeaturedProducts from './Components/FeaturedProducts';
// import EmployeeTeam from './Components/EmployeeTeam';
import Recruitment from './Components/Recruitment';
import FAQ from './Components/FAQ';
import '../../Styles/HomePage.scss';

const { Title } = Typography;

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const HomePage = () => {
  const state = useStateDev();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Language
  const [messageApi, contextHolder] = message.useMessage();
  const [formRecruitment] = Form.useForm();

  const jobInfo = {
    data: [
      {
        title: 'Lập trình viên thực tập',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: 'Thỏa thuận',
        updateTime: '1 tuần trước',
      },
      {
        title: 'Lập trình viên thực tập',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: 'Thỏa thuận',
        updateTime: '1 tuần trước',
      },
      {
        title: 'Lập trình viên thực tập',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: 'Thỏa thuận',
        updateTime: '1 tuần trước',
      },
      {
        title: 'Lập trình viên thực tập',
        company: 'Công ty cổ phần DevBeta',
        address: 'Ngòi A, Văn Yên, Yên Bái',
        workingTime: 'Full-time',
        salary: 'Thỏa thuận',
        updateTime: '1 tuần trước',
      },
    ],
  };
  
  const datasRecruitment = jobInfo?.data;
  console.log(datasRecruitment);

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
                  fermentum sapien, eget iaculis arcu. sapien, eget iaculis arcu. sapien, eget iaculis arcu.
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
            <Title className="section__title" level={2}>
              Lĩnh vực hoạt động
            </Title>
            <FieldActivity baseUrl={BASE_URL_FE} />
          </div>

          {/* Featured Products --------------------------------------------- */}
          <div className="section section--products">
            <Title className="section__title" level={2}>
              Sản phẩm nổi bật
            </Title>
            <FeaturedProducts baseUrl={BASE_URL_FE} />
          </div>

          {/* design DevTeam --------------------------------------------- */}
          <div className="section section--employee-team">
            <Title className="section__title" level={2}>
              Tuyển dụng
            </Title>
            <Recruitment form={formRecruitment} datas={datasRecruitment} baseUrl={BASE_URL_FE} />
          </div>

          {/* design DevTeam --------------------------------------------- */}
          {/* <div className="section section--employee-team">
            <Title className="section__title" level={2}>
              Đội ngũ nhân viên
            </Title>
            <EmployeeTeam baseUrl={BASE_URL_FE} />
          </div> */}

          {/* FAQ --------------------------------------------- */}
          <div className="section section--fqa">
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
