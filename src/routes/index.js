import { Home, ZingChart, MyMusic, Album, Music } from '~/pages';
// import { Navigate } from 'react-router-dom';
import path from './path';

const { home, myMusic, zingChart, album, playlist, music } = path;

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
   {
      path: music,
      element: <Music />,
   },
   // {
   //    path: '*',
   //    element: <Navigate to="/" />,
   // },
];

export default routes;
