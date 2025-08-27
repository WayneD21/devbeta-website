import { Button, Card, Col, Form, Image, Input, Row, Select, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClock, faLocationDot, faWallet } from '@fortawesome/free-solid-svg-icons';

const { Title } = Typography;

const Recruitment = ({ t, baseUrl, form, datas }) => {
  return (
    <>
      <div className="layout">
        <div className="layout__content recruitment">
          {/* ================= content ================= */}
          {/* Field Activity --------------------------------------------- */}
          <Form form={form} className="recruitment__form-filter" layout="vertical" autoComplete="off">
            <Row gutter={[20, 12]} className="recruitment__row-filter">
              {/* job position, job title ---------------------------------------------- */}
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="">
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
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="">
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
                      src={baseUrl + 'images/recruitment-icon.png'}
                    />
                    <div>
                      <Title className="recruitment__job-title" level={4}>
                        {item.title}
                      </Title>
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
    </>
  );
};

export default Recruitment;
