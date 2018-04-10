import React from 'react';
import { Grid,Table,Divider,Segment,Image,Modal,Button,Dropdown,Label} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
//import {Pie} from 'react-chartjs-2';
// import {Bar} from 'react-pathjs-chart';
import {Bar} from 'react-chartjs-2';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

const countryOptions = [ { key: 'Sollentuna', value: 'Sollentuna', text: 'Sollentuna' },
                          { key: 'Hägersten', value: 'Hägersten', text: 'Hägersten' },
                          { key: 'Skärholmen', value: 'Skärholmen', text: 'Skärholmen' }
                       ]
const categoryOptions = [ { key: 'Vegetables', value: 'Vegetables', text: 'Vegetables' },
                         { key: 'Fruits', value: 'Fruits', text: 'Fruits' },
                         { key: 'Oil', value: 'Oil', text: 'Oil' },
                          { key: 'Packed Items', value: 'Packed Items', text: 'Packed Items' }
                       ]
 const productOptions = [ { key: 'Apple', value: 'Apple', text: 'Apple' },
                          { key: 'Banana', value: 'Banana', text: 'Banana' },
                          { key: 'Orange', value: 'Orange', text: 'Orange' },
                          { key: 'Grapes', value: 'Grapes', text: 'Grapes' }
                        ]
