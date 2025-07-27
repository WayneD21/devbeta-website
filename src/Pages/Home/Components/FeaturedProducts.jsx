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
                  <Title level={4}>ViewRP</Title>
                  <span className="featured-products__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                    fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
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
                  <Title level={4}>Box Proxy</Title>
                  <span className="featured-products__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                    fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
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
                  <Title level={4}>Dịch vụ thiết kế website</Title>
                  <span className="featured-products__desc">
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
