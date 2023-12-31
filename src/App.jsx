import './App.scss';
import { HashRouter , Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import UserTweetPage from './pages/UserTweetPage/UserTweetPage.jsx';
import UserFollowerPage from './pages/UserFollowerPage/UserFollowerPage';
import UserFollowingPage from './pages/UserFollowingPage/UserFollowingPage';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.jsx';
import SettingPage from './pages/SettingPage/SettingPage.jsx';
import AdminUserPage from './pages/AdminUserPage/AdminUserPage.jsx';
import AdminTweetPage from './pages/AdminTweetPage/AdminTweetPage.jsx';
import UserReplyPage from './pages/UserReplyPage/UserReplyPage.jsx';
import UserLikePage from './pages/UserLikePage/UserLikePage.jsx';
import TweetPage from './pages/TweetPage/TweetPage.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { DataStatusProvider } from './context/DataContext.jsx'

// const basename = process.env.PUBLIC_URL;
export default function App() {
    return (
        <div className="app">
            <HashRouter >
                <AuthContextProvider>
                    <DataStatusProvider>
                        <Routes>
                            <Route path="login" element={<LoginPage />} />
                            <Route path="signup" element={<SignUpPage />} />
                            <Route path="main" element={<MainPage />} />
                            <Route path="user/:UserId/tweet" element={<UserTweetPage />} />
                            <Route path="user/:UserId/reply" element={<UserReplyPage />} />
                            <Route path="user/:UserId/like" element={<UserLikePage />} />
                            <Route path="admin/login" element={<AdminLoginPage />} />
                            <Route path="setting" element={<SettingPage />} />
                            <Route path="admin/users" element={<AdminUserPage />} />
                            <Route path="admin/tweets" element={<AdminTweetPage />} />
                            <Route path="user/:UserId/follower" element={<UserFollowerPage />} />
                            <Route path="user/:UserId/following" element={<UserFollowingPage />} />
                            <Route path="tweets/:tweetId" element={<TweetPage />} />
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </DataStatusProvider>
                </AuthContextProvider>
            </HashRouter>
        </div>
    );
}
