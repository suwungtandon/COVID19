import React from 'react';
import {AppBar, Tabs, Tab, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginBottom: '1%',
  },
}));

const SwitchTabs = ({handleChange, value}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
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
      </AppBar>
    </div>
  );
}

export default SwitchTabs;
