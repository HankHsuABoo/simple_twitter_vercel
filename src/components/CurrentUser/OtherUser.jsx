import Header from 'components/Header/Header';
import styles from './CurrentUser.module.scss';
import bgImg from 'assets/images/default_background.png';

import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import TweetListItem from 'components/UIComponents/NavItem/ListItem/TweetListItem';
import UserToggleMenu from 'components/UIComponents/ToggleMenu/UserToggleMenu';
import msg from 'assets/icons/user/user_msg.png';
import notify from 'assets/icons/user/user_notfi.png';
import logo from 'assets/icons/symbol/danger.png';

export default function CurrentUser() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header title="Jane Cathy" arrow tweetCount="45" />
            </div>
            <div className={styles.userCard}>
                <div className={styles.cover}>
                    <img src={bgImg} alt="cover" className={styles.bgImg} />
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userInfoAvatar}>
                        <img src={logo} alt="avatar" className={styles.img} />
                    </div>
                    <div className={styles.userInfoCard}>
                        <div className={styles.userInfoName}>Jane Cathy</div>
                        <div className={styles.userInfoAccount}>{`@janecathy`}</div>
                    </div>
                </div>

                <div className={styles.btnContainer}>
                    <div className={styles.emailIcon}>
                        <img src={msg} alt="msg" className={styles.msgImg} />
                    </div>
                    <div className={styles.notifyIcon}>
                        <img src={notify} alt="" className={styles.notifyImg} />
                    </div>
                    <Button title="正在跟隨" size="middle" isAction />
                </div>
                <div className={styles.userDescription}>
                    <div className={styles.descriptionContext}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </div>
                    <div className={styles.follows}>
                        <Link className={styles.routeLink} to={`/:UserId/following`}>
                            <div className={styles.followsFollower}>
                                <span className={styles.followsCount}>231個</span>
                                <span className={styles.followsType}>跟隨中</span>
                            </div>
                        </Link>
                        <Link className={styles.routeLink} to={`/:UserId/following`}>
                            <div className={styles.followingFollower}>
                                <span className={styles.followingCount}>45位</span>
                                <span className={styles.followingType}>跟隨者</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.userToggleMenu}>
                <UserToggleMenu linkName="推文" isActive />
                <UserToggleMenu linkName="回覆" />
                <UserToggleMenu linkName="喜歡的內容" />
            </div>
            <div className={styles.tweetListItem}>
                <TweetListItem />
            </div>
        </div>
    );
}
