import React from 'react'
import {Paper} from '@material-ui/core';
import logo from '../../logo.svg';
import {DarkSwitch} from '../../Components';

import styles from './Header.module.css';

const Header = () => {
    return (
        <Paper className={styles.container}>
            <div className={styles.header}>
                <p className={styles.text}>C</p>
                <img src={logo} className={styles.logo} alt="logo" />
                <p className={styles.text}>VID-19 </p> 
            </div>
            <div className={styles.header}>
                <p className={styles.separator}>|</p>
                <p className={styles.text}>Tracker Simplified!</p> 
            </div>  
        </Paper>
    );
}

export default Header;
