import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout.component';
const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} />
  </Routes>
);

export default App;
