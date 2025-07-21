import { Card, Image, Typography } from 'antd';

const { Title } = Typography;

const FeaturedProducts = ({ baseUrl }) => {
  return (
    <>
      <div className="featured-products">
        <div className="featured-products-list">
          {/*  */}
          <div className="featured-products-item">
            <Card className="featured-products-card">
              <div className="featured-products-card-body">
                <div className="featured-products-icon">
                  <Image
                    className=""
                    fallback="Error"
                    preview={false}
                    src={baseUrl + 'images/featured-products-viewrp.png'}
                  />
                </div>
                <div className="wrap-text">
                  <Title level={2}>ViewRP</Title>
                  <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                    fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="featured-products-list">
          {/*  */}
          <div className="featured-products-item">
            <Card className="featured-products-card">
              <div className="featured-products-card-body">
                <div className="featured-products-icon">
                  <Image
                    className=""
                    fallback="Error"
                    preview={false}
                    src={baseUrl + 'images/featured-products-box-proxy.png'}
                  />
                </div>
                <div className="wrap-text">
                  <Title level={2}>Box Proxy</Title>
                  <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                    fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="featured-products-list">
          {/*  */}
          <div className="featured-products-item">
            <Card className="featured-products-card">
              <div className="featured-products-card-body">
                <div className="featured-products-icon">
                  <Image
                    className=""
                    fallback="Error"
                    preview={false}
                    src={baseUrl + 'images/featured-products-design-website.png'}
                  />
                </div>
                <div className="wrap-text">
                  <Title level={2}>Dịch vụ thiết kế website</Title>
                  <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                    fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
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
