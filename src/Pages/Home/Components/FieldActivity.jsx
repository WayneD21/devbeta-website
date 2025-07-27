import { Card, Image, Typography } from 'antd';

const { Title } = Typography;

const FieldActivity = ({ baseUrl }) => {
  return (
    <>
      <div className="field-activity">
        <div className="field-activity__list">
          {/* ------------------------------------- */}
          <div className="field-activity__item">
            <Card className="field-activity__card">
              <div className="field-activity__icon">
                <Image
                  className="field-activity__img"
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/field-activity-release.png'}
                />
              </div>
              <Title level={4}>Thiết kế, phát hành webstie - app, tool - software</Title>
              <span className="field-activity__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
          {/* ------------------------------------- */}
          <div className="field-activity__item">
            <Card className="field-activity__card">
              <div className="field-activity__icon">
                <Image
                  className="field-activity__img"
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/field-activity-social-ads.png'}
                />
              </div>
              <Title level={4}>Truyền thông, quảng cáo, sự kiện</Title>
              <span className="field-activity__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
          {/* ------------------------------------- */}
          <div className="field-activity__item">
            <Card className="field-activity__card">
              <div className="field-activity__icon">
                <Image
                  className="field-activity__img"
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/field-activity-provide.png'}
                />
              </div>
              <Title level={4}>Cung cấp thiết bị, linh kiện máy tính - viễn thông</Title>
              <span className="field-activity__desc">
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
