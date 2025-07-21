import { Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import '../../Styles/Rules.scss';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Rules = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="wrap-content-page">
        <div className="content-nef rules-page">
          <Card className="wrap-card-content" style={{ border: 'none' }}>
            <Title level={1} className="title">
              Điều Khoản & Chính Sách
            </Title>

            <p className="welcome-text">
              Chào mừng quý khách hàng đến với website:{' '}
              <Link className="link-nef fw-700 font-18" to={'https://viewrp.com'}>
                viewrp.com
              </Link>{' '}
              (gọi tắt là website) thuộc sở hữu của Công Ty Cổ Phần DevBeta.
            </p>
            {/* Tổng quan --------------------------------------------------------------------- */}
            <div className="wrap-session-opening">
              {/* chữ nghiêng */}
              <p>
                <strong>*</strong> Căn cứ Luật Doanh nghiệp số 59/2020/QH14 ngày 17 tháng 6 năm 2020 của nước Cộng Hòa
                Xã Hội Chủ Nghĩa Việt Nam;
              </p>
              <p>
                <strong>*</strong> Căn cứ Luật Công nghệ thông tin số 67/2006/QH11 ngày 29 tháng 6 năm 2006 của nước
                Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam;
              </p>
              <p>
                <strong>*</strong> Căn cứ Luật An ninh mạng số 24/2018/QH14 ngày 12 tháng 6 năm 2018 của nước Cộng Hòa
                Xã Hội Chủ Nghĩa Việt Nam;
              </p>
              <p>
                <strong>*</strong> Căn cứ Nghị định số 72/2013/NĐ-CP ngày 15 tháng 7 năm 2013 của nước Cộng Hòa Xã Hội
                Chủ Nghĩa Việt Nam về quản lý, cung cấp, sử dụng dịch vụ Internet và thông tin trên mạng;
              </p>
              <p>
                <strong>*</strong> Căn cứ Nghị định số 13/2023/NĐ-CP ngày 17 tháng 4 năm 2023 của nước Cộng Hòa Xã Hội
                Chủ Nghĩa Việt Nam về bảo vệ dữ liệu cá nhân;
              </p>
              <p>
                <strong>*</strong> Căn cứ các quy định khác của pháp luật có liên quan đến hoạt động kinh doanh sản phẩm
                số và dịch vụ trực tuyến;
              </p>
            </div>

            {/* Điều khoản chung --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 1. Điều khoản chung:</Title>
              <p className="ps-6">
                Chúng tôi đảm bảo những quy định và chính sách trong các điều khoản được đưa ra nhằm để bảo vệ quyền lợi
                cho người sử dụng với mục đích đúng đắn, đồng thời hướng đến chất lượng dịch vụ và tính ổn định lâu dài.
                Các chính sách cũng nhằm mục đích ngăn chặn những hành vi lạm dụng, vi phạm pháp luật.
              </p>
              <p className="ps-6">
                Khi đăng ký sử dụng dịch vụ, bạn đồng ý và tuân thủ các điều khoản sử dụng dịch vụ mà chúng tôi đã nêu
                rõ.
              </p>
            </div>

            {/* Nội dung website --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 2. Đối tượng điều chỉnh:</Title>
              {/* description ------------------------ */}
              <p>
                <strong>-</strong> Người được phép bán, trao đổi sản phẩm, dịch vụ là nhân viên của Công ty Cổ phần Dev
                Beta và các đối tác được cấp phép bán sản phẩm, dịch vụ (sau đây gọi tắt là “Nhân viên bán hàng”).
              </p>
              <p>
                <strong>-</strong> Các cá nhân được phép mua dịch vụ, sản phẩm, dùng máy tính, điện thoại, máy tính
                bảng... để truy cập, mua sắm, sử dụng các dịch vụ và sản phẩm của Công ty Cổ phần Dev Beta (sau đây gọi
                chung là “khách hàng”).
              </p>
            </div>

            {/* Các hành vi không được thực hiện --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 3. Đối tượng cung cấp sản phẩm, dịch vụ:</Title>
              {/* description ------------------------ */}
              <ul>
                <li>Công ty Cổ Phần Dev Beta (MST 5200942737).</li>
                <li>Website ViewRP thuộc quyền sở hữu của Công ty Cổ Phần Dev Beta.</li>
              </ul>
            </div>

            {/* Quyền và nghĩa vụ của khách hàng --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 4. Nội dung sản phẩm, dịch vụ:</Title>
              {/* description ------------------------ */}
              <ul>
                <li>
                  Công ty Cổ Phần Dev Beta là chủ sở hữu của các sản phẩm, dịch vụ được bán trên hệ thống website
                  ViewRP.
                </li>
                <li>
                  Chỉ những nhân viên của Dev Beta đã được đào tạo, cấp phép bán, hỗ trợ, bảo hành sản phẩm, dịch vụ và
                  nhân viên bán hàng của Dev Beta mới được phép bán, hỗ trợ sản phẩm, dịch vụ. Ngoài ra, không ai được
                  bán lại trái phép các sản phẩm, dịch vụ của Dev Beta.
                </li>
              </ul>
            </div>

            {/* Quyền và trách nhiệm của DevBeta --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 5. Nguyên tắc mua, bán, đổi, trả sản phẩm, dịch vụ:</Title>
              {/* description ------------------------ */}
              <p>
                <strong>-</strong> Thực hiện nghiêm chỉnh các quy định của pháp luật nêu tại mục căn cứ.
              </p>
              <p>
                <strong>-</strong> Thực hiện các quy định về điều khoản và chính sách của Dev Beta.
              </p>
              <p>
                <strong>-</strong> Đối với công ty cung cấp sản phẩm, dịch vụ (Công ty Cổ Phần Dev Beta):
              </p>
              <p>
                <strong>+</strong> Giá bán được niêm yết công khai trên website ViewRP và các kênh chính thức của Dev
                Beta. Nhân viên bán hàng phải thông báo chính xác giá sản phẩm, dịch vụ.
              </p>
              <p>
                <strong>+</strong> Trước khi bán hàng cho khách hàng phải thông báo cho khách hàng nắm rõ về tình trạng
                sản phẩm, dịch vụ và giá bán, chính sách bảo hành trước khi thanh toán. Đồng thời thông báo về việc
                không được hoàn lại tiền đối với các sản phẩm đã kích hoạt.
              </p>
              <ul className="ps-32">
                <li>Đối với khách hàng (cá nhân và tổ chức):</li>
              </ul>
              <p className="ps-18">
                <strong>+</strong> Được cung cấp đầy đủ thông tin về sản phẩm, dịch vụ.
              </p>
              <p className="ps-18">
                <strong>+</strong> Tìm hiểu kỹ hơn về các sản phẩm, dịch vụ của ViewRP trước khi tiến hành thanh toán,
                vì sẽ không có chính sách hoàn tiền cho các sản phẩm, dịch vụ đã thanh toán.
              </p>
              <p className="ps-18">
                <strong>+</strong> Tìm hiểu về các quy định, chính sách bảo hành, điểu khoản của ViewRP liên quan đến
                khách hàng, người dùng được niêm yết công khai trên Website devbeta.vn
              </p>
              <p className="ps-18">
                <strong>+</strong> Thanh toán đầy đủ cho các sản phẩm, dịch vụ tại thời điểm mua.
              </p>
              <p className="ps-18">
                <strong>+</strong> Không được tự ý bán lại các sản phẩm, dich vụ của ViewRP cho người khác hoặc cung cấp
                các sản phẩm, dịch vụ cho nhiều người nhằm mục đích gây ảnh hưởng đến tài nguyên máy chủ, tài chính, sản
                phẩm, dịch vụ của Dev Beta.
              </p>
            </div>

            {/* Quy định về thanh toán --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 6. Quyền lợi và hành vi được phép của khách hàng:</Title>
              {/* description ------------------------ */}
              <p>
                Đối với khách hàng đã tuân thủ các chính sách, điều khoản của Dev Beta cũng như các thỏa thuận khác
                trong hợp đồng, chúng tôi sẽ đảm bảo quyền lợi tối đa cho khách hàng bao gồm:
              </p>
              <p>
                <strong>-</strong> Ưu tiên dịch vụ cho các sản phẩm mới của Dev Beta.
              </p>
              <p>
                <strong>-</strong> Được hỗ trợ nhiệt tình, tối đa theo chính sách, đặc biệt là tổ chức các nhóm giao
                lưu, tìm kiếm cơ hội hợp tác kinh doanh và phát triển kinh tế.
              </p>
              <p>
                <strong>-</strong> Hỗ trợ sử dụng các sản phẩm, dịch vụ trả phí mà không mất bất kỳ chi phí nào trong
                giờ hành chính (từ 07:30 sáng đến 11:00 sáng và từ 13:30 chiều đến 17:00 chiều. UTC+07:00).
              </p>
              <p>
                <strong>-</strong> Bảo vệ thông tin cá nhân, bí mật kinh doanh và hỗ trợ các giải pháp an ninh mạng.
              </p>
              <p>
                <strong>-</strong> Khiếu nại về bất kỳ hành vi nào ảnh hưởng đến khách hàng từ nhân viên của chúng tôi,
                cam kết giải quyết khiếu nại ngay lập tức một cách triệt để.
              </p>
            </div>

            {/* Quy định về gia hạn dịch vụ --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 7. Nghĩa vụ của khách hàng, hành vi bị nghiêm cấm:</Title>
              {/* description ------------------------ */}
              <p>
                <strong>-</strong> Tuân thủ nghiêm ngặt và không vi phạm các chính sách, điều khoản và thỏa thuận khác
                của ViewRP.
              </p>
              <p>
                <strong>-</strong> Tuân thủ nghiêm ngặt các quy định của pháp luật.
              </p>
              <p>
                <strong>-</strong> Nghiêm cấm lợi dụng các sản phẩm, dịch vụ, hình ảnh của Dev Beta để vi phạm pháp
                luật, xâm phạm quyền và lợi ích hợp pháp của cá nhân/tổ chức khác.
              </p>
              <p>
                <strong>-</strong> Không có bất kỳ hành vi xâm phạm tài sản, danh dự, quyền và lợi ích hợp pháp khác của
                Dev Beta.
              </p>
              <p>
                <strong>-</strong> Tự chịu trách nhiệm về an toàn thông tin cá nhân nếu sử dụng mật khẩu dễ nhớ, dễ lộ
                hoặc không sử dụng phần mềm diệt virus uy tín có bản quyền.
              </p>
            </div>

            {/* Quy định về gia hạn dịch vụ --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 8. Quyền và trách nhiệm của Dev Beta:</Title>
              {/* description ------------------------ */}

              <ul>
                <li>DevBeta có đầy đủ các quyền và nghĩa vụ của bên cung ứng dịch vụ theo quy định pháp luật.</li>
                <li>
                  DevBeta cam kết hỗ trợ, hướng dẫn khách hàng sử dụng sản phẩm, dịch vụ do chúng tôi cung cấp trong
                  thời gian khách hàng sử dụng dịch vụ của DevBeta.
                </li>
                <li>
                  Tiếp nhận và giải quyết khiếu nại của khách hàng liên quan đến sản phẩm, dịch vụ phát sinh trong quá
                  trình sử dụng sản phẩm, dịch vụ của DevBeta.
                </li>
                <li>
                  DevBeta có quyền đơn phương tạm ngừng, hủy bỏ, chấm dứt việc cung cấp sản phẩm, dịch vụ nếu khách hàng
                  không tuân thủ điều khoản, chính sách của chúng tôi.
                </li>
                <li>
                  Chúng tôi có thể thu thập thông tin người dùng bao gồm: họ tên, địa chỉ email, số điện thoại, địa chỉ
                  thanh toán, để định danh và xác nhận giao dịch với người dùng.
                </li>
              </ul>
            </div>

            {/* Quy định về bổ sung, điều chỉnh thông tin khách hàng --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 9. Thanh toán và gia hạn sản phẩm:</Title>
              {/* description ------------------------ */}

              <ul>
                <li>
                  Khi đăng ký sử dụng dịch vụ, gia hạn dịch vụ bạn vui lòng làm theo hướng dẫn thanh toán của chúng tôi.
                  DevBeta sẽ không chịu trách nhiệm cũng như không có trách nhiệm bồi thường đối với bất kỳ hậu quả hay
                  thiệt hại nào phát sinh từ việc bạn đã không tuân thủ đầy đủ quy định về thanh toán này.
                </li>
                <li>
                  Mọi giao dịch trên trang đều là tự động, khoản tiền sẽ được cộng tự động trong vòng 5-10p. Nếu trong
                  quá trình giao dịch bị lỗi, vui lòng liên hệ đến ViewRP.
                </li>
                <li>
                  Rút tiền sẽ chỉ thanh toán hoa hồng cho khách hàng. Khoản tiền sẽ được trừ đi 1.5% số tiền được rút.
                </li>
                <li>
                  Trong quá trình thanh toán đề nghị bạn tuân thủ các quy định, hướng dẫn để đảm bảo giao dịch được an
                  toàn và đảm bảo quyền lợi của bạn. DevBeta không chịu trách nhiệm với các đơn hàng, hợp đồng thanh
                  toán khi nhập sai thông tin thanh toán, thông tin tài khoản thụ hưởng của DevBeta hoặc nội dung chuyển
                  khoản.
                </li>
                <li>
                  Dịch vụ do DevBeta cung cấp sẽ tự động chấm dứt/tạm ngừng theo thỏa thuận của hai bên hoặc đến thời
                  điểm hết thời gian sử dụng dịch vụ.
                </li>
                <li>
                  Bạn có trách nhiệm chủ động theo dõi thông tin về tình trạng hoạt động, thời hạn hiệu lực của sản phẩm
                  và các dịch vụ đã đăng ký sử dụng tại DevBeta.
                </li>
                <li>
                  DevBeta sẽ không chịu trách nhiệm hay bồi thường đối với bất kỳ hậu quả hay thiệt hại nào phát sinh do
                  việc bạn không gia hạn dịch vụ.
                </li>
                <li>
                  Đối với những dịch vụ dùng thử hoặc miễn phí: Ngay khi kết thúc dịch vụ, tất cả những sản phẩm này
                  cùng những dịch vụ, dữ liệu kèm theo (nếu có) sẽ bị hủy hoặc thu hồi.
                </li>
                <li>
                  Trong trường hợp tạm dừng dịch vụ, bạn sẽ phải có trách nhiệm thanh toán toàn bộ phí trong thời gian
                  tạm dừng và không được hoàn trả chi phí đã thanh toán cho bất cứ chu kỳ tạm dừng/chấm dứt nào.
                </li>
              </ul>
            </div>

            {/* Hỗ trợ khách hàng --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 10. Cam kết đảm bảo an toàn thanh toán và bảo mật thông tin khách hàng:</Title>
              {/* description ------------------------ */}
              <ul>
                <li>
                  Dev Beta chịu trách nhiệm đảm bảo an toàn thanh toán và bảo mật tuyệt đối thông tin khách hàng và phải
                  thực hiện nghiêm ngặt chính sách này.
                </li>
              </ul>
              <p>
                <strong>-</strong> Việc thu thập và sử dụng thông tin người dùng phải được thông báo trước với người
                dùng và được sự đồng ý của người dùng, trừ trường hợp pháp luật có quy định khác.
              </p>
              <p>
                <strong>-</strong> Không sử dụng, chuyển giao, cung cấp hoặc tiết lộ cho bên thứ ba thông tin khách hàng
                trừ trường hợp được người dùng đồng ý hoặc pháp luật có quy định khác.
              </p>
              <p>
                <strong>-</strong> Bảo mật, mã hóa thông tin của người dùng như mật khẩu, phương thức thanh toán...
                Không lưu trữ dữ liệu gốc ở bất kỳ đâu.
              </p>
              <p>
                <strong>-</strong> Dev Beta yêu cầu khách hàng khi sử dụng sản phẩm, dịch vụ phải cung cấp đầy đủ thông
                tin và tự chịu trách nhiệm về tính hợp pháp của những thông tin này cũng như mục đích và quá trình sử
                dụng sản phẩm, dịch vụ Dev Beta. Chúng tôi có quyền từ chối trách nhiệm tiếp nhận, xử lý khiếu nại, tố
                cáo liên quan đến quyền lợi của người dùng trong trường hợp khách hàng cố tình cung cấp thông tin sai sự
                thật, gian lận, có hại cho Dev Beta, vi phạm pháp luật.
              </p>
            </div>

            {/* Giới hạn trách nhiệm và từ chối bảo đảm --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 11. Giới hạn trách nhiệm và từ chối bảo đảm:</Title>
              {/* description ------------------------ */}
              <ul>
                <li>
                  DevBeta không đảm bảo việc loại trừ các yếu tố gây hại đến việc sử dụng dịch vụ của bạn, bao gồm những
                  yếu tố sau: hành vi cố ý vi phạm và gây thiệt hại từ bên thứ ba, hoặc virus.
                </li>
                <li>
                  DevBeta không đảm bảo sẽ thực hiện việc phục hồi dữ liệu khi bị lây nhiễm từ virus hoặc xóa virus và
                  các yếu tố gây hại khác khi có vấn đề xảy ra. DevBeta sẽ không chịu trách nhiệm do việc mất dữ liệu
                  hoặc bất kỳ thiệt hại nào có liên quan đến dữ liệu của khách hàng mà lỗi không do từ DevBeta.
                </li>
                <li>
                  DevBeta không chịu trách nhiệm bất kỳ thất thoát nào về mặt dữ liệu trong quá trình hỗ trợ cho khách
                  hàng chuyển dữ liệu từ máy chủ khác hoặc từ nơi khác về máy chủ của DevBeta.
                </li>
                <li>
                  Chúng tôi có toàn quyền tố cáo, khiếu nại với các Cơ quan có thẩm quyền về các hành vi cố ý vi phạm;
                </li>
                <li>
                  Đồng thời có quyền miễn trừ trách nhiệm, đơn phương chấm dứt sử dụng sản phẩm, dịch vụ và từ chối bảo
                  hành, hỗ trợ đối với những vi phạm nghiêm trọng.
                </li>
              </ul>
            </div>

            {/* Sự kiện Bất khả kháng --------------------------------------------------------------------- */}
            <div className="wrap-session">
              <Title level={5}>Điều 12. Chăm sóc, hỗ trợ khách hàng:</Title>
              {/* description ------------------------ */}
              <p>
                <strong>-</strong> DevBeta không chịu trách nhiệm trả lời các thắc mắc hoặc khiếu nại từ bên thứ ba liên
                quan đến việc sử dụng dịch vụ của bạn. DevBeta cũng không chịu trách nhiệm trả lời các thắc mắc hoặc
                khiếu nại cho các vấn đề liên quan đến dịch vụ của bên thứ ba mà bạn đang sử dụng.
              </p>
              <p>
                <strong>-</strong> Trước khi gửi yêu cầu hỗ trợ kỹ thuật, bạn phải có trách nhiệm sao lưu dữ liệu của
                mình, cố gắng tự sửa lỗi, kiểm tra các vấn đề kỹ thuật, chức năng, kiểm tra các kết nối mạng.
              </p>
              <p>
                <strong>-</strong> Thời gian hỗ trợ sản phẩm, dịch vụ trong giờ làm việc của Dev Beta từ 07:30 sáng đến
                11:00 sáng và từ 13:30 chiều đến 17:00 chiều (UTC: +07:00) vào các ngày trong tuần, trừ ngày lễ, Tết...
                Theo quy định của Nhà nước, chúng tôi sẽ thông báo trước cho khách hàng và công khai trên các kênh thông
                tin chính thức.
              </p>
              <p>
                <strong>-</strong> DevBeta tiếp nhận tất cả các yêu cầu hỗ trợ kỹ thuật, khiếu nại, hỗ trợ khác thông
                qua các kênh chăm sóc khách hàng trên Facebook, Telegram, SĐT, Email. Đội ngũ nhân viên bán hàng, nhân
                viên kỹ thuật có trách nhiệm hỗ trợ khách hàng sử dụng sản phẩm, dịch vụ.
              </p>
            </div>

            {/* ==================== end ==================== */}
            <div className="wrap-session-end">
              <span className="red-color">*</span> Trên là Điều khoản và Chính sách sử dụng sản phẩm, dịch vụ của ViewRP
              được niêm yết công khai trên website của chúng tôi. Vì vậy, chúng tôi xin thông báo đến toàn thể khách
              hàng.
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Rules;
