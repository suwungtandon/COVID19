import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/apiCall';
import {Line} from 'react-chartjs-2';
import styles from './Graph.module.css';

const Graph = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            setDailyData(await fetchDailyData());
        }

        callApi();
    }, []);

    const LineChart = (
        dailyData.length ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        lineTension: 0.1,
                        fill: true,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'round',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: 'rgba(75,192,192,1)',
                        pointBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        yAxisID: 'y-axis-1',
                        xAxisID: 'x-axis-1',
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        lineTension: 0.1,
                        fill: true,
                        backgroundColor: 'rgba(225,0,0,0.4)',
                        borderColor: 'rgba(225,0,0,1)',
                        borderCapStyle: 'round',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: 'rgba(225,0,0,1)',
                        pointBackgroundColor: 'rgba(225,0,0,1)',
                        pointBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        yAxisID: 'y-axis-1',
                        xAxisID: 'x-axis-1',
                    },
                    ],
                    }}
                    redraw
                    height={300}
                    width={500}
                    options={
                    {
                        maintainAspectRatio: false,
                        hover: true,
                        responsive: true,
                        tooltips: {
                        mode: 'single',
                        },
                        scales: {
                        xAxes: [
                            {
                            id: 'x-axis-1',
                            display: 'auto',
                            gridLines: {
                                display: false,
                            },
                            },
                        ],
                        yAxes: [
                            {
                            display: 'auto',
                            id: 'y-axis-1',
                            gridLines: {
                                display: true,
                            },
                            },
                        ],
                        },
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {LineChart}
        </div>
    );
}

export default Graph;
