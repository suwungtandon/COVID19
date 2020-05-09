import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {cardTypes} from '../../helpers';
import cx from 'classnames';

const useStyles = makeStyles({
    root: {
        border: 0,
        color: 'white',
        padding: '0 30px',
    },
    confirmed: {
        background: 'linear-gradient(45deg, #1CABD1 30%, #1245EB 90%)',
        boxShadow: '1px 3px 5px 4px #1245EB40',
    },
    recovered: {
        background: 'linear-gradient(45deg, #30ED18 30%, #23DDD0 90%)',
        boxShadow: '1px 3px 5px 4px #23DDD040',
    },
    deaths: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '1px 3px 5px 4px #FF8E5340',
    },
});

const Cards = ({data}) => {
    const classes = useStyles();

    if(!data.confirmed) {
        return "Loading..."
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {
                    cardTypes.map((value, index) => {
                        return (
                            <Grid item xs={12} md={3} key={value.id} component={Card} raised className={cx(styles.card, classes.root, classes[value.data])}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        {value.name}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        <CountUp start={0} end={data[value.data].value} duration={2.5} separator=","  />
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {value.body}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {new Date(data.lastUpdate).toDateString()}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Cards;
