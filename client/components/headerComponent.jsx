import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button,Checkbox } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import CardComponent from '../components/cardComponent.jsx';
class HeaderComponent extends React.Component {
  render() {
     return (
       <Segment stacked style={{backgroundColor:'#393B3C'}}>
         <Grid>
         <Grid.Row>
           {/* <Grid.Column width={1}/> */}
           <Grid.Column width={3} style={{textAlign:'center'}}>
             <Link to={this.props.linkto}>
             <Icon name='arrow left' inverted style={{color:'white'}}/>
             </Link>
           </Grid.Column>
           {/* <Grid.Column width={1}/> */}
           <Grid.Column width={13}>
             <span style={{letterSpacing:'1px',color:'white',fontFamily:'Comfortaa'}}>{this.props.content}</span>
           </Grid.Column>
         </Grid.Row>
         </Grid>
       </Segment>
     );
   }
 }
 export default HeaderComponent;
