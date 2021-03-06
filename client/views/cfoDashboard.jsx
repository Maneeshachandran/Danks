import React from 'react';
import { Grid,Table,Divider,Segment,Image,Card,Statistic,Progress,Label,Button,Icon } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
//import {Pie} from 'react-chartjs-2';
import {Pie} from 'react-pathjs-chart';
import {HorizontalBar} from 'react-chartjs-2';

class cfoDashboard extends React.Component {
  constructor(){
    super();
    this.state={
      data:[{
        kpi:'Net Profit Margin',
        value:3,
        margin:'3%',
        arrow:true
      },
      {
        kpi:'Accounts Payable Turnover',
        value:1,
        margin:'4%',
        arrow:false
      },
      {
        kpi:'Accounts Receivable Turnover',
        value:5,
        margin:'1%',
        arrow:true
      },
      {
        kpi:'Current Ratio',
        value:4,
        margin:'2%',
        arrow:false
      },
      {
        kpi:'Working Captial',
        value:3.5,
        margin:'5%',
        arrow:true
      },
      {
        kpi:'Budget Variance',
        value:2.3,
        margin:'3%',
        arrow:false
      },
      {
        kpi:'Net Promoter Score',
        value:3,
        margin:'1%',
        arrow:true
      }]

    }
  }

