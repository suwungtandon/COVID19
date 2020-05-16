import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import styles from './SwitchTabs.module.css';

const SwitchTabs = ({handleChange, value}) => {
  return (
    <div className={styles.container}>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Stats"/>
          <Tab label="Map"/>
        </Tabs>
      </Paper>
    </div>
  );
}

export default SwitchTabs;
