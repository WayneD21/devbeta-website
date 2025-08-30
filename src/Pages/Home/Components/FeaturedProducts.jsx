import { Card, Image, Typography } from 'antd';

const { Title } = Typography;

const FeaturedProducts = ({ baseUrl }) => {
  return (
    <>
      <div className="featured-products">
        <div className="featured-products__list">
          {/*  */}
          <div className="featured-products__item">
            <Card className="featured-products__card">
              <div className="featured-products__body">
                <div className="featured-products__icon">
                  <Image
                    className="featured-products__img"
                    fallback="Error"
                    preview={false}
                    src={baseUrl + 'images/featured-products-viewrp.png'}
                  />
                </div>
                <div className="featured-products__text">
                  <div className="featured-products__divider"></div>
                  <Title level={4}>ViewRP</Title>
                  <span className="featured-products__desc">
                    ViewRP - Thế hệ mới của điều khiển điện thoại từ xa thông qua nền tảng website dù ở bất cứ đâu, bạn
                    chỉ cần có thiết bị hỗ trợ trình duyệt và kết nối internet. Điều khiển một hay nhiều thiết bị đồng
                    thời - tối ưu cho công việc cần tốc độ và quy mô.
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/*  */}
          <div className="featured-products__item">
            <Card className="featured-products__card">
              <div className="featured-products__body">
                <div className="featured-products__icon">
                  <Image
                    className="featured-products__img"
                    fallback="Error"
                    preview={false}
                    src={baseUrl + 'images/featured-products-box-proxy.png'}
                  />
                </div>
                <div className="featured-products__text">
                  <div className="featured-products__divider"></div>
                  <Title level={4}>Box Proxy</Title>
                  <span className="featured-products__desc">
                    Box proxy - chúng tôi tự tin là sản phẩm có giá thành hợp lý nhất hiện nay. Dùng cho nhiều mục đích
                    sử dụng, tạo ra nhiều ip nhanh chóng và tối ưu nhất
                  </span>
                </div>
              </div>
            </Card>
          </div>
          {/*  */}
          <div className="featured-products__item">
            <Card className="featured-products__card">
              <div className="featured-products__body">
                <div className="featured-products__icon">
                  <Image
                    className="featured-products__img"
                    fallback="Error"
                    preview={false}
                    src={baseUrl + 'images/featured-products-design-website.png'}
                  />
                </div>
                <div className="featured-products__text">
                  <div className="featured-products__divider"></div>
                  <Title level={4}>Dịch vụ thiết kế website</Title>
                  <span className="featured-products__desc">
                    Một website tuyệt vời không chỉ là sự trải nghiệm mượt mà và thực dụng của website, mà hơn hết chính
                    là sự bảo mật cao của những sản phẩm chúng tôi tạo ra.
                    <ul className="featured-products__desc-phu">
                      <li>🌐 Website công ty, bán hàng, cá nhân, tin tức…</li>
                      <li>🚀 Sử dụng và bảo hành trọn đời, chỉ gia hạn hosting & domain</li>
                      <li>💰 Thanh toán sau khi hoàn thiện</li>
                    </ul>
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
