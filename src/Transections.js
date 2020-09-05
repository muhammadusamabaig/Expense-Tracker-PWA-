import React, { useContext,useState } from 'react';

import {Globalcontext} from './contaxt'
import Header from './Header';
function Transections() {

const [Text,setText]=useState('')
const [amount,setamount]=useState('')
// create fack id by random number

function getid(){
  return(Math.random())
}

const id=getid()
    const context=useContext(Globalcontext)
    // const delettedatta=useContext(Globalcontext)


    console.log(context.transections)

var total=0
var positivetemp=0
var nagitivetemp=0

   context.transections.map(
     
      ( item )  =>{

        if(item.amount>0){
        positivetemp= positivetemp+item.amount
        }
        if(item.amount<0){
          nagitivetemp= nagitivetemp-item.amount
          }
          if(nagitivetemp==null){
            nagitivetemp=0
          }

return(        total+=item.amount)

      
      }
    
   
    )

  return (
          <div className="container">
            <Header positivetotal={positivetemp} nagitivetemp={nagitivetemp} total={total}/>




{
  context.transections.map((item)=>{
    return(
      <div className="row" style={{marginTop:"2%"}}>
 <img onClick={()=>{context.delettedata(item.id)}} style={{width:"60px",height:"70px",marginLeft:"25%"}}  src={process.env.PUBLIC_URL+"binimage.jpg"}/><span   className="col-3 text-center" style={{fontWeight:"bold",marginLeft:"0%",border:"2px solid white",color:"white"}}>{item.amount}</span>
    <span   className="col-3 text-center" style={{fontWeight:"bold",marginLeft:"0%",border:"2px solid white",color:"white"}}>{item.name}</span>
 </div>  
    ) 
  })
}


<div className="row"  style={{marginTop:"2%"}}>
<span style={{fontWeight:"bold",marginLeft:"30%",color:"white"}}>Text</span>
       


        
      

     
       
        <input placeholder="Enter Text" style={{marginLeft:"30%",height:"40px"}} type="text"className="col-6 text-left" value={Text} onChange={(e)=>{ setText(e.target.value)
      console.log(Text)
      }}/>       
        






      
          
   
   <span style={{fontWeight:"bold",marginLeft:"30%",color:"white"}}>Amount</span>

      





       
        <input type="number" style={{marginLeft:"30%",height:"40px"}} placeholder="Enter Ammount" className="col-6" value={amount} onChange={(e)=>{ setamount(e.target.value)
      console.log(amount)
      }}/>  
    


        
        
        
        {/* submit button */}



        <button type="button" style={{marginLeft:"30%",marginTop:"2%",fontWeight:"bold",backgroundColor:"white"}}  onClick={()=>{console.log(context.add_data(Text,amount,id))}} class="btn col-6">Add Transection</button>
</div>
        
    </div>
  );
}

export default Transections;
