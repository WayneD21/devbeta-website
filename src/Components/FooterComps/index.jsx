import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, message, Row, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { formatNumber } from '../../utils/formats';
import useInfoWebStore from '../../store/infoWeb';
import { useTranslation } from 'react-i18next';
import '../../Styles/Footer.scss';

const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

function FooterD() {
  const { t } = useTranslation(); // Language
  const [messageApi, contextHolder] = message.useMessage();

  const { infoWeb, loading, error, clearError } = useInfoWebStore();

  useEffect(() => {
    if (error) {
      messageApi.error(error);
      clearError();
    }
  }, [error]);

  return (
    <>
      {contextHolder}
      <div className="footer">
        <div className="footer__wrap">
          {loading ? (
            <Card loading={true} style={{ backgroundColor: 'rgb(45 45 45)', border: 'none' }} />
          ) : (
            <>
              <Row gutter={[10, 0]} className="footer__list">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={10}>
                  <Link to={'/'} className="footer__wrap-logo">
                    <Image
                      className="footer__logo"
                      fallback="Erro"
                      preview={false}
                      src={BASE_URL_FE + 'images/logo-devbeta.svg'}
                    />
                  </Link>
                  <div className="footer__info-company">
                    <div className="footer__desc">
                      <span className="footer__name-company fw-600 cursor-default">{t('devbetaCompany')}</span>
                    </div>
                    <div className="footer__desc">
                      <span className="fw-500 cursor-default">{t('businessCode')}:</span>
                      <span className="ms-4 text-initial">{infoWeb?.business_code}</span>
                    </div>
                  </div>
                </Col>
                <Col xs={3} sm={4} md={16} lg={4} xl={3} xxl={4} className="pt-16">
                  <div>
                    <div className="footer__title">{t('navigation')}</div>
                    <div className="desc text-capitalize">
                      <Link className="footer__link" to={'/'}>
                        {t('home')}
                      </Link>
                    </div>
                    <div className="footer__desc text-capitalize">
                      <Link className="footer__link" to={'/product'}>
                        {t('product')}
                      </Link>
                    </div>
                    <div className="footer__desc text-capitalize">
                      <Link className="footer__link" to={'/document'}>
                        {t('document')}
                      </Link>
                    </div>
                    <div className="footer__desc text-capitalize">
                      <Link className="footer__link" to={'/rules'}>
                        {t('rules')}
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col xs={4} sm={6} md={8} lg={4} xl={4} xxl={4} className="pt-16">
                  <div>
                    <div className="footer__title">{t('help')}</div>
                    <div className="footer__desc">
                      <Link className="footer__link" to={'/'}>
                        {t('contactSupportComplaints')}
                      </Link>
                    </div>
                    <div className="footer__desc">
                      <Link className="footer__link" to={'/'}>
                        {t('supportUsingTheService')}
                      </Link>
                    </div>
                    <div className="footer__desc">
                      <Link className="footer__link" to={'/'}>
                        {t('offerPromotion')}
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={16} md={16} lg={12} xl={6} xxl={6} className="pt-16">
                  <div className="footer__contact">
                    <div className="footer__title">{t('contact')}</div>
                    <div className="footer__desc ps-6">
                      <FontAwesomeIcon className="footer__contact-icon" icon={faLocationDot} />
                      <span>{infoWeb?.address}</span>
                    </div>
                    <div className="footer__desc ps-6">
                      <FontAwesomeIcon className="footer__contact-icon" icon={faPhone} />
                      <span className="">+{formatNumber(infoWeb?.hotline)}</span>
                    </div>
                    <div className="footer__desc ps-6">
                      <FontAwesomeIcon className="footer__contact-icon" icon={faEnvelope} />
                      <a className="footer__link ms-2" href="mailto:h.devbeta@gmai.com">
                        {infoWeb?.email}
                      </a>
                    </div>
                    <div className="footer__contact-wrap-icon ps-6">
                      <div>
                        <a href={infoWeb?.facebook} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="footer__contact-icon-social" icon={faFacebook} />
                        </a>
                      </div>
                      <div>
                        <a href={infoWeb?.telegram} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="footer__contact-icon-social" icon={faTelegram} />
                        </a>
                      </div>
                      <div>
                        <a href={infoWeb?.youtube} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="footer__contact-icon-social" icon={faYoutube} />
                        </a>
                      </div>
                      <div>
                        <a href={infoWeb?.tiktok} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="footer__contact-icon-social" icon={faTiktok} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="list-items footer__bottom">
                <Col xs={24} sm={24} lg={24} xl={24} xxl={24}>
                  <div className="footer-copyright cursor-default">
                    <FontAwesomeIcon className="footer__bottom-icon" icon={faCopyright} />
                    <span className="footer__bottom-desc">
                      <span>{t('copyrightBelongsTo')}:</span>
                      <span className="ms-4">{t('devbetaCompanyLowercase')}</span>
                    </span>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default FooterD;
