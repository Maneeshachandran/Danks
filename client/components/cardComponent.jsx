import React from 'react';
import { Grid,Header,Card,Image,Segment,Icon,Dropdown,Button,Checkbox, Modal } from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

class CardComponent extends React.Component {
  constructor(){
    super();
    this.state={
      open:false,
      checked:false
    }
  }
  openModal(){
    this.setState({open:true});
  }
  closeModal(){
    this.setState({open:false});
  }
  handleChange(){
    this.setState({checked:true});
  }
  render() {
     return (
       <Grid.Row style={{marginTop:this.props.margin}}>
        <Grid.Column width={1}/>
        <Grid.Column width={4} style={{backgroundColor:'#d4d7db'}}>
          <Image style={{marginTop:'26%',marginBottom:'5%'}} src={this.props.image}/>
        </Grid.Column>
        <Grid.Column width={1} style={{backgroundColor:'#d4d7db'}} />
        <Grid.Column width={6} style={{backgroundColor:'#d4d7db'}} >
          <Grid>
            <Grid.Row style={{marginTop:'13%'}}>
              <Grid.Column>
                <span>{this.props.name}</span>
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
                <p>{this.props.cp}</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>{this.props.percent}</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>{this.props.np}</p>
              </Grid.Column>
              <Grid.Column width={4} />
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column width={3} style={{backgroundColor:'#d4d7db'}}>
          <Grid>
            <Grid.Row style={{marginTop:'27%'}}>
              <Grid.Column style={{paddingLeft:'9px'}}>
                <Image src='../../images/info.png' onClick={this.openModal.bind(this)}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{marginTop:'-13%'}}/>
            <Grid.Row style={{marginTop:'-17px'}}>
              <Grid.Column width={12}/>
              <Grid.Column width={3}>
                  <Checkbox style={{textAlign:'center'}} onChange={this.handleChange.bind(this)} checked={this.state.checked} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={1}>
          <Modal open={this.state.open}>
       <Modal.Header><center>Product Information</center></Modal.Header>
         <Modal.Description>
           <Grid>
             <Grid.Row>
               <center><Image size='small' style={{marginTop:'3%',marginBottom:'5%',position:'absolute',marginLeft:'30%'}} src={this.props.image}/></center>
             </Grid.Row>
             <Grid.Row style={{marginTop:'35%'}}>
               <Grid.Column width={2} />
               <Grid.Column width={8}>
                 Product Name
               </Grid.Column>
               <Grid.Column width={4}>
                 {this.props.name}
               </Grid.Column>
               <Grid.Column width={2} />
             </Grid.Row>
             <Grid.Row>
               <Grid.Column width={2} />
               <Grid.Column width={8}>
                 Current Price
               </Grid.Column>
               <Grid.Column width={4}>
                 {this.props.cp}
               </Grid.Column>
               <Grid.Column width={2} />
             </Grid.Row>
             <Grid.Row>
               <Grid.Column width={2} />
               <Grid.Column width={8}>
                 % gain in Margin
               </Grid.Column>
               <Grid.Column width={4}>
                 {this.props.percent}
               </Grid.Column>
               <Grid.Column width={2} />
             </Grid.Row>
             <Grid.Row>
               <Grid.Column width={2} />
               <Grid.Column width={8}>
                 Out of the Door price
               </Grid.Column>
               <Grid.Column width={4}>
                 {this.props.door}
               </Grid.Column>
               <Grid.Column width={2} />
             </Grid.Row>
             <Grid.Row>
               <Grid.Column width={2} />
               <Grid.Column width={8}>
                 Reema's Price
               </Grid.Column>
               <Grid.Column width={4}>
                 {this.props.np}
               </Grid.Column>
               <Grid.Column width={2} />
             </Grid.Row>
             <Grid.Row>
               <Grid.Column width={2} />
               <Grid.Column width={8}>
                 New Price
               </Grid.Column>
               <Grid.Column width={4}>
                 {this.props.newprice}
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
         </Modal.Description>
       </Modal>
        </Grid.Column>
      </Grid.Row>

    );
  }
}
export default CardComponent;
