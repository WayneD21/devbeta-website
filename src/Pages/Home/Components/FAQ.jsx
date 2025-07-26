import { Image, Typography } from 'antd';

const { Title } = Typography;

const FAQ = ({ baseUrl }) => {
  return (
    <>
      <div className="faq">
        {/* desc ------------------------- */}
        <div className="faq__list">
          <div className="faq__item">
            <Title level={4}>Tại sao lại chọn chúng tôi?</Title>
            <span className="faq__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
              fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.lis arcu.
              Suspendisse sit amet ultricies risus, vel consequat liber
            </span>
          </div>
          <div className="faq__item">
            <Title level={4}>Bạn có thể đặt hàng như thế nào?</Title>
            <span className="faq__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
              fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.lis arcu.
              Suspendisse sit amet ultricies risus, vel consequat liber
            </span>
          </div>
          <div className="faq__item">
            <Title level={4}>Chúng tôi có đảm bảo tính bảo mật không?</Title>
            <span className="faq__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
              fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.lis arcu.
              Suspendisse sit amet ultricies risus, vel consequat liber
            </span>
          </div>
          <div className="faq__item">
            <Title level={4}>Đội ngũ tư vấn, hỗ trợ của chúng tôi có tận tâm với công việc không?</Title>
            <span className="faq__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pellentesque nulla. Curabitur non
              fermentum sapien, eget iaculis arcu. Suspendisse sit amet ultricies risus, vel consequat libero.lis arcu.
              Suspendisse sit amet ultricies risus, vel consequat liber
            </span>
          </div>
        </div>
        {/* image ------------------------- */}
        <div className="wrap-faq__img">
          <Image className="faq__img" fallback="Error" preview={false} src={baseUrl + 'images/faq-img.png'} />
        </div>
      </div>
    </>
  );
};

export default FAQ;
