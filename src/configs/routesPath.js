const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const routes = {
  base_url: '',
  home: '',
  product: 'product',
  deposit: 'deposit',
  document: 'document',
  functionIntroduction: 'function-introduction',
  instructionsDownloadAPK: 'instructions-download-APK',
  npm: 'NPM',
  github: 'github',
  rules: 'rules',
  account: 'account',
  device: 'device',
  history: 'history',
  activitylog: 'activity-log',
  balancefluctuation: 'balance-fluctuation',
  privateserver: 'private-server',
  introduce: 'introduce',
  changepassword: 'change-password',
  login: 'login',
  register: 'register',
  logout: 'logout',
};

for (let [key, value] of Object.entries(routes)) {
  routes[key] = BASE_URL_FE + value;
}

export default routes;
