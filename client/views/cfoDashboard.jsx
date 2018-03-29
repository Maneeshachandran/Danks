import React from 'react';
import { Grid,Table,Divider,Segment,Image} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
//import {Pie} from 'react-chartjs-2';
import {Pie} from 'react-pathjs-chart';

class cfoDashboard extends React.Component {
  constructor(){
    super();
    this.state={
      data:[{
        kpi:'Net profit Margin',
        value:3,
        margin:'3%',
        arrow:true
      },
      {
        kpi:'Account payable turnover',
        value:1,
        margin:'4%',
        arrow:false
      },
      {
        kpi:'Account receivable turnover',
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
//     const data = {
// 	labels: [
// 		'Red',
// 		'Green'
// 	],
// 	datasets: [{
// 		data: [650000,150000],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB'
// 		]
// 	}]
// };

const data = [
  {
    "name": "Achieved ",
    "population": 8630364
  },
  {
    "name": "Yet to",
    "population": 1916658
  }
]


  const options= {
            margin: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            },
            width: 100,
            height: 100,
            color: '#42D655',
            r: 15,
            R: 45,
            legendPosition: 'topLeft',
            animate:{
                type:'oneByOne',
                duration:200,
                fillTransition:3
            },
            label:{
                fontFamily:'Arial',
                fontSize:10,
                fontWeight:true,
                color:'#ECF0F1'
            }
        };

    return(
      <div style={{overflow:'hidden',marginTop:'16.5%'}}>
        <HeaderComponent content='CFO Report' linkto='/'/>
          <Grid>
             <Grid.Row style={{background:'rgb(163,16,77,0.5)'}}>
               <Grid.Column width={1} />
               <Grid.Column width={7}>
                 <h3 style={{color:'white',marginTop:'45px',fontSize:'19px'}}>Annual Revenue</h3>
               </Grid.Column>
               <Grid.Column width={7} style={{marginLeft:'5.2%'}}>
                 <Pie data={data} options={options} accessorKey="population"  />
               </Grid.Column>
               <Grid.Column width={1} />
             </Grid.Row>
           </Grid>
           <Grid>
             <Grid.Row>
               <Grid.Column width={1} />
               <Grid.Column width={14}>
                 <Grid style={{background:'rgb(255,255,255,0.5)',marginBottom:'15px'}}>
                   <Grid.Row style={{marginTop:'-2%',color:'#a3104d'}}>
                     <Grid.Column width={8}>
                        <h4><strong>KYI</strong></h4>
                     </Grid.Column>
                     <Grid.Column width={3}>
                        <h4><strong>Value</strong></h4>
                      </Grid.Column>
                      <Grid.Column width={5} style={{paddingLeft:'50px'}}>
                        <h4><strong>%</strong></h4>
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
               </Grid.Column>
               <Grid.Column width={1} />
             </Grid.Row>
           </Grid>
           <Grid>
             <Grid.Row>
               <Grid.Column width={1} />
               <Grid.Column width={14}>

                 {
                   this.state.data.map((item,key)=>{
                      return(
                         <Grid style={{marginTop:'-30px'}}>
                        <Grid.Row style={{background:'rgb(255,255,255,0.4)'}} as={Link} to={`/newPage/${item.kpi}`}>
                           <Grid.Column width={8}>
                            {item.kpi}
                          </Grid.Column>
                          <Grid.Column width={3} style={{textAlign:'center'}}>
                              {item.value}
                          </Grid.Column>
                          <Grid.Column width={2} style={{textAlign:'center'}}>
                           {item.arrow ?
                               <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-up.png'/>
                              :
                              <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-down.png'/>
                           }
                          </Grid.Column>
                          <Grid.Column width={3} style={{paddingRight:'5%'}}>
                               {item.margin}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                         <Grid.Column>
                           <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
                         </Grid.Column>
                       </Grid.Row>
                        </Grid>
                  )
                  })
                 }

               </Grid.Column>
               <Grid.Column width={1} />
             </Grid.Row>
          </Grid>
      </div>
      // <div style={{overflow:'hidden',marginTop:'16.5%'}}>
      //   <HeaderComponent content='CFO Report' linkto='/'/>
      //   <Grid>
      //     <Grid.Row>
      //      <Pie data={data} />
      //    </Grid.Row>
      //   </Grid>
      //   <Grid>
      //     <Grid.Row style={{background:'rgb(163,16,77,0.5)'}}>
      //       <Grid.Column width={1} />
      //       <Grid.Column width={7}>
      //         <h2 style={{color:'white'}}>Annual Revenue</h2>
      //       </Grid.Column>
      //       <Grid.Column width={7}>
      //
      //       </Grid.Column>
      //       <Grid.Column width={1} />
      //     </Grid.Row>
      //     {/* <Grid.Row style={{background:'rgb(255,255,255,0.5)'}}/> */}
      //     {/* <Grid.Row style={{background:'linear-gradient(to right, #ED8D97 , #E7E0E1)'}}>
      //       <Grid.Column width={1} />
      //       <Grid.Column width ={14} >
      //           <Segment style={{marginTop:'-4%'}}> hi</Segment>
      //       </Grid.Column>
      //       <Grid.Column width={1} />
      //     </Grid.Row> */}
      //    <Grid.Row style={{background:'rgb(255,255,255,0.5)'}}>
      //     <Grid.Column width={1} />
      //     <Grid.Column width={14}>
      //       <Grid>
      //         <Grid.Row style={{marginTop:'-2%',color:'rgb(163,16,77)'}}>
      //           <Grid.Column width={8}>
      //             <h4><strong>KYI</strong></h4>
      //           </Grid.Column>
      //           <Grid.Column width={3}>
      //             <h4><strong>value</strong></h4>
      //           </Grid.Column>
      //           <Grid.Column width={5} style={{paddingLeft:'-2px'}}>
      //             <h4><strong>% Change</strong></h4>
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row style={{marginTop:'-8%'}}>
      //           <Grid.Column width={8}>
      //             Net Profit Margin
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{textAlign:'center'}}>
      //             3.33
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-up.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             2%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row >
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row as={Link} to='/payableTrunover' style={{marginTop:'-8%'}}>
      //           <Grid.Column width={8}>
      //             A/C payable Turnover
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{textAlign:'center'}} >
      //             4
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-down.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             4%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row style={{marginTop:'-8%'}}>
      //           <Grid.Column width={9}>
      //             A/C Receivable Turnover
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{paddingLeft:'1px'}}>
      //             2.22
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-up.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             5%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row style={{marginTop:'-8%'}}>
      //           <Grid.Column width={8}>
      //             Current Ratio
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{textAlign:'center'}}>
      //             6
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-down.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             2%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row >
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row style={{marginTop:'-8%'}}>
      //           <Grid.Column width={8}>
      //             Working Capital
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{textAlign:'center'}}>
      //             4.4
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-up.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             3%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row style={{marginTop:'-8%'}}>
      //           <Grid.Column width={8}>
      //             Budget Variance
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{textAlign:'center'}}>
      //             5
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-up.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             3%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row style={{marginTop:'-8%'}}>
      //           <Grid.Column width={8}>
      //             Net Promotor Score
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{textAlign:'center'}}>
      //             1.3
      //           </Grid.Column>
      //           <Grid.Column width={2} style={{textAlign:'center'}}>
      //             <Image style={{marginTop:'3px',marginLeft:'20px'}} src='../../images/chevron-down.png'/>
      //           </Grid.Column>
      //           <Grid.Column width={3} style={{paddingRight:'5%'}}>
      //             7%
      //           </Grid.Column>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Grid.Column>
      //               <Divider style={{marginTop:'-4%',background:'black',borderBottomWidth:'0px'}} />
      //           </Grid.Column>
      //         </Grid.Row>
      //       </Grid>
      //     </Grid.Column>
      //     <Grid.Column width={1}/>
      // </Grid.Row>
      // </Grid>
      // </div>
    );
  }
}

export default cfoDashboard;
