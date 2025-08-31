import { Button, Image, Typography } from 'antd';

const { Title } = Typography;

const SubBanner = ({ baseUrl,infoWeb }) => {
  return (
    <>
      <div className="sub-banner">
        {/* desc ------------------------- */}
        <div className="sub-banner__wrap">
          <div className="sub-banner__left">Được phục vụ bạn là Vinh Hạnh của chúng tôi</div>
          <div className="sub-banner__center"></div>
          <div className="sub-banner__right">
            <div className="sub-banner___right-text">
              Trở thành đối tác đồng hành và phát triển cùng các bạn là niềm tự hào lớn lao đối với DevBeta.
            </div>
            <a className="sub-banner___right-link" href="https://m.me/devbeta.vn" target="_blank" rel="noopener noreferrer">
              Tư vấn tôi?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBanner;
