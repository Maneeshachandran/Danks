import React from 'react';
import { Grid,Header,Card,Image } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
class App extends React.Component {
   render() {
      return (
        <div style={{height: '100vh',overflow:'hidden',overflowX:'hidden'}}>
           <Grid>
             <Grid.Row style={{marginTop:'15%',background:'rgba(26, 35, 126,0.6)',paddingLeft:'5%'}}>
               <Grid.Column>
                 <Image src='../../images/logo.png' />
               </Grid.Column>
             </Grid.Row>
             <Grid.Row style={{marginTop:'30%'}}>
               <Grid.Column width={1}/>
               <Grid.Column width={6}>
                 <Grid as={Link} to='/mainPage'>
                   <Grid.Row>
                     <Grid.Column>
                  <Image src='../../images/tag.png' />
                  </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'-10px'}}>
                    <Grid.Column style={{textAlign:'center'}}>
                       <span style={{color:'#1A237E',fontSize:'19px'}}>Dynamic Pricing</span>
                    </Grid.Column>
                  </Grid.Row>
                  </Grid>
              </Grid.Column>
              <Grid.Column width={2}/>
              <Grid.Column width={6} style={{textAlign:'right'}}>
                   <Grid as={Link} to='/cfo'>
                     <Grid.Row>
                       <Grid.Column>
                    <Image src='../../images/growth.png' />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-10px'}}>
                      <Grid.Column style={{textAlign:'center'}}>
                         <span style={{color:'#1A237E',fontSize:'19px'}}>CFO Report</span>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>
              </Grid.Column>
              {/* <Grid.Column width={1}/> */}
              </Grid.Row>
           </Grid>
         </div>
      );
   }
}
export default App;
