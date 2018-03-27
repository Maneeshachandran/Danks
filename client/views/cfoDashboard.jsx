import React from 'react';
import { Grid,Table,Divider,Segment,Image} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';


class cfoDashboard extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }

  render(){
    return(
      <div style={{marginTop:'22%'}}>
        <HeaderComponent content='CFO Report' linkto='/'/>
        <Grid>
          <Grid.Row style={{background:'rgb(163,16,77,0.5)',marginTop:'-2%'}}>
            <Grid.Column width={1} />
            <Grid.Column width={14}>
              <h2 style={{color:'white'}}>Annual Revenue</h2>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
          {/* <Grid.Row style={{background:'rgb(255,255,255,0.5)'}}/> */}
          {/* <Grid.Row style={{background:'linear-gradient(to right, #ED8D97 , #E7E0E1)'}}>
            <Grid.Column width={1} />
            <Grid.Column width ={14} >
                <Segment style={{marginTop:'-4%'}}> hi</Segment>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row> */}
         <Grid.Row style={{background:'rgb(255,255,255,0.5)'}}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Grid>
              <Grid.Row style={{marginTop:'-2%',color:'rgb(163,16,77)'}}>
                <Grid.Column width={8}>
                  <h4><strong>KYI</strong></h4>
                </Grid.Column>
                <Grid.Column width={3}>
                  <h4><strong>value</strong></h4>
                </Grid.Column>
                <Grid.Column width={5}>
                  <h4><strong>% Change</strong></h4>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  Net Profit Margin
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}}>
                  3.33
                </Grid.Column>
                <Grid.Column width={2} style={{textAlign:'center',paddingLeft:'5%'}}>
                  <Image src='../../images/chevron-up.png'/>
                </Grid.Column>
                <Grid.Column width={3} style={{paddingRight:'5%'}}>
                  2%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row as={Link} to='/payableTrunover' style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  A/C payable Turnover
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}} >
                  4
                </Grid.Column>
                <Grid.Column width={5} style={{textAlign:'center'}}>
                  4%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  A/C Receivable Turnover
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}}>
                  2.22
                </Grid.Column>
                <Grid.Column width={5} style={{textAlign:'center'}}>
                  5%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  Current Ratio
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}}>
                  6
                </Grid.Column>
                <Grid.Column width={5} style={{textAlign:'center'}}>
                  2%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  Working Capital
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}}>
                  4.4
                </Grid.Column>
                <Grid.Column width={5} style={{textAlign:'center'}}>
                  3%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  Budget Variance
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}}>
                  5
                </Grid.Column>
                <Grid.Column width={5} style={{textAlign:'center'}}>
                  3%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-8%'}}>
                <Grid.Column width={8}>
                  Net Promotor Score
                </Grid.Column>
                <Grid.Column width={3} style={{textAlign:'center'}}>
                  1.3
                </Grid.Column>
                <Grid.Column width={5} style={{textAlign:'center'}}>
                  7%
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                    <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={1}/>
      </Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default cfoDashboard;
