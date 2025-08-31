import { Image, Typography } from 'antd';

const { Title } = Typography;

const FQA = ({ baseUrl }) => {
  return (
    <>
      <div className="fqa">
        {/* desc ------------------------- */}
        <div className="fqa__list">
          <div className="fqa__item">
            <a href="" className="fqa__link-title">
              Tại sao lại chọn chúng tôi?
            </a>
            <span className="fqa__desc">
              Tự tin với đội ngũ trẻ đầy năng lượng và sáng tạo, DevBeta sẽ cung cấp những dịch vụ phần mềm tốt nhất đến
              cho khách hàng. Dịch vụ phần mềm chất lượng cao với giá cạnh tranh nhất trên thị trường, đi cùng đó là bảo
              hành hậu mãi nhanh chóng lâu dài cho khách hàng.
            </span>
          </div>
          <div className="fqa__item">
            <a href="" className="fqa__link-title">
              Bạn có thể đặt hàng như thế nào?
            </a>
            <span className="fqa__desc">
              Đặt hàng thông qua website mua bán tự động của chúng tôi, mọi giao dịch tiện lợi và nhanh chóng. Nếu có
              thắc mắc hoặc gặp lỗi bạn vui lòng liên hệ qua hotline, fanpage và telegram của DevBeta để được giải đáp và hỗ trợ.
            </span>
          </div>
          <div className="fqa__item">
            <a href="" className="fqa__link-title">
              Chúng tôi có đảm bảo tính bảo mật không?
            </a>
            <span className="fqa__desc">
              DevBeta tự tin với kinh nghiệm trên 3 năm về bảo mật các website hay phần mềm mà chúng tôi phát triển, đảm
              bảo thông tin khách hàng được bảo mật tốt nhất.
            </span>
          </div>
          <div className="fqa__item">
            <a href="" className="fqa__link-title">
              Đội ngũ tư vấn, hỗ trợ của chúng tôi có tận tâm với công việc không?
            </a>
            <span className="fqa__desc">
              Đội ngũ tư vấn, hỗ trợ khách hàng được đào tạo chuyên nghiệp, nhanh chóng hoạt động vào các giờ hành
              chính. Chúng tôi sẽ luôn cố gắng giải quyết mọi vấn đề của bạn.
            </span>
          </div>
        </div>
        {/* image ------------------------- */}
        <div className="fqa__img">
          <Image fallback="Error" preview={false} src={baseUrl + 'images/faq-img.png'} />
        </div>
      </div>
    </>
  );
};

export default FQA;
