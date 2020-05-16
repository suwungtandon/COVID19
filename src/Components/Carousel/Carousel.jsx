import React from 'react';
import {Grid, Card, CardContent, Typography, CardMedia, makeStyles, CardActions, Button, CardHeader} from '@material-ui/core';
import {imageTypes} from '../../helpers';
import styles from  './Carousel.module.css'; 
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '70.25%',
      borderRadius: '10%',
    },
    text: {
        alignSelf: 'center',
    }
}));

const Carousel  = () => {
    const classes = useStyles();

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h3" variant="h4" color="textSecondary" style={{margin: '2%'}}>Public Advisory</Typography>
            <div className={styles.container}>
                <Grid container spacing={1} justify="center">
                    {
                        imageTypes.map((value, index) => {
                            return (
                                <Grid item xs={12} md={2} key={value.id} component={Card} raised className={cx(styles.card, classes.root)}>
                                    <CardHeader
                                        title={value.name}  
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={require(`../../assets/${value.data}.jpg`)}
                                        title="Paella dish"
                                    />
                                    <CardActions>
                                        <Button variant="contained" color="primary" href={value.link}>
                                            Details
                                        </Button>
                                    </CardActions>
                                    <CardContent>
                                        <Typography variant="body2" component="p">
                                            {value.body}
                                        </Typography>
                                    </CardContent>

                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        </div>
    );
}

export default Carousel;
