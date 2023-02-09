import { Home, ZingChart, MyMusic, Album } from '~/pages';
import { Navigate } from 'react-router-dom';
import path from './path';

const { home, myMusic, zingChart, album, playlist } = path;

const routes = [
   {
      path: home,
      element: <Home />,
   },
   {
      path: album,
      element: <Album />,
   },
   {
      path: playlist,
      element: <Album />,
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
