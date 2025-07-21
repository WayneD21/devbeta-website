import React from 'react';
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

  return (
    <>
      <div className="wrap-content-page">
        <div className="content-nef recruitment">
          {/* ================= content ================= */}
          {/* Field Activity --------------------------------------------- */}
          <div className="session">
            {/* title ------------------ */}
            <Title className="title-page" level={2}>
              Tuyển dụng
            </Title>
            <Form form={formRecruitment} className='pt-10 pb-16' layout="vertical" autoComplete="off">
              <Row gutter={[20, 12]} className="">
                {/* job position, job title ---------------------------------------------- */}
                <Col span={4}>
                  <Form.Item
                    label={<div className="label-primary">Vị trí, chức danh..</div>}
                    colon={false}
                    name="order_code"
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
                    name="server_id"
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
                    name="server_id"
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
                    keyButton={'edit_add_item'}
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
            <Card className="recruitment-job-card">
              <div className='recruitment-job-body'>
                <Image
                  className="recruitment-job-icon"
                  preview={false}
                  src={BASE_URL_FE + 'images/recruitment-icon.png'}
                />
                <div className="lists">
                  <Title level={5}>Lập trình viên thực tập</Title>
                  <div className="item ps-4">Công ty cổ phần DevBeta</div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                    <span className='desc'>Ngòi A, Văn Yên, Yên Bái</span>
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faBriefcase} />
                    <span className='desc'>Full-time</span>
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faWallet} />
                    <span className='desc'>Thỏa thuận</span>
                  </div>
                </div>
                <div className="time-update">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                  <span className='ps-10'>1 tuần trước</span>
                </div>
              </div>
            </Card>
            <Card className="recruitment-job-card">
              <div className='recruitment-job-body'>
                <Image
                  className="recruitment-job-icon"
                  preview={false}
                  src={BASE_URL_FE + 'images/recruitment-icon.png'}
                />
                <div className="lists">
                  <Title level={5}>Lập trình viên thực tập</Title>
                  <div className="item ps-4">Công ty cổ phần DevBeta</div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                    <span className='desc'>Ngòi A, Văn Yên, Yên Bái</span>
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faBriefcase} />
                    <span className='desc'>Full-time</span>
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faWallet} />
                    <span className='desc'>Thỏa thuận</span>
                  </div>
                </div>
                <div className="time-update">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                  <span className='ps-10'>1 tuần trước</span>
                </div>
              </div>
            </Card>
            <Card className="recruitment-job-card">
              <div className='recruitment-job-body'>
                <Image
                  className="recruitment-job-icon"
                  preview={false}
                  src={BASE_URL_FE + 'images/recruitment-icon.png'}
                />
                <div className="lists">
                  <Title level={5}>Lập trình viên thực tập</Title>
                  <div className="item ps-4">Công ty cổ phần DevBeta</div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                    <span className='desc'>Ngòi A, Văn Yên, Yên Bái</span>
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faBriefcase} />
                    <span className='desc'>Full-time</span>
                  </div>
                  <div className="item">
                    <FontAwesomeIcon className='icon' icon={faWallet} />
                    <span className='desc'>Thỏa thuận</span>
                  </div>
                </div>
                <div className="time-update">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                  <span className='ps-10'>1 tuần trước</span>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
