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
 



{/* form of data submition */}






<div className="row" style={{marginTop:"2%"}}>
        
        <div className="col-5" >
      

        </div>
        <div   
 className="col-4 text-left"  >
<p style={{fontWeight:"bold"}}>Text</p>
        </div>
        </div>



        <div className="row" >
        
        <div className="col-5" >
      

        </div>
       
        <input placeholder="Enter Text" type="text"className="col-4 text-left" value={Text} onChange={(e)=>{ setText(e.target.value)
      console.log(Text)
      }}/>       
        </div>






        <div className="row">
        
        <div className="col-5" >
      

        </div>
        <div   
 className="col-4 text-left"  >
   
<p style={{ fontWeight:"bold"}}>amount <br/> <span style={{fontSize:"80%",fontWeight:"bold"}}>(Negitive - Expense Positive + Expense) </span>
 </p>
        </div>
        </div>





        <div className="row" >
        
        <div className="col-5" >
      

        </div>
       
        <input type="number" placeholder="Enter Ammount" className="col-4" value={amount} onChange={(e)=>{ setamount(e.target.value)
      console.log(amount)
      }}/>         
        </div>


        
        
        
        {/* submit button */}



        <div className="row" style={{marginTop:"2%"}}>
        
        <div className="col-5" >
      

        </div>
        <button type="button"  onClick={()=>{console.log(context.add_data(Text,amount,id))}} class="btn btn-success col-4">Add Transection</button>

        
        </div>
    </div>
  );
}

export default Transections;
