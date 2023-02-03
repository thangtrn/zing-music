import { Home, ZingChart, MyMusic, Playlist } from '~/pages';
import { Navigate } from 'react-router-dom';
import path from './path';

const { home, myMusic, zingChart, playlist } = path;

const routes = [
   {
      path: home,
      element: <Home />,
   },
   {
      path: playlist,
      element: <Playlist />,
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