export default class IncomeStatement extends React.Component {
  constructor(){
    super();
    this.state={
      open:false,
      selectedLocation:'All',
      selectedCategory:'All',
      selectedProduct:'All',
      data : [
        [{
          "v": 49,
          "name": "2016 NP"
        },{
          "v": 42,
          "name": "2017 NP"
        },{
          "v": 79,
          "name": "2018 NP"
        }],
        [{
          "v": 69,
          "name": "2016 NS"
        }, {
          "v": 62,
          "name": "2017 NS"
        },{
          "v": 59,
          "name": "2018 NS"
        }]
      ],
      options : {
        width: 250,
        height: 200,
        margin: {
          top: 20,
          left: 25,
          bottom: 50,
          right: 20
        },
        color: '#2980B9',
        gutter: 10,
        animate: {
          type: 'oneByOne',
          duration: 200,
          fillTransition: 3
        },
        axisX: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'bottom',
          label: {
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: true,
            fill: '#34495E',
            rotate: 45
          }
        },
        axisY: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'left',
          label: {
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: true,
            fill: '#34495E'
          }
        },
      dataSet:[{
        'region':'Sollentuna',
        'category':'Vegetables',
        'product':'Apple',
        'data':[[{
          "v": 49,
          "name": "Net Profit"
        },{
          "v": 42,
          "name": "Net Profit"
        },{
          "v": 79,
          "name": "Net Profit"
        }],
        [{
          "v": 69,
          "name": "Net Sales"
        }, {
          "v": 62,
          "name": "Net Sales"
        },{
          "v": 59,
          "name": "Net Sales"
        }]],
       'options' : {
          width: 250,
          height: 200,
          margin: {
            top: 20,
            left: 25,
            bottom: 50,
            right: 20
          },
          color: '#2980B9',
          gutter: 20,
          animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
          },
          axisX: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'bottom',
            label: {
              fontFamily: 'Arial',
              fontSize: 12,
              fontWeight: true,
              fill: '#34495E',
              rotate: 45
            }
          },
          axisY: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'left',
            label: {
              fontFamily: 'Arial',
              fontSize: 12,
              fontWeight: true,
              fill: '#34495E'
            }
          }
        }
      },{
        'region':'Sollentuna',
        'category':'Fruits',
        'product':'Banana',
        'data':[[{
          "v": 61,
          "name": "Net Profit"
        },{
          "v": 88,
          "name": "Net Profit"
        },{
          "v": 95,
          "name": "Net Profit"
        }],
        [{
          "v": 70,
          "name": "Net Sales"
        }, {
          "v": 90,
          "name": "Net Sales"
        },{
          "v": 101,
          "name": "Net Sales"
        }]],
       'options' : {
          width: 250,
          height: 200,
          margin: {
            top: 20,
            left: 25,
            bottom: 50,
            right: 20
          },
          color: '#2980B9',
          gutter: 20,
          animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
          },
          axisX: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'bottom',
            label: {
              fontFamily: 'Arial',
              fontSize: 12,
              fontWeight: true,
              fill: '#34495E',
              rotate: 45
            }
          },
          axisY: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'left',
            label: {
              fontFamily: 'Arial',
              fontSize: 12,
              fontWeight: true,
              fill: '#34495E'
            }
          }
        }
      }]
    }
  }
    this.apply = this.apply.bind(this);
  }
  handleLocation (evt,result) {
    this.setState({selectedLocation:result.value});
    }
  handleCategory (evt,result) {
    this.setState({selectedCategory:result.value});
    }
  handleProduct (evt,result) {
    this.setState({selectedProduct:result.value});
    }
  openFilter(){
    this.setState({open:true});
  }
  closeModal(){
    this.setState({open:false});
  }
  apply(){
   // this.setState({open:false});
    // console.log('before',this.state.da);
    // this.state.dataSet.map((item,i)=>{
    //   console.log('inside1!!!!!!',item,this.state.selectedLocation,this.state.selectedCategory,this.state.selectedProduct);
    //   if(this.state.selectedLocation == item.region &&
    //      this.state.selectedCategory == item.segment &&
    //       this.state.selectedProduct == item.product )
    //       {
    //     console.log("inside region1",item.region);
    //     console.log("inside category1",item.segment);
    //     console.log('inside1',item.product);
    //     this.setState({filteredData:item.data,filteredOptions:item.options});
    //     }
      //   else
      //   {
      //     console.log('aaaaaaaaaaaaaa');
      // //  alert('No data');
      //  this.setState({filteredData:[],filteredOptions:{}});
      // }
    // })
    if(this.state.selectedCategory == 'Vegetables'){
      let data = [
        [{
          "v": 66,
          "name": "2016 NP"
        },{
          "v": 78,
          "name": "2017 NP"
        },{
          "v": 94,
          "name": "2018 NP"
        }],
        [{
          "v": 72,
          "name": "2016 NI"
        }, {
          "v": 84,
          "name": "2017 NI"
        },{
          "v": 111,
          "name": "2018 NI"
        }]
      ]


    this.setState({data:data,open:false});
  }
}
  render(){

    const data1 = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Payable',
          backgroundColor: '#1A237E',
          data: [269, 334, 323, 267]
        },
        {
          label: 'Receivable',
          backgroundColor: '',
          data: [289, 197, 223, 117]
        }
      ]
    };
    // let data1 = [
    //   [{
    //     "v": 269,
    //     "name": "Paid",
    //     "quater": "Q1"
    //   }, {
    //     "v": 334,
    //     "name": "Paid",
    //     "quater": "Q2"
    //   },{
    //     "v": 323,
    //     "name": "Paid",
    //     "quater": "Q3"
    //   },{
    //     "v": 267,
    //     "name": "Paid",
    //     "quater": "Q4"
    //   }],
    //   [{
    //     "v": 289,
    //     "name": "Received",
    //     "quater": "Q1"
    //   }, {
    //     "v": 197,
    //     "name": "Received",
    //     "quater": "Q2"
    //   },{
    //     "v": 223,
    //     "name": "Received",
    //     "quater": "Q3"
    //   },{
    //     "v": 117,
    //     "name": "Received",
    //     "quater": "Q4"
    //   }]
    // ]

    let data2 = [
      [{
        "v": 19,
        "name": "Received"
      }, {
        "v": 90,
        "name": "Received"
      },{
        "v": 40,
        "name": "Received"
      }],
      [{
        "v": 99,
        "name": "Yet to"
      }, {
        "v": 110,
        "name": "Yet to"
      },{
        "v": 88,
        "name": "Yet to"
      }],
    ]

    let options = {
      width: 250,
      height: 200,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 10,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let options1 = {
      width: 250,
      height: 200,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#34495E',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let options2 = {
      width: 250,
      height: 200,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#1f9132',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }
    // const barData = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'Net Profit',
    //       backgroundColor: 'rgba(255,99,132,0.2)',
    //       borderColor: 'rgba(255,99,132,1)',
    //       borderWidth: 1,
    //       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //       hoverBorderColor: 'rgba(255,99,132,1)',
    //       data: [65, 59, 80]
    //     },{
    //       label: 'Net Sales',
    //       backgroundColor: 'rgba(255,99,132,0.2)',
    //       borderColor: 'rgba(255,99,132,1)',
    //       borderWidth: 1,
    //       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //       hoverBorderColor: 'rgba(255,99,132,1)',
    //       data: [65, 59, 80]
    //     }
    //   ]
    // };

   // console.log("this.props",this.props.match.params.value);
    let display;
    if (this.props.match.params.value == 'Net Profit Margin') {
      display = (
        <Grid style={{marginTop:'16.5%'}}>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={4}>
            <h3> Region</h3>
            <h3> Category</h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <h3><i>{this.state.selectedLocation}</i></h3>
            <h3><i>{this.state.selectedCategory}</i></h3>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image size='mini' style={{marginTop:'10px',marginLeft:'40px'}} src='../../images/settings.png' onClick={this.openFilter.bind(this)}/>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1} />
            <Grid.Column width={14} >

              <Bar data={this.state.data} options={this.state.options} />
              {/* <Bar
                  data={barData}
                  height={220}
                  options={{
                    scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
                  }}
                /> */}
            </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1} />
          <Grid.Column width={5}>
            <div style={{width:'10px',height:'10px',background:'#3199DE'}}></div>
            <p style={{fontSize:'13px'}}>NP -Net Profit</p>
          </Grid.Column>
          <Grid.Column width={5}>
            <div style={{width:'10px',height:'10px',background:'#2980B9'}} />
            <p style={{fontSize:'13px'}}>NS -Net Sales</p>
          </Grid.Column>
          <Grid.Column width={5} />
        </Grid.Row>
      </Grid>
      )
    }
    else if(this.props.match.params.value == 'Accounts Payable Turnover'){
      display = (
      <Grid>
        <Grid.Row></Grid.Row>
        <Grid.Row style={{marginTop:'70px',color:'black'}}>
          <Grid.Column width={16}>
            <h2 style={{marginLeft:'15px', textAlign:'center', color:'#1A237E'}}>Accounts Payable</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{background:'rgb(255,255,255,0.4)',marginTop:'15px'}}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Bar data={data1} options={options1} width={500} height={500} />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
      </Grid>
    )
  } else if (this.props.match.params.value == 'Accounts Receivable Turnover') {
    display = (
      <Grid>
          <Grid.Row></Grid.Row>
        <Grid.Row style={{marginTop:'70px',color:'black'}}>

          <Grid.Column width={16}>
            <h2 style={{marginLeft:'15px', textAlign:'center',color:'#1A237E'}}>Accounts Receivable</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{background:'rgb(255,255,255,0.4)',marginTop:'15px'}}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Bar data={data1} options={options2} width={500} height={500} />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
      </Grid>
    );
  }
    else {
      display = (
        <Grid style={{marginTop:'65px'}}>
          <Grid.Row >
            <Grid.Column width={1} />
            <Grid.Column width={14} style={{background:'rgb(255,255,255,0.4)',height:'500px'}}>
              <h2 style={{textAlign:'center',marginTop:'75%'}}><strong>No Data Found!!!</strong></h2>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      )
    }
    return(
      <div style={{overflow:'hidden'}}>
      <HeaderComponent content='Working Capital' linkto='/cfo'/>
        {display}
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Modal open={this.state.open} >
                <Modal.Header>
                  <center><h2 style={{color:'#2666D1'}}>Filter</h2></center>
                </Modal.Header>
                <Modal.Content >
                  <Grid>
                  <Grid.Row>
                    <Grid.Column width={3}/>
                    <Grid.Column width={10}>
                      <Dropdown placeholder="Select a Location" fluid selection options={countryOptions} onChange={this.handleLocation.bind(this)} style={{background:'lightgrey'}}/>
                    </Grid.Column>
                    <Grid.Column width={3}/>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}/>
                    <Grid.Column width={10}>
                      <Dropdown placeholder="Select a Category" fluid selection options={categoryOptions} onChange={this.handleCategory.bind(this)} style={{background:'lightgrey'}}/>
                    </Grid.Column>
                    <Grid.Column width={3}/>
                  </Grid.Row>
                </Grid>
                </Modal.Content>
                <Modal.Actions>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <Button.Group attached='bottom'>
                          <Button color='black' style={{background:'#2666D1',color:'white'}} onClick={this.closeModal.bind(this)}>Cancel</Button>
                          <Button style={{border:'1px solid black',color:'#2666D1'}} onClick={this.apply} >Apply</Button>
                        </Button.Group>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
