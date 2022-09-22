import { Route, Routes } from 'react-router-dom';

import ConsumindoAPI from '../pages/ConsumindoAPI';
import Login from '../pages/Login';
import Peoples from '../pages/Peoples';
import PeoplesDetail from '../pages/PeoplesDetail';
import ChangePassword from '../pages/ChangePassword';
import Home from '../pages/Home';

import { useContext } from 'react';
import AuthContext from '../context/auth-context';

const AppRoutes = (): JSX.Element => {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/peoples' element={<Peoples />} />
      <Route path='/peoples/:id' element={<PeoplesDetail />} />
      <Route path='/consumindoAPI' element={<ConsumindoAPI />} />
      {authCtx.isLoggedIn && (
        <Route path='/changePassword' element={<ChangePassword />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
