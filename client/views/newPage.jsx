import React from 'react';
import { Grid,Table,Divider,Segment,Image} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
//import {Pie} from 'react-chartjs-2';
import {Pie} from 'react-pathjs-chart';

export default class newPage extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }
  render(){
    console.log("this.props",this.props.match.params.value);
    return(
      <div>
        hi
      </div>
    );
  }
}