  render(){
    const accPay_data = {
      labels: ['90', '60', '30'],
      datasets: [
        {
          backgroundColor: '#1A237E',
          data: [415, 449, 365]
        },
      ]
    };
    const addPay_legend = {
      "display": false
    };
    const addPay_options = {
      scales : {
        xAxes : [
          {
            scaleLabel: {
              display: true,
              labelString: 'MDKK'
            },
            fontSize: '18px',
            fontColor: '#1A237E'
          }
        ],
        yAxes : [
          {
            scaleLabel: {
              display: true,
              labelString: 'Days'
            },
            fontSize: '18px',
            fontColor: '#1A237E'
          }
        ]
      }
    };

    const accRec_data = {
      labels: ['90', '60', '30'],
      datasets: [
        {
          backgroundColor: '#1A237E',
          data: [138, 335, 458]
        }
      ]
    };

    const addRec_legend = {
      "display": false
    };

    return(
      <div style={{overflow:'hidden',marginTop:'16.5%'}}>
        <HeaderComponent content='CFO Report' linkto='/'/>
          <Grid>
             <Grid.Row style={{height:'300px'}}>
               <Grid.Column width={1} />
               <Grid.Column width={7} >
                 <Card raised style={{height: '95%'}}>
                   <Card.Content>
                     <Card.Header>
                       <center>
                         <span style={{color:'#1A237E', fontSize:'16.8px', textAlign: 'center'}}> Revenue vs Target </span>
                       </center>
                     </Card.Header>
                     <Divider />
                     <center>
                       <Statistic size='tiny'>
                        <Statistic.Value>57,899 <span style={{fontSize:'18px', textAlign: 'center'}}>MDKK</span> </Statistic.Value>
                        <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>YTD</Statistic.Label>
                      </Statistic>
                      <Divider />
                     </center>
                     <Progress value='75' total='100' progress='percent' color='green'>
                       <Label basic pointing color="black">
                         <span style={{fontColor: '#1A237E', fontSize:'16px'}}>Achieved</span>
                       </Label>
                      </Progress>
                      <br />
                   </Card.Content>
                 </Card>
               </Grid.Column>
               <Grid.Column width={7}>
                   <Card raised style={{height: '95%'}}>
                     <Card.Content>
                       <Card.Header>
                         <Link to='/incomeStatement/Net%20Profit%20Margin'>
                         <center>
                           <span style={{color:'#1A237E', fontSize:'16.8px', textAlign: 'center'}}> Net Profit Margin </span>
                         </center>
                       </Link>
                       </Card.Header>
                       <Divider />
                       <center>
                         <Statistic size='tiny'>
                          <Statistic.Value>4%</Statistic.Value>
                          <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>2017</Statistic.Label>
                        </Statistic>
                        <Divider />
                       </center>
                       <Card raised style={{height:'88px'}}>
                        <Card.Header>
                          <center>
                            <span style={{color:'#1A237E', fontSize:'14px', textAlign: 'center'}}> Variance </span>
                          </center>
                        </Card.Header>
                        <Card.Content>
                          <center>
                            <Statistic size='tiny'>
                              <Statistic.Value>
                                <Image src='./../images/chevron-down.png' style={{marginRight:'4px'}}/>
                                17%
                              </Statistic.Value>
                              <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>from 2016</Statistic.Label>
                            </Statistic>
                          </center>
                        </Card.Content>
                       </Card>
                        <br />
                     </Card.Content>
                   </Card>
               </Grid.Column>
               <Grid.Column width={1} />
             </Grid.Row>
             <Grid.Row style={{height:'300px'}}>
               <Grid.Column width={1} />
               <Grid.Column width={7} >
                   <Card raised style={{height: '95%'}}>
                     <Card.Content>
                       <Card.Header>
                         <Link to='/incomeStatement/Accounts%20Payable%20Turnover'>
                         <center>
                           <span style={{color:'#1A237E', fontSize:'16.8px', textAlign: 'center'}}> A/C Payable </span>
                         </center>
                       </Link>
                       </Card.Header>
                       <Divider />
                       <center>
                         <HorizontalBar data={accPay_data} legend={addPay_legend} options={addPay_options} width={100} height={120} />
                       </center>

                     </Card.Content>
                   </Card>
               </Grid.Column>
               <Grid.Column width={7}>
                   <Card raised style={{height: '95%'}}>
                     <Card.Content>
                       <Card.Header>
                         <Link to='/incomeStatement/Accounts%20Receivable%20Turnover'>
                         <center>
                           <span style={{color:'#1A237E', fontSize:'16.8px', textAlign: 'center'}}> A/C Receivable </span>
                         </center>
                       </Link>
                       </Card.Header>
                       <Divider />
                       <center>
                         <HorizontalBar data={accRec_data} legend={addRec_legend} options={addPay_options} width={100} height={120} />
                       </center>
                       <br />
                     </Card.Content>
                   </Card>
               </Grid.Column>
               <Grid.Column width={1} />
             </Grid.Row>
             <Grid.Row style={{height:'300px'}}>
               <Grid.Column width={1} />
               <Grid.Column width={7} >
                 <Card raised style={{height: '95%'}}>
                   <Card.Content>
                     <center></center>
                     <Card.Header>
                       <center>
                         <span style={{color:'#1A237E', fontSize:'16.8px', textAlign: 'center'}}> Current Ratio </span>
                       </center>
                     </Card.Header>
                     <Divider />
                     <br />
                     <center>
                       <Statistic size='tiny'>
                        <Statistic.Value>1.21</Statistic.Value>
                        <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>2017</Statistic.Label>
                      </Statistic>
                      <Divider />
                     </center>
                     <Card raised style={{height:'88px'}}>
                      <Card.Header>
                        <center>
                          <span style={{color:'#1A237E', fontSize:'14px', textAlign: 'center'}}> Variance </span>
                        </center>
                      </Card.Header>
                      <Card.Content>
                        <center>
                          <Statistic size='tiny'>
                            <Statistic.Value>
                              <Image src='./../images/chevron-up.png' style={{marginRight:'4px'}}/>
                              8%
                            </Statistic.Value>
                            <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>from 2016</Statistic.Label>
                          </Statistic>
                        </center>
                      </Card.Content>
                     </Card>
                      <br />
                   </Card.Content>
                 </Card>
               </Grid.Column>
               <Grid.Column width={7}>
                 <Card raised style={{height: '95%'}}>
                   <Card.Content>
                     <Card.Header>
                       <center>
                         <span style={{color:'#1A237E', fontSize:'16.8px', textAlign: 'center'}}> Net Promoter Score </span>
                       </center>
                     </Card.Header>
                     <Divider />
                     <center>
                       <Statistic size='tiny'>
                        <Statistic.Value>4</Statistic.Value>
                        <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>2017</Statistic.Label>
                      </Statistic>
                      <Divider />
                     </center>
                     <Card raised style={{height:'88px'}}>
                      <Card.Header>
                        <center>
                          <span style={{color:'#1A237E', fontSize:'14px', textAlign: 'center'}}> Variance </span>
                        </center>
                      </Card.Header>
                      <Card.Content>
                        <center>
                          <Statistic size='tiny'>
                            <Statistic.Value>
                              <Image src='./../images/chevron-up.png' style={{marginRight:'4px'}}/>
                              20%
                            </Statistic.Value>
                            <Statistic.Label style={{fontColor: '#1A237E', fontStyle: 'italic'}}>from 2016</Statistic.Label>
                          </Statistic>
                        </center>
                      </Card.Content>
                     </Card>
                      <br />
                   </Card.Content>
                 </Card>
               </Grid.Column>
               <Grid.Column width={1} />
             </Grid.Row>
           </Grid>
           <br />
      </div>
    );
  }
}

export default cfoDashboard;
