import { Button, Card, Col, Form, Image, Input, Row, Select, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClock, faLocationDot, faWallet } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Recruitment.scss';

const { Title } = Typography;

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const Recruitment = () => {
  const [formRecruitment] = Form.useForm();
  const { t } = useTranslation(); // Language

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
  const datas = jobInfo?.data;

  return (
    <>
      <div className="layout">
        <div className="layout__content recruitment">
          {/* ================= content ================= */}
          {/* Field Activity --------------------------------------------- */}
          <div className="session">
            {/* title ------------------ */}
            <Title className="section__title" level={2}>
              Tuyển dụng
            </Title>
            <Form form={formRecruitment} className="recruitment__form-filter" layout="vertical" autoComplete="off">
              <Row gutter={[20, 12]} className="">
                {/* job position, job title ---------------------------------------------- */}
                <Col span={4}>
                  <Form.Item
                    label={<div className="label-primary">Vị trí, chức danh..</div>}
                    colon={false}
                    name="position"
                    className="form-item-input mb-0"
                  >
                    <div>
                      <Input
                        className="box-search-primary"
                        // value={searchCache?.order_code}
                        // onChange={(e) => {
                        //   const value = e.target.value;
                        //   setSearchCache({ order_code: value });
                        // }}
                        allowClear
                      />
                    </div>
                  </Form.Item>
                </Col>
                {/* select income ------------------------------------ */}
                <Col span={4} className="">
                  <Form.Item
                    label={<div className="label-primary">Thu nhập</div>}
                    colon={false}
                    name="income"
                    className="form-item-select mb-0"
                    initialValue="" // mặc định là tất cả
                  >
                    <Select
                      className="select-medium"
                      // options={serverCodeOptions}
                      // onChange={(value) => {
                      //   const serverId = value ?? ''; // không chọn gì sẽ là đang chọn tất cả
                      //   setSearchCache({ server_id: serverId });
                      //   const filterData = serverCodeData?.find((item) => item.server_id === serverId);
                      //   setServerData(filterData || null);
                      // }}
                      showSearch
                      allowClear
                    />
                  </Form.Item>
                </Col>
                {/* select location ------------------------------------ */}
                <Col span={4} className="">
                  <Form.Item
                    label={<div className="label-primary">Địa điểm</div>}
                    colon={false}
                    name="location"
                    className="form-item-select mb-0"
                    initialValue="" // mặc định là tất cả
                  >
                    <Select
                      className="select-medium"
                      // options={serverCodeOptions}
                      // onChange={(value) => {
                      //   const serverId = value ?? ''; // không chọn gì sẽ là đang chọn tất cả
                      //   setSearchCache({ server_id: serverId });
                      //   const filterData = serverCodeData?.find((item) => item.server_id === serverId);
                      //   setServerData(filterData || null);
                      // }}
                      showSearch
                      allowClear
                    />
                  </Form.Item>
                </Col>
                <Col className="d-flex align-items-end">
                  <Button
                    keyButton={'search'}
                    // onClick={() => {
                    //   setOpenModal({ view_order_code: true });
                    // }}
                    className={'btn-search'}
                  >
                    Tìm kiếm
                  </Button>
                </Col>
              </Row>
            </Form>
            {/* card content ---------------------------------------- */}
            <div className="wrap-job-card">
              {datas?.map((item, index) => (
                <Card key={index} className="recruitment__job-card">
                  <div className="recruitment__job-body">
                    <div className="recruitment__job-info">
                      <Image
                        className="recruitment__job-img"
                        preview={false}
                        src={BASE_URL_FE + 'images/recruitment-icon.png'}
                      />
                      <div>
                        <Title level={4}>{item.title}</Title>
                        <div className="recruitment__job-item ps-4">{item.company}</div>
                        <div className="recruitment__job-item">
                          <FontAwesomeIcon className="recruitment__job-icon" icon={faLocationDot} />
                          <span className="recruitment__job-desc">{item.address}</span>
                        </div>
                        <div className="recruitment__job-item">
                          <FontAwesomeIcon className="recruitment__job-icon" icon={faBriefcase} />
                          <span className="recruitment__job-desc">{item.workingTime}</span>
                        </div>
                        <div className="recruitment__job-item">
                          <FontAwesomeIcon className="recruitment__job-icon" icon={faWallet} />
                          <span className="recruitment__job-desc">{item.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="recruitment__job-time-update">
                      <FontAwesomeIcon className="recruitment__job-icon" icon={faClock} />
                      <span className="ps-10">{item.updateTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
