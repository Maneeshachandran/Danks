import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button,Checkbox, Modal } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';
import request from 'superagent';


class ProductsPage extends React.Component {
  constructor(){
    super();
    this.state={
      modalco:{},
      selectedProducts:[],
      modalMsg:'',
      open:false,
      open1:false,
      productsArray:[],
      products:[{
            'image':'http://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG-Clipart.png',
            'name' :'Avocado',
            'cp':'€10',
            'np':'€8',
            'percent':'25%',
            'outDoor_price':'€5',
            'føtex_erhverv_price':'€7',
            'checked':false,
            'approved':false
          },{
        'image':'http://pngimg.com/uploads/pomegranate/pomegranate_PNG8653.png',
        'name' :'Pomegranate',
        'cp':'€7',
        'np':'€8',
        'percent':'30%',
        'outDoor_price':'€4' ,
        'føtex_erhverv_price':'€4',
        'checked':false,
        'approved':false
      },{
        'image':'http://www.pngmart.com/files/1/Mango-PNG.png',
        'name' :'Mango',
        'cp':'€4',
        'np':'€8',
        'percent':'10%',
        'outDoor_price':'€3',
        'føtex_erhverv_price':'€5',
        'checked':false,
        'approved':false
      },{
        'image':'http://www.freepngimg.com/download/apple/16-red-apple-png-image.png',
        'name' :'Apple',
        'cp':'€5',
        'np':'€8',
        'percent':'5%',
        'outDoor_price':'€5',
        'føtex_erhverv_price':'€6',
        'checked':false,
        'approved':false
      },{
            'image':'http://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png',
            'name' :'Banana',
            'cp':'€10',
            'np':'€8',
            'percent':'25%',
            'outDoor_price':'€5',
            'føtex_erhverv_price':'€7',
            'checked':false,
            'approved':false
          // },{
          //   'image':'https://imageresizer.static9.net.au/fIxyLYPgoCU50ODKB7ZZRV_JvUI=/1024x0/smart/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FImages%2FNL-Homes%2F2007%2F08%2F27%2F05%2F00%2FRLoranges.jpg'​​​​​​​​​​​​​,
          //   'name' :'Orange',
          //   'cp':'€5',
          //   'np':'€8',
          //   'percent':'5%',
          //   'outDoor_price':'€5',
          //   'føtex_erhverv_price':'€6',
          //   'checked':false,
          //   'approved':false
          // }]
        }]
    }
    this.viewProducts = this.viewProducts.bind(this);
    this.approve = this.approve.bind(this);
  }
  componentDidMount()
 {
   var context = this;
  request.get('http://localhost:3000/scrape')
   .end(function(err, res){
     if (err || !res.ok) {
           alert('Oh no! error');
         } else {
           var tempArray = [];
           tempArray = res.body.map((item,key)=>{
             item.checked = false;
              item.approved = false;
              return item
           })
           context.setState({productsArray:tempArray});
      }
 })
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

    this.setState({productsArray:productList,selectedProducts:selectedList,modalMsg:'Products have Approved Successfully',approved:true});
  }
  approve(){
    var { productsArray } = this.state;
    var len1 = productsArray.length;
    var filteredProducts = productsArray.filter((item)=>{
      return !item.checked;
    });
    var len2 = filteredProducts.length;
    if (len1>len2) {
      this.setState({modalMsg:'Products have Approved Successfully'});
    } else {
      this.setState({modalMsg:'Please select a product'});
    }

    this.setState({productsArray:filteredProducts,approved:true,selectedProducts:[]});
  }
  render() {

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
                    <Grid.Row style={{marginTop:'13%',color:'#a3104d',fontSize:'18px',fontWeight:'bold'}}>
                      <Grid.Column width ={16}>
                        <span>{item.productName}</span>
                       </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-13%'}}>
                      <Grid.Column width={5}>
                        <p>CP</p>
                      </Grid.Column>
                      <Grid.Column width={5} style={{marginTop:'5px'}} >
                        <Image src='../../images/caret-arrow-up.png'/>
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <p>NP</p>
                      </Grid.Column>
                      {/* <Grid.Column width={4} /> */}
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-17px',marginBottom:'7%'}}>
                      <Grid.Column width={5}>
                        <p>€{item.currentPrice}</p>
                      </Grid.Column>
                      <Grid.Column width={5}>
                        <p>{item.margin}%</p>
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <p>€{item.newPrice}</p>
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
             <Grid.Column width={16}>
                <Button.Group attached='bottom' style={{position:'fixed',zIndex:100,bottom:'0'}}>
               <Button  style={{background:'#a3104d',color:'white',width:'92%'}} onClick={this.viewProducts}>View Products</Button>
               <Button  color='white' style={{border:'1px solid black',color:'#a3104d',width:'92%'}} onClick={this.approve}>Approve</Button>
             </Button.Group>
             </Grid.Column>
           </Grid.Row>
         </Grid>
         <Grid>
           <Grid.Row>
             <Grid.Column >
               <Modal open={this.state.open} >
                 <Modal.Header style={{color:'#a3104d'}}><center>Product Information</center></Modal.Header>
                  {this.state.modalco.size !=0 ?
                    <span>
                    <Modal.Content scrolling >
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
                        <Grid.Row style={{fontSize:'18px',color:'#a3104d',marginTop:'-5%'}}>
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
                        <Grid.Row style={{fontSize:'18px',color:'#a3104d',marginTop:'-5%'}}>
                          <Grid.Column width={16} >
                            <center>
                              €{this.state.modalco.newPrice}
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
                        <Grid.Row style={{fontSize:'18px',color:'#a3104d',marginTop:'-5%'}}>
                          <Grid.Column width={16}>
                            <center>
                              €{this.state.modalco.currentPrice}
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
                        <Grid.Row style={{fontSize:'18px',color:'#a3104d',marginTop:'-5%'}}>
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
                        <Grid.Row style={{fontSize:'18px',color:'#a3104d',marginTop:'-5%'}}>
                          <Grid.Column width={16} >
                            <center>
                              €{this.state.modalco.outOftheDoor}
                          </center>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={16} >
                            <center>
                            <Segment style={{width:'50%',border:'1px solid #a3104d'}}>
                            <center>
                              føtex Erhverv's Price
                              <br />
                              <br />
                              <p style={{fontSize:'18px',color:'#a3104d',marginTop:'-3%'}}>€{this.state.modalco.productPrice}</p>
                          </center>
                          </Segment>
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
                      <Button color='black' style={{background:'#a3104d',color:'white'}} onClick={this.closeModal.bind(this)}>Cancel</Button>
                      <Button style={{border:'1px solid black',color:'#a3104d'}} onClick={this.approve1.bind(this)} >Approve</Button>
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
              <Modal.Header style={{color:'#a3104d',fontSize:'22px'}}><center>Selected Products</center></Modal.Header>
              <Modal.Content scrolling>
                {this.state.selectedProducts.length != 0 ?
                <Modal.Description>
                  {this.state.selectedProducts.map((item,i)=>{
                    return(
                      <Grid>
                      <Grid.Row style={{marginBottom:'-4%'}} key={i}>
                       <Grid.Column width={1}/>
                       <Grid.Column width={5} style={{background:'#a3104d'}}>
                         <Image style={{marginTop:'5%'}} size='tiny' src={item.image}/>
                       </Grid.Column>

                       <Grid.Column width={7} style={{background:'#a3104d'}} >
                         <Grid>
                           <Grid.Row style={{marginTop:'5%',marginBottom:'5%',color:'white',fontSize:'20px'}}>
                             <Grid.Column >
                               <span>{item.productName}</span>
                              </Grid.Column>
                           </Grid.Row>
                           <Grid.Row style={{marginTop:'-13%',color:'white',fontSize:'15px'}}>
                             <Grid.Column width={5}>
                               <center><p>CP</p></center>
                             </Grid.Column>
                             <Grid.Column width={6} style={{marginTop:'5px'}} >
                               <center><Image src='../../images/caret-arrow-up.png'/></center>
                             </Grid.Column>
                             <Grid.Column width={5} >
                               <center><p>NP</p></center>
                             </Grid.Column>
                           </Grid.Row>
                           <Grid.Row style={{marginTop:'-17px',marginBottom:'7%',color:'white',fontSize:'15px'}}>
                             <Grid.Column width={5} >
                               <center><p>€{item.currentPrice}</p></center>
                             </Grid.Column>
                             <Grid.Column width={6}>
                               <center><p>{item.margin}%</p></center>
                             </Grid.Column>
                             <Grid.Column width={5}>
                               <center><p>€{item.newPrice}</p></center>
                             </Grid.Column>
                           </Grid.Row>
                         </Grid>
                       </Grid.Column>
                       <Grid.Column width={2} style={{background:'#a3104d'}}>
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
                        <Button color='black' style={{background:'#a3104d',color:'white'}} onClick={this.closeModal.bind(this)}>Cancel</Button>
                        <Button style={{border:'1px solid black',color:'#a3104d'}} onClick={this.approve} >Approve</Button>
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
               <Modal.Content style={{background:'#a3104d',color:'white'}}>
                 <center><h3>{this.state.modalMsg}</h3></center>
               </Modal.Content>
               <Modal.Actions style={{background:'#a3104d'}}>
                     <center><Button style={{background:'white',color:'#a3104d'}} onClick={this.closeModal.bind(this)}>Close</Button></center>
                     <br/>
               </Modal.Actions>
             </Modal>
           </Grid.Row>
         </Grid>

    </div>

    );
  }
}
export default ProductsPage;
