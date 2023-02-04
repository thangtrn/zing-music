import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import routes from './routes';

import { useDispatch } from 'react-redux';
import { fetchRecommendKeywords } from '~/redux/slices/searchSlice';

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchRecommendKeywords());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
