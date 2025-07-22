import { useState, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProConfigProvider, ProFormText, ProFormCheckbox } from '@ant-design/pro-components';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Tabs, theme, message, Modal, Input, Spin } from 'antd';
import GoogleButton from 'react-google-signin-button';
import 'react-google-signin-button/dist/button.css';
import { getSid, saveSid } from '../../utils/auth';
import { useTranslation } from 'react-i18next';
import routes from '../../configs/routesPath';
import Link from 'antd/es/typography/Link';
import { apiPost } from '../../utils/api';
import '../../Styles/Login.scss';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const LoginPage = () => {
  const { t } = useTranslation(); // Language

  const items = [
    { key: 'signIn', label: t('signIn') },
    { key: 'signUp', label: t('signUp') },
  ];
  const LoginType = { SIGNIN: items[0].key, SIGNUP: items[1].key };

  const [readOnly, setReadOnly] = useState(true);
  const [loginType, setLoginType] = useState(LoginType.SIGNIN);
  const [factorOpen, setFactorOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadUrl, setLoadUrl] = useState(false);
  const [inputs, setInputs] = useState({});
  const [otpI, setOtpI] = useState('');
  const [autocomplete, setAutocomplete] = useState(window.localStorage.autoLogin == 'true' ? true : false);

  const [messageApi, contextHolder] = message.useMessage();

  const { token } = theme.useToken();

  useEffect(() => {
    if (getSid()) {
      var urlTo = '';
      if (document.referrer.length < 1 || window.location.href) {
        urlTo = routes.base_url;
      }
      window.location.replace(urlTo);
      return;
    }
  }, [loadUrl]);

  const handleSubmit = async (values) => {
    setInputs(values);
    setLoading(true);
    try {
      const login = await apiPost('/auth/signin', values);
      if (login.data?.status_google_2FA) {
        setFactorOpen(true);
      } else {
        saveSid(login?.data?.session_id);
        setLoadUrl(!loadUrl);
      }
    } catch (error) {
      messageApi.error(error);
    }
    setLoading(false);
  };

  const ButtonGoogleLogin = () => {
    const useLogin = useGoogleLogin({
      flow: 'auth-code',
      onSuccess: async (codeResponse) => {
        setLoading(true);
        try {
          const search = new URLSearchParams(location.search);
          const ref = search.get('ref');
          const get_ref = ref ? `?ref=${ref}` : '';
          const login = await apiPost(`/auth/google${get_ref}`, {
            code: codeResponse.code,
            redirect_uri: window.location.origin,
          });
          if (login.data?.status_google_2FA) {
            setInputs({ email: login.data.email });
            setFactorOpen(true);
          } else {
            saveSid(login?.data?.session_id);
            setLoadUrl(!loadUrl);
          }
        } catch (error) {
          messageApi.error(error);
        }
        setLoading(false);
      },
      onError: (errorResponse) => messageApi.error(errorResponse),
    });
    return (
      <GoogleButton
        style={{ borderRadius: 10, marginTop: 12 }}
        label={loginType === LoginType.SIGNIN ? t('signInWith') : t('signUpWith')}
        onClick={useLogin}
      />
    );
  };

  return (
    <>
      {contextHolder}
      <ProConfigProvider hashed={false}>
        <div className="login-content">
          <div className="login-form-nef">
            <Spin spinning={loading}>
              <LoginForm
                logo={BASE_URL_FE + 'images/logo-devbeta.svg'}
                onFinish={handleSubmit}
                submitter={
                  loginType === LoginType.SIGNIN
                    ? {
                        searchConfig: {
                          submitText: t('signIn'),
                        },
                      }
                    : {
                        submitButtonProps: {
                          style: { display: 'none' },
                        },
                      }
                }
                actions={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                      <ButtonGoogleLogin />
                    </GoogleOAuthProvider>
                  </div>
                }
              >
                <Tabs
                  className="tabs-login"
                  centered
                  activeKey={loginType}
                  onChange={(activeKey) => setLoginType(activeKey)}
                  items={items}
                />

                {loginType === LoginType.SIGNIN && (
                  <>
                    <ProFormText
                      autocomplete={autocomplete ? 'email' : 'off'}
                      name="email"
                      fieldProps={{
                        size: 'large',
                        autoComplete: 'off',
                        readOnly,
                        onClick: () => setReadOnly(false),
                        prefix: (
                          <UserOutlined
                            style={{
                              color: token.colorText,
                            }}
                            className={'prefixIcon'}
                          />
                        ),
                      }}
                      placeholder={t('email_or_username')}
                      rules={[
                        {
                          required: true,
                          message: t('canNotLeftBlank'),
                        },
                      ]}
                    />
                    <ProFormText.Password
                      autocomplete={autocomplete ? 'password' : 'off'}
                      name="password"
                      fieldProps={{
                        size: 'large',
                        autoComplete: 'off',
                        readOnly,
                        onClick: () => setReadOnly(false),
                        prefix: (
                          <LockOutlined
                            style={{
                              color: token.colorText,
                            }}
                            className={'prefixIcon'}
                          />
                        ),
                      }}
                      placeholder={t('placeholderPassword')}
                      rules={[
                        {
                          required: true,
                          message: t('canNotLeftBlank'),
                        },
                      ]}
                    />
                    <div
                      style={{
                        marginBlockStart: 0,
                        marginBlockEnd: 24,
                      }}
                    >
                      <ProFormCheckbox
                        noStyle
                        initialValue={autocomplete}
                        name="autoLogin"
                        onChange={(e) => {
                          setAutocomplete(e.target.checked);
                          window.localStorage.setItem('autoLogin', e.target.checked);
                        }}
                      >
                        {t('rememberPassword')}
                      </ProFormCheckbox>
                      <Link
                        to={''}
                        className="forgot-password"
                        style={{ float: 'right' }}
                        onClick={() => {
                          messageApi.info(t('contactAdminForSupport'));
                        }}
                      >
                        {t('forgotPassword')}
                      </Link>
                    </div>
                  </>
                )}
              </LoginForm>
            </Spin>
          </div>
          <Modal
            title="2-factor authentication"
            centered
            open={factorOpen}
            onOk={async () => {
              if (otpI.length != 6) {
                messageApi.error(t('enter6Characters'));
              } else {
                setLoading(true);
                try {
                  const respOtp = await apiPost('/auth/signinp-verify-otp', {
                    email: inputs.email,
                    otp: otpI,
                  });
                  saveSid(respOtp?.data?.session_id);
                  setLoadUrl(!loadUrl);
                } catch (error) {
                  messageApi.error(error);
                }
                setFactorOpen(false);
                setLoading(false);
              }
            }}
            onCancel={() => setFactorOpen(false)}
            width={250}
            okText="Yes"
            cancelText="Cancel"
          >
            <Input
              name={'input_authentication'}
              placeholder={t('pleaseEnterCode')}
              value={otpI}
              maxLength={6}
              allowClear={true}
              onChange={(e) => setOtpI(e.target.value)}
            />
          </Modal>
        </div>
      </ProConfigProvider>
    </>
  );
};

export default LoginPage;
