import React from 'react';
import { Grid,Header,Card,Image } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
class App extends React.Component {
   render() {
      return (
        <div style={{backgroundColor:'#2e2f30',height: '100vh',overflow:'hidden',overflowX:'hidden'}}>
           <Grid >
             <Grid.Row style={{marginTop:'25%'}}>
               <Grid.Column style={{textAlign:'center'}}>
                <span style={{fontSize:'25px',color:'white',letterSpacing:'2px',fontFamily:'Comfortaa'}}>Dansk Supermarked</span>
               </Grid.Column>
             </Grid.Row>
             <Grid.Row textAlign='center' style={{marginTop:'-22px'}}>
               <Grid.Column>
                 <span style={{fontSize:'25px',color:'white',letterSpacing:'1px',fontFamily:'Comfortaa'}}>Group</span>
               </Grid.Column>
             </Grid.Row>
             <Grid.Row style={{marginTop:'10%'}}>
               <Grid.Column width={1}/>
               <Grid.Column width={6}>
                 <Grid as={Link} to='/mainPage'>
                   <Grid.Row>
                     <Grid.Column>
                  <Image src='../../images/discount.png' />
                  </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'-10px'}}>
                    <Grid.Column style={{textAlign:'center'}}>
                       <span style={{color:'white',letterSpacing:'1px',fontFamily:'Comfortaa',fontSize:'14px'}}>Dynamic Pricing</span>
                    </Grid.Column>
                  </Grid.Row>
                  </Grid>
              </Grid.Column>
              <Grid.Column width={2}/>
              <Grid.Column width={6} style={{textAlign:'right'}}>
                   <Grid>
                     <Grid.Row>
                       <Grid.Column>
                    <Image src='../../images/line-chart.png' />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-10px'}}>
                      <Grid.Column style={{textAlign:'center'}}>
                         <span style={{color:'white',letterSpacing:'1px',fontFamily:'Comfortaa',fontSize:'14px'}}>CPF Report</span>
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
