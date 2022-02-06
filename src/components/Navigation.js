import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/homepage"
      style={styles.link}
      activeclassname={styles.activeLink}
    >
      Main
    </NavLink>

    <NavLink
      to="/phonebook"
      style={styles.link}
      activeclassname={styles.activeLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
