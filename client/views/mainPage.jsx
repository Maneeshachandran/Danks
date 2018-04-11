import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button } from 'semantic-ui-react';
import HeaderComponent from '../components/headerComponent.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
const countryOptions = [ { key: 'Götaland', value: 'Götaland', text: 'Götaland' },
                          { key: 'Svealand', value: 'Svealand', text: 'Svealand' },
                          { key: 'Österland', value: 'Österland', text: 'Österland' },
                          { key: 'Norrland', value: 'Norrland', text: 'Norrland' }

                       ];
const productOptions = [
                        { key: 'Vegetables', value: 'Vegetables', text: 'Vegetables' },
                        { key: 'Fruits', value: 'Fruits', text: 'Fruits' },
                        { key: 'Oil', value: 'Oil', text: 'Oil' },
                        { key: 'Packed Items', value: 'Packed Items', text: 'Packed Items' }
                      ];

export default class MainPage extends React.Component {
   render() {
      return (
        <div style={{height: '100%', overflow:'hidden', overflowX:'hidden'}}>
          <HeaderComponent content='Dynamic Pricing' linkto='/'/>
          <Grid style={{marginTop:'18%'}}>
          <Grid.Row style={{marginTop:'5%'}}>
            <Grid.Column>
              <center>
              <Image src='../../images/pin.png' />
              </center>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10}>
              <Dropdown placeholder="Select a Location" fluid selection options={countryOptions} style={{background:'lightgrey'}}/>
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
          <Grid.Row style={{marginTop:'10%'}}>
            <Grid.Column>
              <center>
              <Image src='../../images/shopping-bag (1).png' />
              </center>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10}>
              <Dropdown placeholder="Select a Product" fluid selection options={productOptions} style={{background:'lightgrey',marginBottom:'5%'}}/>
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row textAlign='center' style={{marginTop:'4%'}}>
            <Grid.Column width={4}/>
            <Grid.Column width={8}>
              <Button fluid size='large' as={Link} to='/productsListPage' style={{backgroundColor:'#1A237E', color:'#EEEEEE'}}>Submit</Button>
            </Grid.Column>
            <Grid.Column width={4}/>
          </Grid.Row>
          </Grid>
        </div>
      );
   }
}
