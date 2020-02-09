import React, { Component } from 'react'
import Chart from 'chart.js'
// import classes from './Chart.css'

export default class Charting extends Component {
    chartRef = React.createRef()

    componentDidMount() {
        // debugger;
        const myChartRef = this.chartRef.current.getContext('2d')

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March", "September"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 97],
                        borderColor: 'blue'
                    },
                    {
                        label: 'Nights',
                        data: [54, 45, 78],
                        borderColor: 'red',
                        hoverBackgroundColor: 'blue',
                        fill: true,
                    },
                    {
                        label: 'Brights',
                        data: [48, 52, 64, 87]
                    }
                ],
            },
            options: {
                elements: {
                    point: {
                        radius: 5,
                        pointStyle: 'triangle',
                        borderColor: 'black',
                        hoverRadius: 7
                    }
                }
            }
        })
    }

    render() {
        return (
            <div style={{ width: '93vw' }}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}