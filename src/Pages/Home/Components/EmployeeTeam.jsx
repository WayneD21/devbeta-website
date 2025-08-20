import { Carousel, Image } from 'antd';

const EmployeeTeam = ({ baseUrl }) => {
  return (
    <>
      <div className="employee-team">
        <Carousel className="employee-team__carousel" arrows autoplay autoplaySpeed={2000}>
          <div className="employee-team__img">
            <Image src={baseUrl + 'images/anhcty.jpg'} />
          </div>
          <div className="employee-team__img">
            <Image src={baseUrl + 'images/nhanviencty1.jpg'} />
          </div>
          <div className="employee-team__img">
            <Image src={baseUrl + 'images/nhanviencty2.jpg'} />
          </div>
        </Carousel>
        <div className="employee-team__members">
          <div className="employee-team__lists">
            <div className="employee-team__item">
              <div className="employee-team__member-img employee-team__bg-manager">
                <Image preview={false} src={baseUrl + 'images/wayne-member.jpg'} />
              </div>
              <div className="employee-team__info employee-team__info-manager">
                <span className="employee-team__position">Giám đốc</span>
                <span className="employee-team__name">Hà Đức Hậu</span>
              </div>
            </div>
            <div className="employee-team__item">
              <div className="employee-team__member-img">
                <Image preview={false} src={baseUrl + 'images/linh-member.jpg'} />
              </div>
              <div className="employee-team__info">
                {/* executiveAssistant */}
                <span className="employee-team__position">Trợ lý điều hành</span>
                <span className="employee-team__name">Nguyễn Thùy Linh</span>
              </div>
            </div>
            <div className="employee-team__item">
              <div className="employee-team__member-img">
                <Image preview={false} src={baseUrl + 'images/wayne-member.jpg'} />
              </div>
              <div className="employee-team__info">
                <span className="employee-team__position">Frontend developer</span>
                <span className="employee-team__name">Hà Đình Duyệt</span>
              </div>
            </div>
            <div className="employee-team__item">
              <div className="employee-team__member-img">
                <Image preview={false} src={baseUrl + 'images/minh-member.jpg'} />
              </div>
              <div className="employee-team__info">
                <span className="employee-team__position">Backend developer</span>
                <span className="employee-team__name">Đào Duy Minh</span>
              </div>
            </div>
            <div className="employee-team__item">
              <div className="employee-team__member-img">
                <Image preview={false} src={baseUrl + 'images/tiep-member.jpg'} />
              </div>
              <div className="employee-team__info">
                <span className="employee-team__position">Designer</span>
                <span className="employee-team__name">Hà Văn Tiệp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTeam;
