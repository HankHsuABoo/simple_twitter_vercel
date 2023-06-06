import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.jsx'
import SettingPage from './pages/SettingPage/SettingPage.jsx'
import ButtonShowCasePage from './pages/ButtonShowCasePage/ButtonShowCasePage.jsx'


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="show" element={<ButtonShowCasePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}