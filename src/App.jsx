import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const isUser = useSelector((state) => state.auth.user);
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={isUser !== null ? <Home /> : <Navigate to={'/login'} />}
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
