import { Route, Routes } from 'react-router-dom';
import ConsumindoAPI from '../pages/ConsumindoAPI';
import Login from '../pages/Login';
import Peoples from '../pages/Peoples';
import PeoplesDetail from '../pages/PeoplesDetail';
import Register from '../pages/Register';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/peoples' element={<Peoples />} />
      <Route path='/peoples/:id' element={<PeoplesDetail />} />
      <Route path='/consumindoAPI' element={<ConsumindoAPI />} />
    </Routes>
  );
};

export default AppRoutes;
