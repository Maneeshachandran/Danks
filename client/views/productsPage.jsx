import React from 'react';
import { Grid, Header, Image, Segment, Button, Checkbox, Modal, Dimmer, Loader, Divider } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
import request from 'superagent';


class ProductsPage extends React.Component {
  constructor(){
    super();
    this.state = {
      modalco:{},
      selectedProducts:[],
      modalMsg:'',
      open:false,
      open1:false,
      productsArray:[]
    }
    this.viewProducts = this.viewProducts.bind(this);
    this.approve = this.approve.bind(this);
  }
  componentDidMount() {
    request.get('http://localhost:3030/scrape')
           .end((err, res) => {
             if (err || !res.ok) {
                 alert('Oh no! error');
                 console.log('err from scrope route - > ', err);
               } else {
                 console.log('res - > ', res.body);
                 var tempArray = [];
                 tempArray = res.body.map((item,key)=>{
                   item.checked = false;
                    item.approved = false;
                    return item;
                 });
                 this.setState({productsArray:tempArray});
            }
         });
  }
  openModal(i){
    this.setState({modalco:this.state.productsArray[i],open:true});
  }
  openModal1(i){
    this.setState({modalco:this.state.selectedProducts[i],open:true});
  }
  closeModal(){
    this.setState({open:false,open1:false,approved:false});
  }
  handleChange(index,e,value){
    var context= this;
    var temp= this.state.productsArray;
    var selectedProducts=this.state.selectedProducts;
    temp.map((item,i)=>{
      if(i==index){
        if(value.checked==true){
          item.checked=true;
          selectedProducts.push(item);
        }
        else{
          item.checked=false;
          temp.map((item1,i1)=>{
            if(item1.name==this.state.productsArray[index].name){
              selectedProducts.splice(index,1);
            }
          })
        }
      }
    })
    this.setState({productsArray:temp,selectedProducts:selectedProducts});
  }
  viewProducts(){
    this.setState({open1:true});
  }
  approve1(){
    var infoProduct = this.state.modalco;
    var productList = this.state.productsArray;
    var selectedList = this.state.selectedProducts;
    productList.map((item)=>{
      if(infoProduct.name == item.name){
        const index = productList.indexOf(item);
          productList.splice(index, 1);
      }
    })
    selectedList.map((item)=>{
      if(infoProduct.name == item.name){
        const index = selectedList.indexOf(item);
          selectedList.splice(index, 1);
      }
    })

    this.setState({
      productsArray:productList,
      selectedProducts:selectedList,
      modalMsg:'Products have been Approved Successfully',
      approved:true
    });
  }
  approve(){
    var { productsArray } = this.state;
    var len1 = productsArray.length;
    var filteredProducts = productsArray.filter((item)=>{
      return !item.checked;
    });
    var len2 = filteredProducts.length;
    if (len1>len2) {
      this.setState({modalMsg:'Products have been Approved Successfully'});
    } else {
      this.setState({modalMsg:'Please select a product'});
    }

    this.setState({productsArray:filteredProducts,approved:true,selectedProducts:[]});
  }
  render() {
    if (this.state.productsArray.length === 0) {
      return(
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      );
    } else {
      return (
        <div style={{overflow:'hidden',marginTop:'12%'}}>
          <HeaderComponent content='Products List' linkto='/mainPage'/>
          <Grid>
          <Grid.Row/>
            {this.state.productsArray.map((item,i)=>{
              return(
                <Grid.Row style={{marginBottom:'-4%'}} key={i}>
                 <Grid.Column width={1}/>
                 <Grid.Column width={4} style={{background:'rgba(255,255,255,0.9)'}}>
                   <Image style={{marginTop:'26%',marginBottom:'5%'}} src={item.url}/>
                 </Grid.Column>
                 <Grid.Column width={7} style={{background:'rgba(255,255,255,0.9)'}} >
                   <Grid>
                     <Grid.Row style={{marginTop:'13%',color:'#1A237E',fontSize:'18px',fontWeight:'bold'}}>
                       <Grid.Column width ={16}>
                         <span>{item.productName}</span>
                        </Grid.Column>
                     </Grid.Row>
                     <Grid.Row style={{marginTop:'-13%'}}>
                       <Grid.Column width={5}>
                         <p>Current Price</p>
                       </Grid.Column>
                       <Grid.Column width={5} style={{marginTop:'5px'}} >
                         {
                           (item.currentPrice < item.newPrice) ?
                           <Image src='../../images/caret-arrow-up.png'/> :
                             <Image src='../../images/caret-down.png'/>
                         }
                       </Grid.Column>
                       <Grid.Column width={6}>
                         <p>New Price</p>
                       </Grid.Column>
                       {/* <Grid.Column width={4} /> */}
                     </Grid.Row>
                     <Grid.Row style={{marginTop:'-17px',marginBottom:'7%'}}>
                       <Grid.Column width={5}>
                         <p>DKK &nbsp; {item.currentPrice}</p>
                       </Grid.Column>
                       <Grid.Column width={5}>
                         <p>{item.margin}%</p>
                       </Grid.Column>
                       <Grid.Column width={6}>
                         <p>DKK &nbsp; {item.newPrice}</p>
                       </Grid.Column>
                       {/* <Grid.Column width={4} /> */}
                     </Grid.Row>
                   </Grid>
                 </Grid.Column>
                 <Grid.Column width={3} style={{background:'rgba(255,255,255,0.9)'}}>
                   <Grid>
                     <Grid.Row style={{marginTop:'27%'}}>
                       <Grid.Column style={{marginLeft:'20%'}}>
                         <Image src='../../images/info.png' onClick={this.openModal.bind(this,i)}/>
                       </Grid.Column>
                     </Grid.Row>
                     <Grid.Row style={{marginTop:'-13%'}}/>
                     <Grid.Row style={{marginTop:'-17px'}}>
                       <Grid.Column width={12}/>
                       <Grid.Column width={3} style={{marginLeft:'22%'}}>
                           <Checkbox style={{textAlign:'center'}} onChange={this.handleChange.bind(this,i)} checked={item.checked} />
                       </Grid.Column>
                     </Grid.Row>
                   </Grid>
                 </Grid.Column>
                 <Grid.Column width={1} />
               </Grid.Row>
              )
            })}
          </Grid>

          <Grid>
            <Grid.Row >

              <Grid.Column width={16} >
                <Segment style={{position:'fixed',bottom:'0px',width:'100%'}}>
                  <Button style={{background:'#1A237E',color:'white',width:'47%'}} onClick={this.viewProducts}>View Products</Button>
                  <Button style={{color:'#1A237E',width:'47%',marginLeft:'3.8%'}} onClick={this.approve}>Approve</Button>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column >
                <Modal open={this.state.open}>
                  <Modal.Header style={{color:'#1A237E'}}><center>Product Information</center></Modal.Header>
                   {this.state.modalco.size !=0 ?
                     <span>
                     <Modal.Content scrolling style={{overflowX:'hidden'}}>
                     <Modal.Description>
                       <Grid>
                         <Grid.Row>
                           <Grid.Column >
                           <center><Image size='small' style={{position:'absolute',marginLeft:'30%'}}
                              src={this.state.modalco.url}/></center>
                            </Grid.Column>
                          </Grid.Row>
                         <Grid.Row style={{marginTop:'35%'}}>
                           <Grid.Column width={16}>
                             <center>
                               Product Name
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row style={{fontSize:'18px',color:'#1A237E',marginTop:'-5%'}}>
                           <Grid.Column width={16}>
                             <center>
                               {this.state.modalco.productName}
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row>
                           <Grid.Column width={16}>
                             <center>
                               New Price
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row style={{fontSize:'18px',color:'#1A237E',marginTop:'-5%'}}>
                           <Grid.Column width={16} >
                             <center>
                               DKK &nbsp; {this.state.modalco.newPrice}
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row>
                           <Grid.Column width={16}>
                             <center>
                               Current Price
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row style={{fontSize:'18px',color:'#1A237E',marginTop:'-5%'}}>
                           <Grid.Column width={16}>
                             <center>
                               DKK &nbsp; {this.state.modalco.currentPrice}
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row>
                           <Grid.Column width={16}>
                             <center>
                               % Gain in Margin
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row style={{fontSize:'18px',color:'#1A237E',marginTop:'-5%'}}>
                           <Grid.Column width={16} >
                             <center>
                               {this.state.modalco.margin}%
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row>
                           <Grid.Column width={16}>
                             <center>
                               Out of the Door price
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                         <Grid.Row style={{fontSize:'18px',color:'#1A237E',marginTop:'-5%'}}>
                           <Grid.Column width={16} >
                             <center>
                               DKK &nbsp; {this.state.modalco.outOftheDoor}
                           </center>
                         </Grid.Column>
                         </Grid.Row>
                       </Grid>
               </Modal.Description>
             </Modal.Content>
             <Modal.Actions >
               <Grid style={{overflow:'hidden'}}>
                 <Grid.Row>
                   <Grid.Column >
                     <Button.Group attached='bottom'>
                       <Button color='black' style={{background:'#1A237E',color:'white'}} onClick={this.closeModal.bind(this)}>Cancel</Button>
                       <Button style={{border:'1px solid black',color:'#1A237E'}} onClick={this.approve1.bind(this)} >Approve</Button>
                     </Button.Group>
                   </Grid.Column>
             </Grid.Row>
           </Grid>
             </Modal.Actions>
           </span> :
               null }
             </Modal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
              <Modal open={this.state.open1}>
               <Modal.Header style={{color:'#1A237E',fontSize:'22px'}}><center>Selected Products</center></Modal.Header>
               <Modal.Content scrolling>
                 {this.state.selectedProducts.length != 0 ?
                 <Modal.Description>
                   {this.state.selectedProducts.map((item,i)=>{
                     return(
                       <Grid key={i}>
                       <Grid.Row style={{marginBottom:'-4%'}} key={i}>
                        <Grid.Column width={1}/>
                        <Grid.Column width={5} style={{background:'#EEEEEE'}}>
                          <Image style={{marginTop:'5%'}} size='tiny' src={item.url}/>
                        </Grid.Column>
                        <Grid.Column width={7} style={{background:'#EEEEEE'}} >
                          <Grid>
                            <Grid.Row style={{marginTop:'5%',marginBottom:'5%',fontSize:'20px'}}>
                              <Grid.Column >
                                <span>{item.productName}</span>
                               </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{marginTop:'-13%',fontSize:'15px'}}>
                              <Grid.Column width={5}>
                                <center><p>Current Price</p></center>
                              </Grid.Column>
                              <Grid.Column width={6} style={{marginTop:'5px'}} >
                                <center>
                                  {
                                    (item.currentPrice < item.newPrice) ?
                                    <Image src='../../images/caret-arrow-up.png'/> :
                                      <Image src='../../images/caret-down.png'/>
                                  }
                                </center>
                              </Grid.Column>
                              <Grid.Column width={5} >
                                <center><p>New Price</p></center>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{marginTop:'-17px',marginBottom:'7%',fontSize:'15px'}}>
                              <Grid.Column width={5} >
                                <center><p>DKK &nbsp; {item.currentPrice}</p></center>
                              </Grid.Column>
                              <Grid.Column width={6}>
                                <center><p>{item.margin}%</p></center>
                              </Grid.Column>
                              <Grid.Column width={5}>
                                <center><p>DKK &nbsp; {item.newPrice}</p></center>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column width={2} style={{background:'#EEEEEE'}}>
                          <Grid>
                            <Grid.Row style={{marginTop:'27%'}}>
                              <Grid.Column style={{paddingLeft:'9px'}}>
                                <Image src='../../images/info.png' onClick={this.openModal1.bind(this,i)} />
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{marginTop:'-13%'}}/>
                            <Grid.Row style={{marginTop:'-17px'}}>
                              <Grid.Column width={12}/>
                              <Grid.Column width={3}>
                                <Checkbox style={{textAlign:'center'}} onClick={this.handleChange.bind(this,i)} checked={item.checked} />
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                         <Grid.Column width={1} />
                      </Grid.Row>
                    </Grid>
                      )
                    })
                  }
                </Modal.Description> :
                <Modal.Description >
                 <center> <h3>Please select a product </h3></center>
                 </Modal.Description>
              }
               </Modal.Content>
               <Modal.Actions>
                 <Grid>
                   <Grid.Row>
                     <Grid.Column width={16}>
                       <Button.Group attached='bottom'>
                         <Button color='black' style={{background:'#1A237E',color:'white'}} onClick={this.closeModal.bind(this)}>Cancel</Button>
                         <Button style={{border:'1px solid black',color:'#1A237E'}} onClick={this.approve} >Approve</Button>
                       </Button.Group>
                     </Grid.Column>
               </Grid.Row>
             </Grid>
               </Modal.Actions>
               </Modal>
            </Grid.Row>
          </Grid>
          <Grid >
            <Grid.Row>
              <Modal open={this.state.approved} >
                <Modal.Content style={{background:'#1A237E',color:'white'}}>
                  <center><h3>{this.state.modalMsg}</h3></center>
                  <Divider />
                  <br />
                  <Grid>
                    <Grid.Row>
                  {
                    this.state.selectedProducts.map((item, i) => {
                      return(
                            <Grid.Column key={i}>
                              <Segment style={{background:'#EEEEEE'}}>item.productName</Segment>
                            </Grid.Column>
                      )
                    })
                  }
                  </Grid.Row>
                </Grid>
                </Modal.Content>
                <Modal.Actions style={{background:'#1A237E'}}>
                      <center><Button style={{background:'white',color:'#1A237E'}} onClick={this.closeModal.bind(this)}>Close</Button></center>
                      <br/>
                </Modal.Actions>
              </Modal>
            </Grid.Row>
          </Grid>

     </div>

     );
    }
  }
}
export default ProductsPage;
