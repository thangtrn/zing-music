import { Home, ZingChart, MyMusic } from '../pages';
import { Navigate } from 'react-router-dom';
import path from './path';

const { home, myMusic, zingChart } = path;

const routes = [
   {
      path: home,
      element: <Home />,
   },
   {
      path: zingChart,
      element: <ZingChart />,
   },
   {
      path: myMusic,
      element: <MyMusic />,
   },
   // {
   //    path: '*',
   //    element: <Navigate to="/" />,
   // },
];

export default routes;
