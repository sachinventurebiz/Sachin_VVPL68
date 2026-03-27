import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { TreeDetails } from '../pages/TreeDetails';
import { Profile } from '../pages/Profile';
import { MyTrees } from '../pages/MyTrees';

export const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tree/:id" element={<TreeDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-trees" element={<MyTrees />} />
      </Routes>
    </BrowserRouter>
  );
};
