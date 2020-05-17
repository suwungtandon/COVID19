import React, {useState, useEffect} from 'react';
import {fetchDailyData, fetchNews} from '../../api/apiCall';
import {Grid, Card, CardContent, Typography, Grow, CardMedia, CardActions, Button, makeStyles} from '@material-ui/core';
import LineChart from './LineChart';
import BarChart from './BarChart';
import CountryPicker from '../CountryPicker/CountryPicker';

import styles from './Graph.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '40%',
    },
    text: {
        alignSelf: 'center',
    }
}));

const Graph = ({ data: { confirmed, recovered, deaths }, country, value, handleCountryChange }) => {
    const [dailyData, setDailyData] = useState([]);
    const [news, setNews] = useState({});

    useEffect(() => {
        const callApi = async () => {
            setDailyData(await fetchDailyData());
            setNews(await fetchNews(country));
        }

        callApi();
    }, [country]);

    const classes = useStyles();

    return (
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grow in={!value} {...(!value ? { timeout: 1000 } : {})}>
                    <Grid item xs={12} className={styles.card} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CountryPicker handleCountryChange={handleCountryChange} country={country} />
                    </Grid>
                </Grow>
                <Grow in={!value} {...(!value ? { timeout: 1000 } : {})}>
                    <Grid item component={Card} xs={12} md={4} className={styles.card}>
                        {country ? (
                            <BarChart 
                                confirmed={confirmed} 
                                recovered={recovered} 
                                deaths={deaths} 
                                country={country} 
                            />
                        ) : (
                            <LineChart 
                                dailyData={dailyData} 
                                type='confirmed' 
                                label='Infected' 
                                primaryColor='#1CABD140' 
                                secondaryColor='#1CABD1' 
                            />
                        )}
                    </Grid>
                </Grow>
                <Grow in={!value} {...(!value ? { timeout: 2000 } : {})}>
                    <Grid item component={Card} xs={12} md={4} className={styles.card}>
                    {country ? (
                        <div>
                            <Typography variant="body1" component="h2" color="textPrimary">{`Latest Updates in ${country}`}</Typography>
                            {
                                news.totalResults ? (
                                    <div> 
                                        <Typography variant="body2" component="p">{news.articles[0].title} </Typography>                                      
                                        <CardMedia
                                            className={classes.media}
                                            image={news.articles[0].urlToImage}
                                            title="Paella dish"
                                        />
                                        <CardActions disableSpacing>
                                            <Button variant="contained" color="primary" href={news.articles[0].url}>
                                                Details
                                            </Button>
                                        </CardActions>
                                        <CardContent>
                                            <Typography variant="body2" component="p">
                                                {news.articles[0].description}
                                            </Typography>
                                            <Typography variant="caption">{new Date(news.articles[0].publishedAt).toDateString()}</Typography>
                                        </CardContent>
                                    </div>
                                ) : (
                                    <Typography variant="body2" component="p" color="textSecondary">Currently no news to display</Typography>
                                )
                            }
                        </div>
                        ) : (
                            <LineChart 
                                dailyData={dailyData} 
                                type='deaths' 
                                label='Deaths' 
                                primaryColor='#FE6B8B40' 
                                secondaryColor='#FE6B8B' 
                            />
                        )}
                    </Grid>
                </Grow>
            </Grid>
        </div>
    );
}

export default Graph;
