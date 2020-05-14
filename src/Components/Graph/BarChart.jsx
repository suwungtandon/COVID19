import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({confirmed, recovered, deaths, country}) => {
    return (
        confirmed ? (
            <Bar
                data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['#1CABD180', '#30ED1880', '#FE6B8B80'],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
                }}
                redraw
                height={300}
                width={800}
                options={{
                    maintainAspectRatio: false,
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );
}

export default BarChart;
