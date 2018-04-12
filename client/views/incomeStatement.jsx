import React from 'react';
import { Grid,Image,Modal,Button,Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
import {Bar} from 'react-chartjs-2';

const countryOptions = [
                          { key: '1', value: 'Birkerød', text: 'Birkerød' },
                          { key: '2', value: 'Kokkedal', text: 'Kokkedal', disabled: true },
                          { key: '3', value: 'Nørrebro', text: 'Nørrebro', disabled: true }
                       ];
const categoryOptions = [
                          { key: '1', value:'Organic', text:'Organic' },
                          { key: '2', value:'Fresh-Format', text:'Fresh-Format' },
                          { key: '3', value:'Supermarket', text:'Supermarket' },
                          { key: '4', value:'Limited Assortment', text:'Limited Assortment' },
                          { key: '5', value:'Independent Chains', text:'Independent Chains' }

                        ];
const productOptions = [
                         { key: 'Vegetables', value: 'Vegetables', text: 'Vegetables' },
                         { key: 'Fruits', value: 'Fruits', text: 'Fruits', disabled: true },
                         { key: 'Oil', value: 'Oil', text: 'Oil', disabled: true },
                         { key: 'Packed Items', value: 'Packed Items', text: 'Packed Items', disabled: true }
                       ];

export default class IncomeStatement extends React.Component {
  constructor(){
    super();
    this.state={
      open:false,
      selectedLocation:'All',
      selectedCategory:'All',
      selectedProduct:'All',
      netProfitMarginData : {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Net Profit',
            backgroundColor: '#1A237E',
            data: [1264, 1651, 1548, 1770]
          },{
            label: 'Net Sales',
            backgroundColor: 'grey',
            data: [5262, 7262, 7045, 7224]
          }
        ]
      },
      netProfitMarginOptions : {
        scales : {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '2017'
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'MDKK'
              },
              fontSize: '18px',
              fontColor: '#1A237E'
            }
          ]
        }
      },
      payRecData : {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Payable',
            backgroundColor: '#1A237E',
            data: [269, 334, 323, 267]
          },
          {
            label: 'Receivable',
            backgroundColor: 'grey',
            data: [289, 197, 223, 117]
          }
        ]
      },
      payRecOptions : {
        scales : {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '2017'
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'MDKK'
              },
              fontSize: '18px',
              fontColor: '#1A237E'
            }
          ]
        }
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
    if(this.state.selectedLocation == 'Birkerød' && this.state.selectedProduct == 'Vegetables'){
      let netProfitMarginData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Net Profit',
            backgroundColor: '#1A237E',
            data: [455, 607, 659, 431]
          },{
            label: 'Net Sales',
            backgroundColor: 'grey',
            data: [1567, 2169, 2079, 2568]
          }
        ]
      };
      this.setState({netProfitMarginData:netProfitMarginData, open:false});
    }
  }

  display(){

    let display;


    if (this.props.match.params.value == 'Net Profit Margin') {
      display = (
        <Grid style={{marginTop:'16.5%'}}>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={4}>
            <h3> Region </h3>
            <h3> Category </h3>
            <h3> Product </h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <h3><i>{this.state.selectedLocation}</i></h3>
            <h3><i>{this.state.selectedCategory}</i></h3>
            <h3><i>{this.state.selectedProduct}</i></h3>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image size='mini' style={{marginTop:'10px',marginLeft:'40px'}} src='../../images/settings.png' onClick={this.openFilter.bind(this)}/>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
        <Grid.Row style={{marginTop:'7px',background:'rgb(255,255,255,0.4)'}}>
          <Grid.Column width={1} />
            <Grid.Column width={14} >
              <Bar data={this.state.netProfitMarginData} height={300} options={this.state.netProfitMarginOptions} />
            </Grid.Column>
          <Grid.Column width={1} />
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
            <Bar data={this.state.payRecData} options={this.state.payRecOptions} width={500} height={500} />
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
            <Bar data={this.state.payRecData} options={this.state.payRecOptions} width={500} height={500} />
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

    return display;
  }

  render(){

    return(
      <div style={{overflow:'hidden'}}>
        {this.props.match.params.value == 'Net Profit Margin' ?
          <HeaderComponent content='Income Statement' linkto='/cfo'/> :
            <HeaderComponent content='Working Capital' linkto='/cfo'/>}
        {this.display()}
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
              <Grid.Row>
                <Grid.Column width={3}/>
                <Grid.Column width={10}>
                  <Dropdown placeholder="Select a Product" fluid selection options={productOptions} onChange={this.handleProduct.bind(this)} style={{background:'lightgrey'}}/>
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
      </div>
    );
  }
}
