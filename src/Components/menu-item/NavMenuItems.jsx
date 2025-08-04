import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBookBookmark, faBookOpenReader, faCoins, faHome } from '@fortawesome/free-solid-svg-icons';
import routes from '../../configs/routesPath';

export const getNavMenuItems = (t) => [
  {
    key: routes.home,
    label: (
      <>
        <span className="icon-header">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className="text-header">{t('home')}</span>
      </>
    ),
    className: 'fw-500',
  },
  {
    key: routes.product,
    label: (
      <>
        <span className="icon-header">
          {/* <FontAwesomeIcon icon={faBagShopping} /> */}
        </span>
        <span className="text-header">{t('product')}</span>
      </>
    ),
    className: 'fw-500',
  },
  {
    key: routes.fieldActivity,
    label: (
      <>
        <span className="icon-header">
          {/* <FontAwesomeIcon icon={faCoins} /> */}
        </span>
        <span className="text-header">{t('fieldActivity')}</span>
      </>
    ),
    className: 'fw-500',
  },
  {
    key: routes.faq,
    label: (
      <>
        <span className="icon-header">
          {/* <FontAwesomeIcon icon={faBookBookmark} /> */}
        </span>
        <span className="text-header">{t('fqa')}</span>
      </>
    ),
    className: 'fw-500',
  },
    {
    key: routes.recruitment,
    label: (
      <>
        <span className="icon-header">
          {/* <FontAwesomeIcon icon={faBookBookmark} /> */}
        </span>
        <span className="text-header">{t('recruitment')}</span>
      </>
    ),
    className: 'fw-500',
  },
  {
    key: routes.rules,
    label: (
      <>
        <span className="icon-header">
          {/* <FontAwesomeIcon icon={faBookOpenReader} /> */}
        </span>
        <span className="text-header">{t('rules')}</span>
      </>
    ),
    className: 'fw-500',
  },
];
