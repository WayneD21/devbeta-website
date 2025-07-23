const BASE_URL_FE = import.meta.env.VITE_FE_BASE;

const routes = {
  base_url: '',
  home: '',
  product: 'product',
  recruitment: 'recruitment',
  fieldActivity: 'field-activity',
  faq: 'faq',
  rules: 'rules',
  login: 'login',
  register: 'register',
  logout: 'logout',
};

for (let [key, value] of Object.entries(routes)) {
  routes[key] = BASE_URL_FE + value;
}

export default routes;
