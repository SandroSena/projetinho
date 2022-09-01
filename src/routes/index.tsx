import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Peoples from '../pages/Peoples';
import PeoplesDetail from '../pages/PeoplesDetail';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/peoples' element={<Peoples />} />
      <Route path='/peoples/:id' element={<PeoplesDetail />} />
    </Routes>
  );
};

export default AppRoutes;
