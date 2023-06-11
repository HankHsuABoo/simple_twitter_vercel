import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MainPage from './pages/MainPage/MainPage.jsx';
import UserTweetPage from './pages/UserTweetPage/UserTweetPage.jsx';
import UserFollowerPage from './pages/UserFollowerPage/UserFollowerPage';
import UserFollowingPage from 'pages/UserFollowingPage/UserFollowingPage';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.jsx';
import SettingPage from './pages/SettingPage/SettingPage.jsx';
import AdminUserPage from './pages/AdminUserPage/AdminUserPage.jsx';
import AdminTweetPage from './pages/AdminTweetPage/AdminTweetPage.jsx';
import UserReplyPage from './pages/UserReplyPage/UserReplyPage.jsx';
import UserLikePage from './pages/UserLikePage/UserLikePage.jsx';
import ButtonShowCasePage from './pages/ButtonShowCasePage/ButtonShowCasePage.jsx';
import TweetPage from 'pages/TweetPage/TweetPage';

const basename = process.env.PUBLIC_URL;
export default function App() {
    return (
        <div className="app">
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="*" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="main" element={<MainPage />} />
                    <Route path="userPage" element={<UserTweetPage />} />
                    <Route path="userReply" element={<UserReplyPage />} />
                    <Route path="userLike" element={<UserLikePage />} />
                    <Route path="admin/login" element={<AdminLoginPage />} />
                    <Route path="setting" element={<SettingPage />} />
                    <Route path="admin/users" element={<AdminUserPage />} />
                    <Route path="admin/tweets" element={<AdminTweetPage />} />
                    <Route path="show" element={<ButtonShowCasePage />} />
                    <Route path="follower" element={<UserFollowerPage />} />
                    <Route path="following" element={<UserFollowingPage />} />
                    <Route path=":tweet_id" element={<TweetPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
