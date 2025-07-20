import { Card, Image } from 'antd';

const FeaturedProducts = ({ baseUrl }) => {
  return (
    <>
      <div className="featured-products">
        <div className="featured-products-list">
          {/*  */}
          <div className="featured-products-item">
            <Card className="featured-products-card">
              <div className="featured-products-icon">
                <Image
                  className=""
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/featured-products-viewrp.png'}
                />
              </div>
              <span className="title">Thiết kế, phát hành webstie - app, tool - software</span>
              <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
        </div>
        <div className="featured-products-list">
          {/*  */}
          <div className="featured-products-item">
            <Card className="featured-products-card">
              <div className="featured-products-icon">
                <Image
                  className=""
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/featured-products-box-proxy.png'}
                />
              </div>
              <span className="title">Truyền thông, quảng cáo, sự kiện</span>
              <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
                fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.
              </span>
            </Card>
          </div>
        </div>
        <div className="featured-products-list">
          {/*  */}
          <div className="featured-products-item">
            <Card className="featured-products-card">
              <div className="featured-products-icon">
                <Image
                  className=""
                  fallback="Error"
                  preview={false}
                  src={baseUrl + 'images/featured-products-design-website.png'}
                />
              </div>
              <span className="title">Cung cấp thiết bị, linh kiện máy tính - viễn thông</span>
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

export default FeaturedProducts;
