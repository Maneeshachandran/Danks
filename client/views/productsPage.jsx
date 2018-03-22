import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button,Checkbox, Modal } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from '../components/headerComponent.jsx';

class ProductsPage extends React.Component {
  constructor(){
    super();
    this.state={
      modalco:{},
      selectedProducts:[],
      modalMsg:'',
      open:false,
      open1:false,
      products:[{
            'image':'http://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG-Clipart.png',
            'name' :'Avacado',
            'cp':'€10',
            'np':'€8',
            'percent':'25%',
            'outDoor_price':'€5',
            'føtex_erhverv_price':'75%',
            'checked':false,
            'approved':false
          },{
        'image':'http://pngimg.com/uploads/pomegranate/pomegranate_PNG8653.png',
        'name' :'Pomegranate',
        'cp':'€7',
        'np':'€8',
        'percent':'30%',
        'outDoor_price':'€4' ,
        'føtex_erhverv_price':'45%',
        'checked':false,
        'approved':false
      },{
        'image':'http://www.pngmart.com/files/1/Mango-PNG.png',
        'name' :'Mango',
        'cp':'€4',
        'np':'€8',
        'percent':'10%',
        'outDoor_price':'€3',
        'føtex_erhverv_price':'55%',
        'checked':false,
        'approved':false
      },{
        'image':'http://www.freepngimg.com/download/apple/16-red-apple-png-image.png',
        'name' :'Apple',
        'cp':'€5',
        'np':'€8',
        'percent':'5%',
        'outDoor_price':'€5',
        'føtex_erhverv_price':'65%',
        'checked':false,
        'approved':false
      },{
            'image':'http://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG-Clipart.png',
            'name' :'Banana',
            'cp':'€10',
            'np':'€8',
            'percent':'25%',
            'outDoor_price':'€5',
            'føtex_erhverv_price':'75%',
            'checked':false,
            'approved':false
          },{
            'image':'http://www.freepngimg.com/download/apple/16-red-apple-png-image.png',
            'name' :'Orange',
            'cp':'€5',
            'np':'€8',
            'percent':'5%',
            'outDoor_price':'€5',
            'føtex_erhverv_price':'65%',
            'checked':false,
            'approved':false
          }]
    }
    this.viewProducts = this.viewProducts.bind(this);
    this.approve = this.approve.bind(this);
  }
  componentDidMount()
 {
   fetch('https://dansk-rapid.herokuapp.com/scrape', {
 method: 'GET',
 headers: {
   Accept: 'application/json',
   'Content-Type': 'application/json',
 },}).then((response) => response.json())
   .then((responseJson) => {
     var array=[];
     array = responseJson.map((item,key)=>{
       item.checked = false;
       item.approved = false;
       return item
     })
     console.log(array);
     this.setState({productsList:array})
   })
   .catch((error) => {
     console.error(error);
   });
 }

  openModal(i){
    this.setState({modalco:this.state.products[i],open:true});
  }
  openModal1(i){
    this.setState({modalco:this.state.selectedProducts[i],open:true});
  }
  closeModal(){
    this.setState({open:false,open1:false,approved:false});
  }
  handleChange(index,e,value){
    var context= this;
    var temp= this.state.products;
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
            if(item1.name==this.state.products[index].name){
              selectedProducts.splice(index,1);
            }
          })
        }
      }
    })
    this.setState({products:temp,selectedProducts:selectedProducts});
  }
  viewProducts(){
    this.setState({open1:true});
  }
  approve1(){
    var infoProduct = this.state.modalco;
    var productList = this.state.products;
    productList.map((item)=>{
      if(infoProduct.name == item.name){
        const index = productList.indexOf(item);
          productList.splice(index, 1);
      }
    })

    this.setState({products:productList,modalMsg:'Products have Approved Successfully',approved:true});
  }
  approve(){
    var { products } = this.state;
    var len1 = products.length;
    var filteredProducts = products.filter((item)=>{
      return !item.checked;
    });
    var len2 = filteredProducts.length;
    if (len1>len2) {
      this.setState({modalMsg:'Products have Approved Successfully'});
    } else {
      this.setState({modalMsg:'Please select a product'});
    }

    this.setState({products:filteredProducts,approved:true,selectedProducts:[]});
  }
  render() {

     return (
       <div style={{overflow:'hidden',marginTop:'12%'}}>
         <HeaderComponent content='Products List' linkto='/mainPage'/>
         <Grid>
         <Grid.Row/>
           {this.state.products.map((item,i)=>{
             return(
               <Grid.Row style={{marginBottom:'-4%'}} key={i}>
                <Grid.Column width={1}/>
                <Grid.Column width={4} style={{background:'rgba(255,255,255,0.9)'}}>
                  <Image style={{marginTop:'26%',marginBottom:'5%'}} src={item.image}/>
                </Grid.Column>
                <Grid.Column width={1} style={{background:'rgba(255,255,255,0.9)'}} />
                <Grid.Column width={6} style={{background:'rgba(255,255,255,0.9)'}} >
                  <Grid>
                    <Grid.Row style={{marginTop:'13%',color:'#a3104d',fontSize:'18px',fontWeight:'bold'}}>
                      <Grid.Column>
                        <span>{item.name}</span>
                       </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-13%'}}>
                      <Grid.Column width={4}>
                        <p>CP</p>
                      </Grid.Column>
                      <Grid.Column width={4} style={{marginTop:'5px'}} >
                        <Image src='../../images/caret-arrow-up.png'/>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <p>NP</p>
                      </Grid.Column>
                      <Grid.Column width={4} />
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-17px',marginBottom:'7%'}}>
                      <Grid.Column width={4}>
                        <p>{item.cp}</p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <p>{item.percent}</p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <p>{item.np}</p>
                      </Grid.Column>
                      <Grid.Column width={4} />
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
                <Grid.Column width={1}>
                  <Modal open={this.state.open} >
               <Modal.Header style={{color:'#a3104d'}}><center>Product Information</center></Modal.Header>
               {this.state.modalco.size !=0 ?
                 <span>
                 <Modal.Content scrolling >
                 <Modal.Description>
                   <Grid>
                     <Grid.Row>
                       <center><Image size='small' style={{position:'absolute',marginLeft:'30%'}}
                          src={this.state.modalco.image}/></center>
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
                           {this.state.modalco.name}
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
                           {this.state.modalco.np}
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
                           {this.state.modalco.cp}
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
                           {this.state.modalco.percent}
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
                           {this.state.modalco.outDoor_price}
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
                           <p style={{fontSize:'18px',color:'#a3104d',marginTop:'-3%'}}>{this.state.modalco.føtex_erhverv_price}</p>
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
             )
           // }
           })}
         </Grid>
         <Grid>
           <Grid.Row >
             <Grid.Column width={16}>
               <Button.Group attached='bottom' style={{position:'fixed',zIndex:'100',bottom:'0'}}>
                 <Button fluid style={{background:'#a3104d',color:'white'}} onClick={this.viewProducts}>View Products</Button>
                 <Button fluid color='white' style={{border:'1px solid black',color:'#a3104d'}} onClick={this.approve}>Approve</Button>
               </Button.Group>
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
                               <span>{item.name}</span>
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
                               <center><p>{item.cp}</p></center>
                             </Grid.Column>
                             <Grid.Column width={6}>
                               <center><p>{item.percent}</p></center>
                             </Grid.Column>
                             <Grid.Column width={5}>
                               <center><p>{item.np}</p></center>
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
