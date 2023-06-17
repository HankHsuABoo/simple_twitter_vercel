import { useState } from 'react';
import styles from './AdminTweetItem.module.scss';
import admin_delete from '../../assets/icons/admin/admin_delete.png'
import { getRelativeTime } from '../../utility/helper.js';
import AdminDeleteModal from '../../components/Modal/AdminDeleteModal/AdminDeleteModal.jsx';

export default function AdminTweetItem (props) {
    const tweetId=props.tweetId
    const avatar=props.avatar
    const userName=props.userName
    const account=props.account
    const createdAt=props.createdAt
    const description=props.description
    const handleDeleteTweet=props.onClick
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img className={styles.avatarImg} src={avatar} alt="avatar" />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.userInfo}>
                    <h5 className={styles.name}>{userName}</h5>
                    <span className={styles.account}>@{account}</span>
                    <span className={styles.tweetTime}>&#xb7;{getRelativeTime(createdAt)}</span>
                </div>
                <div className={styles.tweetContent}>
                    {description}
                </div>
            </div>
            <div className={styles.adminDelete}
            onClick={()=>handleOpenModal()}>
              <img className={styles.deleteImg} src={admin_delete} alt="admin_delete" />
            </div>
            {isModalOpen && <AdminDeleteModal handleCloseModal={handleCloseModal} handleDeleteTweet={handleDeleteTweet} tweetId={tweetId} avatar={avatar} description={description}/>}
        </div>
    );
}
