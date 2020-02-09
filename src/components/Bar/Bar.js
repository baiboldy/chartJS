import React, { useEffect } from 'react'
import Chart from 'chart.js'

function Bar(props) {
    const barRef = React.createRef()

    useEffect(() => {
        const myBarRef = barRef.current.getContext('2d');
        new Chart(myBarRef, {
            type: props.type,
            data: {
                labels: ['2005', '2010', '2015', '2020'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [23, 45, 85, 78],
                        backgroundColor: `rgba(${props.leftBgColor},${props.centerBgColor},${props.rightBgColor},0.3)`,
                        hoverBackgroundColor: 'rgba(255,0,255,0.4)',
                    },
                    {
                        label: 'Buying',
                        data: [30, 45, 85, 78],
                        backgroundColor: 'rgba(233,0,23,0.3)',
                        hoverBackgroundColor: 'rgba(144,0,255,0.4)',
                    },
                ]
            },
            options: {
                events: ['click'],
                // onClick: (context) => alert(`You clicked on x: ${context.x}, y: ${context.y}`),
                animation: {
                    easing: 'easeInExpo',
                    duration: 3000
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    }
                },
                legend: {
                    display: true,
                    position: 'left',
                    align: 'start',
                    labels: {
                        fontSize: 15,
                        fontFamily: 'Helvica'
                    }
                },
                title: {
                    display: true,
                    position: 'top',
                    text: 'Bar line',
                    fontSize: 20,
                    fontColor: 'rgba(122,12,92,0.3)',
                    lineHeight: 2
                },
                tooltips: {
                    enabled: true,
                    mode: 'single',
                    titleAlign: 'center',
                    bodyFontFamily: 'Helvica',
                    bodyAlign: 'center',
                },


            }
        })

    }, [barRef])

    return (
        <div className="chart-container" style={{ position: 'relative', width: '93vw' }}>
            <canvas
                id='barChart'
                ref={barRef}
            />
        </div>
    )
}

export default Bar 