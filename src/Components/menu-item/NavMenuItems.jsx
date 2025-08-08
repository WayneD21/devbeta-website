import routes from '../../configs/routesPath';
import { Icon } from '@iconify/react';

export const getNavMenuItems = (t) => [
  {
    key: routes.home,
    label: (
      <span className="wrap-title-content">
        <span className="icon-header">
          <Icon icon="mingcute:home-3-fill" width="24" height="24" />
        </span>
        <span className="text-header">{t('home')}</span>
      </span>
    ),
    className: 'fw-500',
  },
  {
    key: routes.product,
    label: (
      <span className="wrap-title-content">
        <span className="icon-header">
          <Icon icon="gridicons:product" width="24" height="24" />
        </span>
        <span className="text-header">{t('product')}</span>
      </span>
    ),
    className: 'fw-500',
  },
  {
    key: routes.fieldActivity,
    label: (
      <span className="wrap-title-content">
        <span className="icon-header">
          <Icon icon="fluent:chart-person-20-filled" width="20" height="20" />
        </span>
        <span className="text-header">{t('fieldActivity')}</span>
      </span>
    ),
    className: 'fw-500',
  },
  {
    key: routes.faq,
    label: (
      <span className="wrap-title-content">
        <span className="icon-header">
          <Icon icon="mage:box-3d-question-mark-fill" width="24" height="24" />
        </span>
        <span className="text-header">{t('fqa')}</span>
      </span>
    ),
    className: 'fw-500',
  },
  {
    key: routes.recruitment,
    label: (
      <span className="wrap-title-content">
        <span className="icon-header">
          <Icon icon="fluent-mdl2:recruitment-management" width="2048" height="2048" />
        </span>
        <span className="text-header">{t('recruitment')}</span>
      </span>
    ),
    className: 'fw-500',
  },
  {
    key: routes.rules,
    label: (
      <span className="wrap-title-content">
        <span className="icon-header">
          <Icon icon="game-icons:white-book" width="512" height="512" />
        </span>
        <span className="text-header">{t('rules')}</span>
      </span>
    ),
    className: 'fw-500',
  },
];
