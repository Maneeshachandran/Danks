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
            'margin':'0%',
            'newprice':'75%',
            'checked':false,
            'approved':false
          },{
        'image':'http://pngimg.com/uploads/pomegranate/pomegranate_PNG8653.png',
        'name' :'Pomegranate',
        'cp':'€7',
        'np':'€8',
        'percent':'30%',
        'outDoor_price':'€4' ,
        'margin':'-4%',
        'newprice':'45%',
        'checked':false,
        'approved':false
      },{
        'image':'http://www.pngmart.com/files/1/Mango-PNG.png',
        'name' :'Mango',
        'cp':'€4',
        'np':'€8',
        'percent':'10%',
        'outDoor_price':'€3',
        'margin':'-4%',
        'newprice':'55%',
        'checked':false,
        'approved':false
      },{
        'image':'http://www.freepngimg.com/download/apple/16-red-apple-png-image.png',
        'name' :'Apple',
        'cp':'€5',
        'np':'€8',
        'percent':'5%',
        'outDoor_price':'€5',
        'margin':'-4%',
        'newprice':'65%',
        'checked':false,
        'approved':false
      },{
            'image':'http://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG-Clipart.png',
            'name' :'Avacado',
            'cp':'€10',
            'np':'€8',
            'percent':'25%',
            'outDoor_price':'€5',
            'margin':'-4%',
            'newprice':'75%',
            'checked':false,
            'approved':false
          },{
            'image':'http://www.freepngimg.com/download/apple/16-red-apple-png-image.png',
            'name' :'Apple',
            'cp':'€5',
            'np':'€8',
            'percent':'5%',
            'outDoor_price':'€5',
            'margin':'-5%',
            'newprice':'65%',
            'checked':false,
            'approved':false
          }]
    }
    this.viewProducts = this.viewProducts.bind(this);
    this.approve = this.approve.bind(this);
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
  approve(){
    var { products } = this.state;
    var len1 = products.length;
    var filteredProducts = products.filter((item)=>{
      return !item.checked;
    });
    var len2 = filteredProducts.length;
    if (len1>len2) {
      this.setState({modalMsg:'Approved Successfully'});
    } else {
      this.setState({modalMsg:'Please select a product'});
    }

    this.setState({products:filteredProducts,approved:true,selectedProducts:[]});
  }
  render() {

     return (
       <div style={{backgroundColor:'#2e2f30',overflow:'hidden',marginTop:'12%'}}>
         <HeaderComponent content='Products List' linkto='/mainPage'/>
         <Grid>
           {this.state.products.map((item,i)=>{
             return(
               <Grid.Row style={{marginTop:item.margin}} key={i}>
                <Grid.Column width={1}/>
                <Grid.Column width={4} style={{backgroundColor:'#d4d7db'}}>
                  <Image style={{marginTop:'26%',marginBottom:'5%'}} src={item.image}/>
                </Grid.Column>
                <Grid.Column width={1} style={{backgroundColor:'#d4d7db'}} />
                <Grid.Column width={6} style={{backgroundColor:'#d4d7db'}} >
                  <Grid>
                    <Grid.Row style={{marginTop:'13%'}}>
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
                <Grid.Column width={3} style={{backgroundColor:'#d4d7db'}}>
                  <Grid>
                    <Grid.Row style={{marginTop:'27%'}}>
                      <Grid.Column style={{marginLeft:'35%'}}>
                        <Image src='../../images/info.png' onClick={this.openModal.bind(this,i)}/>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-13%'}}/>
                    <Grid.Row style={{marginTop:'-17px'}}>
                      <Grid.Column width={12}/>
                      <Grid.Column width={3} style={{marginLeft:'35%'}}>
                          <Checkbox style={{textAlign:'center'}} onChange={this.handleChange.bind(this,i)} checked={item.checked} />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={1}>
                  <Modal open={this.state.open}>
               <Modal.Header><center>Product Information</center></Modal.Header>
               {this.state.modalco.size !=0 ?
                 <Modal.Description>
                   <Grid>
                     <Grid.Row>
                       <center><Image size='small' style={{marginTop:'3%',marginBottom:'5%',position:'absolute',marginLeft:'30%'}}
                          src={this.state.modalco.image}/></center>
                     </Grid.Row>
                     <Grid.Row style={{marginTop:'35%'}}>
                       <Grid.Column width={2} />
                       <Grid.Column width={8}>
                         Product Name
                       </Grid.Column>
                       <Grid.Column width={4}>
                         {this.state.modalco.name}
                       </Grid.Column>
                       <Grid.Column width={2} />
                     </Grid.Row>
                     <Grid.Row>
                       <Grid.Column width={2} />
                       <Grid.Column width={8}>
                         Current Price
                       </Grid.Column>
                       <Grid.Column width={4}>
                         {this.state.modalco.cp}
                       </Grid.Column>
                       <Grid.Column width={2} />
                     </Grid.Row>
                     <Grid.Row>
                       <Grid.Column width={2} />
                       <Grid.Column width={8}>
                         % gain in Margin
                       </Grid.Column>
                       <Grid.Column width={4}>
                         {this.state.modalco.percent}
                       </Grid.Column>
                       <Grid.Column width={2} />
                     </Grid.Row>
                     <Grid.Row>
                       <Grid.Column width={2} />
                       <Grid.Column width={8}>
                         Out of the Door price
                       </Grid.Column>
                       <Grid.Column width={4}>
                         {this.state.modalco.outDoor_price}
                       </Grid.Column>
                       <Grid.Column width={2} />
                     </Grid.Row>
                     <Grid.Row>
                       <Grid.Column width={2} />
                       <Grid.Column width={8}>
                         Rema's Price
                       </Grid.Column>
                       <Grid.Column width={4}>
                         {this.state.modalco.np}
                       </Grid.Column>
                       <Grid.Column width={2} />
                     </Grid.Row>
                     <Grid.Row>
                       <Grid.Column width={2} />
                       <Grid.Column width={8}>
                         New Price
                       </Grid.Column>
                       <Grid.Column width={4}>
                         {this.state.modalco.newprice}
                       </Grid.Column>
                       <Grid.Column width={2} />
                     </Grid.Row>
                     <Grid.Row>
                       <Grid.Column width={1} />
                       <Grid.Column width={14}>
                         <center><Button secondary onClick={this.closeModal.bind(this)}>Close</Button></center>
                       </Grid.Column>
                       <Grid.Column width={1} />
                     </Grid.Row>
                     <Grid.Row />
                   </Grid>
                 </Modal.Description> :
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
                 <Button fluid color='black' onClick={this.viewProducts}>View Products</Button>
                 <Button fluid onClick={this.approve}>Approve</Button>
               </Button.Group>
             </Grid.Column>
           </Grid.Row>
         </Grid>
         <Grid>
           <Grid.Row>
             <Modal open={this.state.open1} style={{height:'auto'}}>
              <Modal.Header><center>Selected Products</center></Modal.Header>
                <Modal.Description>
                  {this.state.selectedProducts.map((item,i)=>{
                    return(
                      <Grid>
                      <Grid.Row style={{marginTop:'2%'}} key={i}>
                       <Grid.Column width={1}/>
                       <Grid.Column width={4} style={{backgroundColor:'#d4d7db'}}>
                         <Image size='tiny' src={item.image}/>
                       </Grid.Column>
                       <Grid.Column width={1} style={{backgroundColor:'#d4d7db'}} />
                       <Grid.Column width={7} style={{backgroundColor:'#d4d7db'}} >
                         <Grid>
                           <Grid.Row style={{marginTop:'5%',marginBottom:'5%'}}>
                             <Grid.Column >
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
                             <Grid.Column width={4} >
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
                       <Grid.Column width={2} style={{backgroundColor:'#d4d7db'}}>
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
                       <Grid>
                         <Grid.Row>
                           <Grid.Column width={16}>
                             <Button.Group attached='bottom'>
                               <Button color='black' onClick={this.closeModal.bind(this)}>Cancel</Button>
                               <Button onClick={this.approve} >Approve</Button>
                             </Button.Group>
                           </Grid.Column>
                     </Grid.Row>
                   <Grid.Row />
                   </Grid>
                </Modal.Description>
              </Modal>
           </Grid.Row>
         </Grid>
         <Grid>
           <Grid.Row>
             <Modal open={this.state.approved}>
               <Modal.Content>
                 <center><h3>{this.state.modalMsg}</h3></center>
               </Modal.Content>
               <Modal.Actions>
                     <center><Button secondary onClick={this.closeModal.bind(this)}>Close</Button></center>
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
