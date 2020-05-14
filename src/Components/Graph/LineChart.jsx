import React from 'react';
import {Line} from 'react-chartjs-2';

const options = {
    maintainAspectRatio: false,
    hover: true,
    responsive: true,
    tooltips: {
    mode: 'single',
    },
    scales: {
        xAxes: [{
            id: 'x-axis-1',
            display: 'auto',
            gridLines: {
                display: false,
            },
        }],
        yAxes: [{
            display: 'auto',
            id: 'y-axis-1',
            gridLines: {
                display: true,
            },
        }],
    },
}

const LineChart = ({dailyData, type, label, primaryColor, secondaryColor}) => {
    return (
        dailyData.length ? (
            <Line 
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map((data) => data[type]),
                        label: label,
                        lineTension: 0.1,
                        fill: true,
                        backgroundColor: primaryColor,
                        borderColor: secondaryColor,
                        borderCapStyle: 'round',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: secondaryColor,
                        pointBackgroundColor: secondaryColor,
                        pointBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        yAxisID: 'y-axis-1',
                        xAxisID: 'x-axis-1',
                    }],
                }}
                redraw
                height={400}
                width={500}
                options={options}
            />
        ) : null
    );
}

export default LineChart;
