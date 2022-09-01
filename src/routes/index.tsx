import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/" element={<NavBar />} />
      <Route
        path="/login" element={<Login />} />
      <Route
        path="/home" element={<Home />}
      />
    </Routes>
  );
};

export default AppRoutes;