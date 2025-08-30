import { Card, Image, Typography } from 'antd';

const { Title } = Typography;

const FieldActivity = ({ baseUrl }) => {
  return (
    <>
      <div className="field-activity">
        <div className="field-activity__list">
          {/* ------------------------------------- */}
          <div className="field-activity__item item-release">
            <Card className="field-activity__card card-release">
              <div className="field-activity__cot-affter release"></div>
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
                Với kinh nghiệm phát triển phần mềm, website trên 3 năm. Chúng tôi đặt bảo mật sản phẩm lên hàng đầu để
                bảo vệ thông tin khách hàng và người dùng. Cung cấp các phần mềm, website từ đơn giản đến phức tạp theo
                nhu cầu của khách hàng.
              </span>
            </Card>
          </div>
          {/* ------------------------------------- */}
          <div className="field-activity__item item-social-ads">
            <Card className="field-activity__card card-social-ads">
              <div className="field-activity__cot-affter social-ads"></div>
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
                Bạn muốn quảng bá sản phẩm đến nhiều người biết đến hơn? Chúng tôi cung cấp dịch vụ quảng cáo sản phẩm
                trên các nền tảng như Facebook, Tiktok, Google, Youtube,... thiết kế poster, banner, theo yêu cầu của
                khách hàng chuyên nghiệp và nhanh chóng.
              </span>
            </Card>
          </div>
          {/* ------------------------------------- */}
          <div className="field-activity__item item-provide">
            <Card className="field-activity__card card-provide">
              <div className="field-activity__cot-affter provide"></div>
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
                Cung cấp các thiết bị, linh kiện liên quan đến máy tính, proxy,... Được tư vấn nhiệt tình bởi nhân viên
                có chuyên môn và kinh nghiệm, đảm bảo thiết bị vận hành trơn tru mượt mà với giá cạnh tranh nhất.
              </span>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldActivity;
