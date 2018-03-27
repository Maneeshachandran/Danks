import React from 'react';
import { Grid,Tab,Divider} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
import NetProfit from '../components/netProfit.jsx';

const panes = [
  { menuItem: 'Net Profit', render: () => <Tab.Pane attached={false}><NetProfit /></Tab.Pane> },
  { menuItem: 'Net Sales', render: () => <Tab.Pane attached={false}>LoanForm /></Tab.Pane> },
  { menuItem: 'Profit Margin', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> }
]

class payableTrunover extends React.Component {
  constructor(){
    super();
    this.state={
      color:'red'
    }
  }

  render(){
    const { color } = this.state;
    return(
      <div style={{marginTop:'22%'}}>
        <HeaderComponent content='Income Statement' linkto='/cfo' />
        <Grid>
          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={14} >
              <Tab
                menu={{ color, attached: false, tabular: false }}
                panes={panes}
              />
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      </div>
      );
    }
  }

export default payableTrunover;
