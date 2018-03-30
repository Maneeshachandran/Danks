import React from 'react';
import { Grid,Table,Divider,Segment,Image,Modal,Button,Dropdown} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
//import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-pathjs-chart';

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
      selectedProduct:'All'
    }
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
  applyFilter(){
    this.setState({open:true});
  }
  closeModal(){
    this.setState({open:false});
  }
  apply(){
    this.setState({open:false});
  }
  render(){
  const data1=  [
  [
    {
      "value": 15,
      "name": "Net Profit"
    },
    {
      "value": 25,
      "name": "Net Profit"
    },
    {
      "value": 50,
      "name": "Net Profit"
    }
  ],
  [
    {
      "value": 45,
      "name": "Net Income"
    },
    {
      "value": 59,
      "name": "Net Income"
    },  {
        "value": 77,
        "name": "Net Income"
      }
  ]
];
const options1=   {
            width:250,
            height:200,
            margin: {
              top: 20,
               left: 20,
               bottom: 50,
                right: 20
              },
            color:'#2980B9',
            gutter:20,
            animate:{
                type:'oneByOne',
                duration:200,
                fillTransition:3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                label:{
                    fontFamily:'Arial',
                    fontSize:14,
                    fontWeight:true,
                    fill:'#34495E'
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label:{
                    fontFamily:'Arial',
                    fontSize:14,
                    fontWeight:true,
                    fill:'#34495E'
                }
              }
            };
            const data2=  [
            [
              {
                "value": 35,
                "name": "Paid"
              },
              {
                "value": 49,
                "name": "Paid"
              },
              {
                "value": 78,
                "name": "Paid"
              }
            ],
            [
              {
                "value": 44,
                "name": "Yet to"
              },
              {
                "value": 66,
                "name": "Yet to"
              },  {
                  "value": 90,
                  "name": "Yet to"
                }
            ]
          ];
          const options2=   {
                      width:250,
                      height:200,
                      margin: {
                        top: 20,
                         left: 20,
                         bottom: 50,
                          right: 20
                        },
                      color:'#F4D03F',
                      gutter:20,
                      animate:{
                          type:'oneByOne',
                          duration:200,
                          fillTransition:3
                      },
                      axisX: {
                          showAxis: true,
                          showLines: true,
                          showLabels: true,
                          showTicks: true,
                          zeroAxis: false,
                          orient: 'bottom',
                          label:{
                              fontFamily:'Arial',
                              fontSize:14,
                              fontWeight:true,
                              fill:'#34495E'
                          }
                      },
                      axisY: {
                          showAxis: true,
                          showLines: true,
                          showLabels: true,
                          showTicks: true,
                          zeroAxis: false,
                          orient: 'left',
                          label:{
                              fontFamily:'Arial',
                              fontSize:14,
                              fontWeight:true,
                              fill:'#34495E'
                          }
                        }
                      };
                      const data3=  [
                      [
                        {
                          "value": 30,
                          "name": "Paid"
                        },
                        {
                          "value": 56,
                          "name": "Paid"
                        },
                        {
                          "value": 77,
                          "name": "Paid"
                        }
                      ],
                      [
                        {
                          "value": 44,
                          "name": "Yet to"
                        },
                        {
                          "value": 57,
                          "name": "Yet to"
                        },  {
                            "value": 80,
                            "name": "Yet to"
                          }
                      ]
                      ];
                      const options3=   {
                                width:250,
                                height:200,
                                margin: {
                                  top: 20,
                                   left: 20,
                                   bottom: 50,
                                    right: 20
                                  },
                                color:'#27AE60',
                                gutter:20,
                                animate:{
                                    type:'oneByOne',
                                    duration:200,
                                    fillTransition:3
                                },
                                axisX: {
                                    showAxis: true,
                                    showLines: true,
                                    showLabels: true,
                                    showTicks: true,
                                    zeroAxis: false,
                                    orient: 'bottom',
                                    label:{
                                        fontFamily:'Arial',
                                        fontSize:14,
                                        fontWeight:true,
                                        fill:'#34495E'
                                    }
                                },
                                axisY: {
                                    showAxis: true,
                                    showLines: true,
                                    showLabels: true,
                                    showTicks: true,
                                    zeroAxis: false,
                                    orient: 'left',
                                    label:{
                                        fontFamily:'Arial',
                                        fontSize:14,
                                        fontWeight:true,
                                        fill:'#34495E'
                                    }
                                  }
                                };

    console.log("this.props",this.props.match.params.value);

    let display;
    if (this.props.match.params.value == 'Net Profit Margin') {
      display = (
        <Grid style={{marginTop:'16.5%'}}>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={4}>
            <h3>Region</h3>
            <h3>Segment</h3>
            <h3>Product</h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <h3>{this.state.selectedLocation}</h3>
            <h3>{this.state.selectedCategory}</h3>
            <h3>{this.state.selectedProduct}</h3>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image size='tiny' style={{marginTop:'10px',marginLeft:'40px'}} src='../../images/filter-filled-tool-symbol (1).png' onClick={this.applyFilter.bind(this)}/>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1} />
            <Grid.Column width={14} >
              <Bar data={data1} options={options1} accessorKey="value" />
            </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
      )
    }
    else if(this.props.match.params.value == 'Account Payable Turnover' || this.props.match.params.value == 'Account Receivable Turnover'){
      display = (
      <Grid>
        <Grid.Row style={{background:'rgb(163,16,77,0.5)',marginTop:'70px',color:'white'}}>
          <Grid.Column width={16}>
            <h2 style={{marginLeft:'15px'}}>Working Capital</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{background:'rgb(255,255,255,0.4)',color:'#a3104d',marginTop:'15px'}}>
          <Grid.Column width={16}>
            <center><h3>Account Payable</h3></center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{background:'rgb(255,255,255,0.4)',marginTop:'15px'}}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Bar data={data2} options={options2} accessorKey="value" />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{background:'rgb(255,255,255,0.4)',color:'#a3104d',marginTop:'15px'}}>
          <Grid.Column width={16}>
            <center><h3>Account Receivable</h3></center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{background:'rgb(255,255,255,0.4)',marginTop:'15px'}}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Bar data={data3} options={options3} accessorKey="value" />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
      </Grid>
    )
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
      <HeaderComponent content='Income Statement' linkto='/cfo'/>
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
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column>
                      <center>
                      <Image src='../../images/map.png' />
                      </center>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}/>
                    <Grid.Column width={10}>
                      <Dropdown className='drop1' placeholder="Select a Location" fluid selection options={countryOptions} onChange={this.handleLocation.bind(this)} style={{background:'rgba(17, 216, 213,1)'}}/>
                    </Grid.Column>
                    <Grid.Column width={3}/>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column>
                      <center>
                      <Image src='../../images/cat.png' />
                      </center>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}/>
                    <Grid.Column width={10}>
                      <Dropdown className='drop1' placeholder="Select a Category" fluid selection options={categoryOptions} onChange={this.handleCategory.bind(this)} style={{background:'rgba(17, 216, 213,1)'}}/>
                    </Grid.Column>
                    <Grid.Column width={3}/>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column>
                      <center>
                      <Image src='../../images/shop.png' />
                      </center>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}/>
                    <Grid.Column width={10}>
                      <Dropdown className='drop1' placeholder="Select a Product" fluid selection options={productOptions} onChange={this.handleProduct.bind(this)} style={{background:'rgba(17, 216, 213,1)'}}/>
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
                          <Button style={{border:'1px solid black',color:'#2666D1'}} onClick={this.apply.bind(this)} >Apply</Button>
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
