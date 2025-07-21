import { Card, Image, Typography } from 'antd';

const { Title } = Typography;

const FieldActivity = ({ baseUrl }) => {
  return (
    <>
      <div className="field-activity">
        <div className="field-activity-list">
          {/*  */}
          <div className="field-activity-item">
            <Card className="field-activity-card">
              <div className="field-activity-icon">
                <Image
                  className=""
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/field-activity-release.jpg'}
                />
              </div>
              <Title level={5}>Thiết kế, phát hành webstie - app, tool - software</Title>
              <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
        </div>
        <div className="field-activity-list">
          {/*  */}
          <div className="field-activity-item">
            <Card className="field-activity-card">
              <div className="field-activity-icon">
                <Image
                  className=""
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/field-activity-social-ads.jpg'}
                />
              </div>
              <Title level={5}>Truyền thông, quảng cáo, sự kiện</Title>
              <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
        </div>
        <div className="field-activity-list">
          {/*  */}
          <div className="field-activity-item">
            <Card className="field-activity-card">
              <div className="field-activity-icon">
                <Image
                  className=""
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/field-activity-provide.jpg'}
                />
              </div>
              <Title level={5}>Cung cấp thiết bị, linh kiện máy tính - viễn thông</Title>
              <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldActivity;
