import React, { Component } from 'react'
import { Doughnut,Line } from 'react-chartjs-2';

const state = {
    labels: ['completed', 'Not completed'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#009900',
                '#C0C0C0'
            ],
            hoverBackgroundColor: [
                '#009900',
                '#C0C0C0'
            ],
            data: [10, 90]
        }
    ]

}

const state1 = {
    labels: ['Age 25','Today','','Age 32'],
    datasets: [
        {
            label:"",
            fill:true,
            lineTension: 0,
            backgroundColor: ['#009900'],
            borderWidth: 0,
            data: [0,25],
            pointRadius:0
            
        },{
            label:"",
            fill:true,
            lineTension: 0,
            backgroundColor: ['#C0C0C0'],
            borderWidth: 0,
            data: [0,25,50,75],
            pointRadius:0
            
        }

    ]
}

export class Student extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 text-left">
                        <h5>Your goals</h5>
                        <h2>Pay off student loan</h2>
                        <div className="row mt-3">
                            <div className='col-md-3 col-sm-12'>
                                <h4>Goal progress</h4>
                                <div className="card ca mt-3 bg-light">
                                    <div className='txx'>10%</div>
                                    <Doughnut
                                        data={state}
                                        width={100}
                                        height={100}

                                        options={{
                                            elements: {
                                                arc: {
                                                    borderWidth: 0
                                                },

                                            },
                                            cutoutPercentage: 70,
                                            legend: {
                                                display: false,
                                                position: 'right'
                                            }
                                        }}
                                    />
                                    <div className="row mt-4">
                                        <div className="col-md-8">
                                            <h6><span className="text text-info">&#36;5k </span>/&#36;50k</h6>
                                            <span className="tx">amount saved for goal</span>
                                        </div>
                                        <div className="col-md-4">
                                            <h6>&#36;300</h6>
                                            <span className="tx">monthly</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8 ml-3 col-sm-12'>
                                <h4>Goal trajectory</h4>
                                <div className="card ca1 mt-3 bg-light">
                                    <Line
                                        data={state1} 
                                        height={90}
                                        options={{
                                            
                                            legend:{
                                                display:false
                                            },

                                            scales: {
                                                yAxes: [{
                                                    position:'right',
                                                    ticks: {
                                                        beginAtZero:true,
                                                        min: 0,
                                                        max: 75,
                                                        stepSize:15,
                                                            
                                                    }
                                                  }]
                                               }
                                        }}
                                    />
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-3'>
                                        <button className='btn btn-block text-light' style={{backgroundColor:"#009900"}}>View Details&nbsp;&nbsp;<span className="badge text-success badge-light badge-sm">+</span></button>
                                    </div>
                                    <div className='col-md-9'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3 ml-1'>
                            <h5>We recommend:</h5>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-sm-12">
                                <div className="card card1 mb-5">
                                    <h6 className="text text-info"><span className="badge badge-info text-light">+</span>&nbsp;&nbsp;Continue saving when you can</h6>
                                    <p className="ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                            <div className="card card1 mb-5">
                                    <h6 className="text text-danger"><span className="badge badge-danger text-light">-</span>&nbsp;&nbsp;Decrease contributions to your IRA for now!</h6>
                                    <p className="ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student
