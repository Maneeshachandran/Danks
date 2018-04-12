import React from 'react';
import { Grid, Header, Image, Segment, Button, Checkbox, Modal, Dimmer, Loader, Divider, List, Icon } from 'semantic-ui-react';
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
    request.get('/scrape')
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
      this.setState({open:false,open1:false,approved:false,selectedProducts:[]});
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
    console.log('prod  b4 -> ', productList);
    productList = productList.filter((item) => {
      return infoProduct.productName !== item.productName;
    });
    console.log('prod  aftr -> ', productList);

    this.setState({
      productsArray:productList,
      modalMsg:'Produkter er succesfuldt godkendt',
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
      this.setState({modalMsg:'Produkter er succesfuldt godkendt'});
    } else {
      this.setState({modalMsg:'Venligst vælg et produkt'});
    }

    this.setState({productsArray:filteredProducts,approved:true});
  }

  listSelectedItems(){
      var selectedItems;

      if (this.state.selectedProducts.length !== 0) {
        selectedItems = this.state.selectedProducts.map((item, i) => {
          return(
            <List.Item key={i}>
              <span>{item.productName}</span>
              &nbsp;
              <Icon color='green' name='checkmark' />
            </List.Item>
          );
        });
      } else {
        return(
          <List.Item>
            <span>{this.state.modalco.productName}</span>
            &nbsp;
            <Icon color='green' name='checkmark' />
          </List.Item>
        );
      }
      return selectedItems;
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
          <HeaderComponent content='Produkt Liste' linkto='/mainPage'/>
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
                         <p>Nuv. Pris</p>
                       </Grid.Column>
                       <Grid.Column width={5} style={{marginTop:'5px'}} >
                         {
                           (item.margin >= 0) ?
                           <Image src='../../images/caret-arrow-up.png'/> :
                             <Image src='../../images/caret-down.png'/>
                         }
                       </Grid.Column>
                       <Grid.Column width={6}>
                         <p>Ny Pris</p>
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
                  <Button style={{color:'#1A237E',width:'47%',marginLeft:'3.8%'}} onClick={this.viewProducts}>Se produkter</Button>
                  <Button style={{background:'#1A237E',color:'white',width:'47%'}} onClick={this.approve}>Godkend</Button>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column >
                <Modal open={this.state.open}>
                  <Modal.Header style={{color:'#1A237E'}}><center>Produkt Information</center></Modal.Header>
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
                               Produkt Navn
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
                               Ny Pris
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
                               Nuv. Pris
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
                               % Vækst i margin
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
                       <Button style={{border:'1px solid black',color:'#1A237E'}} onClick={this.closeModal.bind(this)}>Afbryd</Button>
                       <Button color='black' style={{background:'#1A237E',color:'white'}} onClick={this.approve1.bind(this)} >Godkend</Button>
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
               <Modal.Header style={{color:'#1A237E',fontSize:'22px'}}><center>Valgte produkter</center></Modal.Header>
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
                                <center><p>Nuv. Pris</p></center>
                              </Grid.Column>
                              <Grid.Column width={6} style={{marginTop:'5px'}} >
                                <center>
                                  {
                                    (item.margin >= 0) ?
                                    <Image src='../../images/caret-arrow-up.png'/> :
                                      <Image src='../../images/caret-down.png'/>
                                  }
                                </center>
                              </Grid.Column>
                              <Grid.Column width={5} >
                                <center><p>Ny Pris</p></center>
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
                                <Checkbox style={{textAlign:'center', borderColor:'#1A237E'}} onClick={this.handleChange.bind(this,i)} checked={item.checked} />
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
                 <center> <h3>Venligst vælg et produkt </h3></center>
                 </Modal.Description>
              }
               </Modal.Content>
               <Modal.Actions>
                 <Grid>
                   <Grid.Row>
                     <Grid.Column width={16}>
                       <Button.Group attached='bottom'>
                         <Button style={{border:'1px solid black',color:'#1A237E'}} onClick={this.closeModal.bind(this)}>Afbryd</Button>
                         <Button color='black' style={{background:'#1A237E',color:'white'}} onClick={this.approve} >Godkend</Button>
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
                <Modal.Content>
                  <center><h3 style={{color:'#1A237E'}}>{this.state.modalMsg}</h3></center>
                  <Divider />
                    <List>
                      <center>
                        {this.listSelectedItems()}
                      </center>
                    </List>
                  <Divider />
                </Modal.Content>
                <Modal.Actions>
                      <center><Button style={{background:'#1A237E',color:'white'}} onClick={this.closeModal.bind(this)}>Luk</Button></center>
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
