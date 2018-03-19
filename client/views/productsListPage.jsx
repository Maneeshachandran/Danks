import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button,Checkbox } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import CardComponent from '../components/cardComponent.jsx';
import HeaderComponent from '../components/headerComponent.jsx';
class MainPage extends React.Component {
  render() {
     return (
       <div style={{backgroundColor:'#2e2f30',height: '100vh',overflow:'hidden'}}>
         <HeaderComponent content='Products List' linkto='/mainPage'/>
         <Grid>
           <CardComponent image='http://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG-Clipart.png' name='Avacado' cp='10' np='8' percent='25%' np='€8' cp='€10' door='€5' margin='0%' newprice='75%'/>
           <CardComponent style={{marginTop:'-5%'}} image='http://pngimg.com/uploads/pomegranate/pomegranate_PNG8653.png' name='Pomegranate' percent='30%' np='€8' cp='€7' door='€4' margin='-4%' newprice='45%'/>
           <CardComponent image='http://www.pngmart.com/files/1/Mango-PNG.png' name='Mangoes' percent='10%' np='€8' cp='€4' door='€3' margin='-4%' newprice='55%'/>
           <CardComponent image='http://www.freepngimg.com/download/apple/16-red-apple-png-image.png' name='Apple' percent='5%' np='€8' cp='€5' door='€5' margin='-4%' newprice='65%'/>
       </Grid>
      </div>
    );
  }
}
export default MainPage;
