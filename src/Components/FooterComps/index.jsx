import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, message, Row, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
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
      <div className="wrap-footer">
        <div className="footer-container">
          {loading ? (
            <Card loading={true} style={{ backgroundColor: '#4b79a1', border: 'none' }} />
          ) : (
            <>
              <Row gutter={[10, 0]} justify={'space-between'} className="list-items">
                <Col xs={24} sm={16} md={10} lg={11} xl={6} xxl={6}>
                  <Link to={'/'} className="wrap-logo-footer">
                    <Image
                      className="logo-img-footer"
                      fallback="Erro"
                      preview={false}
                      src={BASE_URL_FE + 'images/logo-devbeta.svg'}
                    />
                    <div className="app-name-footer">ViewRP</div>
                  </Link>
                  <div>
                    <div className="desc">
                      <span className="fw-600 cursor-default">{t('devbetaCompany')}</span>
                    </div>
                    <div className="desc">
                      <span className="fw-500 cursor-default">{t('businessCode')}:</span>
                      <span className="ms-4 text-initial">{infoWeb?.business_code}</span>
                    </div>
                  </div>
                </Col>
                <Col xs={8} sm={8} md={8} lg={11} xl={4} xxl={4} className="pt-16">
                  <div>
                    <div className="title">{t('navigation')}</div>
                    <div className="desc text-capitalize">
                      <Link to={'/'}>{t('home')}</Link>
                    </div>
                    <div className="desc text-capitalize">
                      <Link to={'/product'}>{t('product')}</Link>
                    </div>
                    <div className="desc text-capitalize">
                      <Link to={'/document'}>{t('document')}</Link>
                    </div>
                    <div className="desc text-capitalize">
                      <Link to={'/rules'}>{t('rules')}</Link>
                    </div>
                  </div>
                </Col>
                <Col xs={15} sm={15} md={8} lg={11} xl={6} xxl={6} className="pt-16">
                  <div>
                    <div className="title">{t('help')}</div>
                    <div className="desc">
                      <Link to={'/'}>{t('contactSupportComplaints')}</Link>
                    </div>
                    <div className="desc">
                      <Link to={'/'}>{t('supportUsingTheService')}</Link>
                    </div>
                    <div className="desc">
                      <Link to={'/'}>{t('offerPromotion')}</Link>
                    </div>
                  </div>
                </Col>
                <Col xs={15} sm={15} md={8} lg={11} xl={6} xxl={6} className="pt-16">
                  <div className="wrap-info-company">
                    <div className="title">{t('contact')}</div>
                    <div className="desc ps-6">
                      <span className="fw-500 cursor-default">Hotline:</span>
                      <span className="ms-4">+{formatNumber(infoWeb?.hotline)}</span>
                    </div>
                    <div className="desc ps-6">
                      <span className="fw-500 cursor-default">Email:</span>
                      <a className="font-16 ms-2" href="mailto:h.devbeta@gmai.com">
                        {infoWeb?.email}
                      </a>
                    </div>
                    <div className="icon-social-media ps-6">
                      <div className="wrap-icon">
                        <a href={infoWeb?.facebook} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="icon" icon={faFacebook} />
                        </a>
                      </div>
                      <div className="wrap-icon">
                        <a href={infoWeb?.telegram} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="icon" icon={faTelegram} />
                        </a>
                      </div>
                      <div className="wrap-icon">
                        <a href={infoWeb?.youtube} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="icon" icon={faYoutube} />
                        </a>
                      </div>
                      <div className="wrap-icon">
                        <a href={infoWeb?.tiktok} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="icon" icon={faTiktok} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="list-items">
                <Col xs={24} sm={24} lg={24} xl={24} xxl={24}>
                  <div className="footer-copyright cursor-default">
                    <FontAwesomeIcon className="icon" icon={faCopyright} />
                    <span className="desc">
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
