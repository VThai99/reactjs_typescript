import React from 'react';
import Button from '../components/button/Button';
import Login from './LoginAndSignUp/LoginAndSignUp';
import '../scss/style.scss';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
function App() {
  const [count, setCount] = React.useState<number>(0)
  const [render, setRender] = React.useState<number>(0)
  const handleRender = React.useCallback(() => setRender(() => render + 1), [render])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
