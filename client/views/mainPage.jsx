import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button } from 'semantic-ui-react';
import HeaderComponent from '../components/headerComponent.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
const countryOptions = [ { key: 'Sollentuna', value: 'Sollentuna', text: 'Sollentuna' },
                          { key: 'Hägersten', value: 'Hägersten', text: 'Hägersten' },
                          { key: 'Skärholmen', value: 'Skärholmen', text: 'Skärholmen' }
                       ]
const productsOptions = [ { key: 'Vegetables', value: 'Vegetables', text: 'Vegetables' },
                         { key: 'Fruits', value: 'Fruits', text: 'Fruits' },
                         { key: 'Oil', value: 'Oil', text: 'Oil' },
                         { key: 'Packaged Items', value: 'Packaged Items', text: 'Packaged Items' }
                       ]

class MainPage extends React.Component {

   render() {
      return (
        <div style={{backgroundColor:'#2e2f30',height: '100vh',overflow:'hidden'}}>
          <HeaderComponent content='Dynamic Pricing' linkto='/'/>
          <Grid>
          <Grid.Row style={{marginTop:'5%'}}>
            <Grid.Column>
              <center>
              <Image src='../../images/placeholder.png' />
              </center>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row style={{marginTop:'-23px'}}>
            <Grid.Column>
              <center>
              <span style={{letterSpacing:'1px',color:'white',fontFamily:'Comfortaa'}}>Select Location</span>
            </center>
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10}>
              <Dropdown className='drop1' placeholder="Select a Location" fluid selection options={countryOptions} />
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
          <Grid.Row style={{marginTop:'10%'}}>
            <Grid.Column>
              <center>
              <Image src='../../images/shoppingbag.png' />
              </center>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row style={{marginTop:'0px'}}>
            <Grid.Column>
              <center>
              <span style={{letterSpacing:'1px',color:'white',fontFamily:'Comfortaa'}}>Select Products</span>
            </center>
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10}>
              <Dropdown className='drop1' placeholder="Select a Product" fluid selection options={productsOptions} />
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
          <Grid.Row textAlign='center' style={{marginTop:'4%'}}>
            <Grid.Column width={4}/>
            <Grid.Column width={8}>
              <Button inverted fluid size='huge' as={Link} to='/productsListPage' color='white'>Submit</Button>
            </Grid.Column>
            <Grid.Column width={4}/>
          </Grid.Row>
          </Grid>
        </div>
      );
   }
}
export default MainPage;
