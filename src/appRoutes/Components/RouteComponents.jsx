import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HomePage from '../../Pages/Home/index.jsx';
import Recruitment from '../../Pages/Recruitment/index.jsx';
import Rules from '../../Pages/Rules/index.jsx';

// Home ----------------------------
export const HomeRoute = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('home')}</title>
      </Helmet>
      <HomePage />
    </>
  );
};
// product ----------------------------
export const ProductRoute = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('product')}</title>
      </Helmet>
      <HomePage />
    </>
  );
};

// Home ----------------------------
export const FfieldActivityRoute = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('fieldActivity')}</title>
      </Helmet>
      <HomePage />
    </>
  );
};

// Home ----------------------------
export const FAQ = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('FAQ')}</title>
      </Helmet>
      <HomePage />
    </>
  );
};

// Home ----------------------------
export const RecruitmentRoute = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('recruitment')}</title>
      </Helmet>
      <Recruitment />
    </>
  );
};

// Home ----------------------------
export const RulesRoute = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('rules')}</title>
      </Helmet>
      <Rules />
    </>
  );
};

