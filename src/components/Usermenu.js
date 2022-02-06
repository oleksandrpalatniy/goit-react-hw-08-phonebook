import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLogOutMutation, getUserName } from '../redux/auth';
import { toast } from 'react-toastify';
import defaultAvatar from '../default-avatar.webp';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const [logOut, {isSuccess, isError, error }] =
    useLogOutMutation();

  useEffect(() => {
    isError && toast.error(error);
    isSuccess && toast.success('Logged out');
  }, [error, isError, isSuccess]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {userName}</span>
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
