import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import routes from './routes';
const App = () => {
   return (
      <DefaultLayout>
         <Routes>
            {routes.map(({ path, element }) => (
               <Route key={path} path={path} element={element} />
            ))}
         </Routes>
      </DefaultLayout>
   );
};

export default App;
