"use client"

import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChartComponent() {
    const data = {
        labels: ['Data 1', 'Data 2', 'Data 3'],
        datasets: [
            {
                label: 'count',
                data: [33, 33, 33],
                backgroundColor: [
                    '#047481',
                    '#7e3af2',
                    '#3f83f8',
                ],
            },
        ],
    };

    return (
        <div className="p-4 bg-white shadow-xs dark:bg-gray-800 rounded-lg">
            <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-300">Doughnut Chart</h4>
            <Doughnut
                data={data}
                options={{
                    cutout: "80%",
                    elements: {
                        arc: {
                            borderColor: "#FFFFFF",
                            borderWidth: 1
                        }
                    },
                    layout: {
                        padding: {
                            bottom: 10
                        },
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                font: {
                                    family: 'Inter',
                                    size: 12
                                },
                                padding: 20,
                            },
                        }
                    }
                }}
            />
        </div>
    )
}
