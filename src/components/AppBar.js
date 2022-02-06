import React from 'react';
import Navigation from './Navigation';
import UserMenu from './Usermenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import { getUserName } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = () => {
  const userName = useSelector(getUserName);
  return (
    <header style={styles.header}>
      <Navigation />
      {userName ? <UserMenu /> : <AuthNav />}
      {/* {!userName && <AuthNav />} */}
      {/* {isAuthenticated ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
