import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/apiCall';
import {Grid, Card, CardContent, Typography, Grow} from '@material-ui/core';
import LineChart from './LineChart';
import BarChart from './BarChart';

import styles from './Graph.module.css';

const Graph = ({ data: { confirmed, recovered, deaths }, country, value, loading=false }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            setDailyData(await fetchDailyData());
        }

        callApi();
    }, []);

    return (
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
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
                        <CardContent>
                            <Typography variant="h5" component="h2">{`Latest Updates in ${country}`}</Typography>
                        </CardContent>
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
