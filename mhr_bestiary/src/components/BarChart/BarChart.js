import React from 'react';
import { Bar, Chart } from 'react-chartjs-2';

Chart.defaults.plugins.legend = false;

function BarChart() {
    return (
        <Bar
        data={{
            labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Total Damage'],
            datasets: [
                {data: [3, 3, 3, 2, 3],
                backgroundColor: [
                    'rgba(192, 57, 43, 0.5)',
                    'rgba(233, 212, 96, 0.5)',
                    'rgba(42, 187, 155, 0.5)',
                    'rgba(25, 181, 254, 0.5)',
                    'rgba(191, 85, 236, 0.5)',
                    ],
                }
        ],
    }}
        options={{
            maintainAspectRatio: true,
            indexAxis: 'y',
            scales: {
                x: {
                    min: 0,
                    max: 4,
                    ticks: {
                        color: 'white',
                        count: 5
                      },
                },
                y: {
                    ticks: {
                        color: 'white',
                    }
                },
            }
        }}
    />
    )

}

export default BarChart;