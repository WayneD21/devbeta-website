import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout.jsx';
import LoginPage from '../Pages/Login/index.jsx';
import ErrorPage from '../Pages/Error/500.jsx';
import routes from '../configs/routesPath.js';
import {
  HomeRoute,
  ProductRoute,
  FieldActivityRoute,
  FAQRouter,
  RulesRoute,
} from './Components/RouteComponents.jsx';

export const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<LoginPage />} />
      <Route path={routes.base_url} element={<MainLayout />}>
        <Route path={routes.home} element={<HomeRoute />} />
        <Route path={routes.product} element={<ProductRoute />} />
        <Route path={routes.fieldActivity} element={<FieldActivityRoute />} />
        <Route path={routes.faq} element={<FAQRouter />} />
        <Route path={routes.rules} element={<RulesRoute />} />
      </Route>
    </Route>,
  ),
);
