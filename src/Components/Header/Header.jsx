import React from 'react'
import {Paper, AppBar, Slide, useScrollTrigger} from '@material-ui/core';
import logo from '../../logo.svg';

import styles from './Header.module.css';
const HideOnScroll = (props) => {
    let contentRef = React.createRef();
    const trigger = useScrollTrigger({target: contentRef.current ? contentRef.current() : undefined});
  
    return (
      <Slide appear={false} direction="down" in={!trigger} ref={contentRef}>
        {props.children}
      </Slide>
    );
}

const Header = (props) => {
    return (
        <HideOnScroll>
            <AppBar position="sticky" style={{marginBottom: '1%'}}>
                <Paper className={styles.container}>
                    <div className={styles.header}>
                        <p className={styles.text}>C</p>
                        <img src={logo} className={styles.logo} alt="logo" />
                        <p className={styles.text}> COVID-19 </p> 
                    </div>
                    <div className={styles.header}>
                        <p className={styles.separator}>|</p>
                        <p className={styles.text}>Tracker Simplified !!!</p> 
                    </div>  
                </Paper>
            </AppBar>
        </HideOnScroll>
    );
}

export default Header;
