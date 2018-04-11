import React, {Component} from 'react';
import { Grid, Form, Table, Divider, Dropdown ,Segment} from 'semantic-ui-react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import request from 'superagent';


export default class NetProfit extends Component {
  constructor() {
    super();
    this.state={
      tableTitle:[],
      quarterMonth:[],
      tableValues:[]
    }
  }

  componentWillMount(){
    var context=this;
    var header=[];
    var content=[];
    var chartHeader=[];
    request.post('/getData').end(function(err, res) {
      if (err || !res.ok) {
        alert('Oh no! error');
      } else {
        console.log(res.body);
          // res.body.map((item)=>{
          //   header.push(Object.keys(item));
          //   content.push(Object.values(item));
          // })
          // chartHeader=header[0].slice(2);
          // context.setState({tableTitle:header[0],tableValues:content,quarterMonth:chartHeader});
        }
    });


  }

render(){
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },{
        label: 'My First dataset',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
        hoverBackgroundColor: 'blue',
        hoverBorderColor: 'blue',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const options = {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      };

    var data = {
    labels: this.state.quarterMonth,
    datasets: []
  };

  this.state.tableValues.map((item,i)=>{
    var temp = item.slice(2);
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    data.datasets.push({
        label: item[0],
        fill: false,
        lineTension: 0.1,
        backgroundColor: hue,
        borderColor: hue,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: hue,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: hue,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: temp
      });
  });


  return(
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1 style={{textAlign:'center'}}> NetProfit </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={14} >
              <Segment inverted>
                <Bar data={data1} width={100} height={250} options={options} />
             </Segment>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    </div>
  );
}
}
