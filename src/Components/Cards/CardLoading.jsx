import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';
import styles from './Cards.module.css';

const CardLoading  = () => {
    return (
        <Grid container spacing={1} justify="center" style={{marginBottom: '2%'}}>
            <Grid item xs={12} md={3} component={Card} raised className={styles.card}>
                <CardContent style={{padding: '10%'}}>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    </React.Fragment>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} raised className={styles.card}>
                <CardContent style={{padding: '10%'}}>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    </React.Fragment>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} raised className={styles.card}>
                <CardContent style={{padding: '10%'}}>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    </React.Fragment>
                </CardContent>
            </Grid>
        </Grid>
    );
}

export default CardLoading;
