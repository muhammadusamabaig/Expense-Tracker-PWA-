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
    <div>
            <Header positivetotal={positivetemp} nagitivetemp={nagitivetemp} total={total}/>

<div className="row "  style={{marginTop:"2%"}}>

 



{/* form of data submition */}






        
        
        
<span style={{fontWeight:"bold",marginLeft:"30%"}}>Text</span>
       


        
      

     
       
        <input placeholder="Enter Text" style={{marginLeft:"30%",height:"40px"}} type="text"className="col-6 text-left" value={Text} onChange={(e)=>{ setText(e.target.value)
      console.log(Text)
      }}/>       
        






      
          
   
   <span style={{fontWeight:"bold",marginLeft:"30%"}}>Amount</span>

      





       
        <input type="number" style={{marginLeft:"30%",height:"40px"}} placeholder="Enter Ammount" className="col-6" value={amount} onChange={(e)=>{ setamount(e.target.value)
      console.log(amount)
      }}/>  
    


        
        
        
        {/* submit button */}



        <button type="button" style={{marginLeft:"30%",marginTop:"2%"}}  onClick={()=>{console.log(context.add_data(Text,amount,id))}} class="btn btn-primary col-6">Add Transection</button>
</div>
        
    </div>
  );
}

export default Transections;
