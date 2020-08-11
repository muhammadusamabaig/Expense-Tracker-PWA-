

import React, { useContext } from 'react';
import {Globalcontext} from './contaxt'

function Header(props) {
console.log(props)
const context=useContext(Globalcontext)
   
  return (
    <div>
    <div style={{paddingTop:"6%"}}>



<span style={{fontWeight:"bold",marginLeft:"30%"}}>Expense Tracker</span>

    </div>
    <div className="row">


<span   className="col-3 text-center" style={{fontWeight:"bold",marginLeft:"30%",border:"2px solid"}}>Amount</span>

<span   className="col-3 text-center" style={{fontWeight:"bold",marginLeft:"0%",border:"2px solid"}}>Amount</span>

</div>
    
    {/* <div className="row">



  <span className="col-6" style={{fontWeight:"bold",marginLeft:"30%"}}>{props.total}</span>

    </div> */}
    <div className="row">


  <span   className="col-3 text-center" style={{fontWeight:"bold",marginLeft:"30%",border:"2px solid"}}>{props.total}</span>

<span   className="col-3 text-center" style={{fontWeight:"bold",marginLeft:"0%",border:"2px solid"}}>Amount</span>

</div>

    </div>
  );
}

export default Header;









// <div className="row" style={{marginTop:"2%"}}>

// <div className="col-5">

// </div>
// <div className="col-5">
// <h6>Youre Balance</h6>
// </div>

// </div>
// <div className="row" >

// <div className="col-5">

// </div>
// <div className="col-5">
// <h5> {props.total}
// </h5>
// </div>

// </div>
// <div className="row" >

// <div className="col-5" >

// </div>
// <div className="col-2" style={{padding:"0%",backgroundColor:"white",    boxShadow: "1px 1px 1px #9E9E9E",borderRadius:"3%"
// ,paddingLeft:"2%"}}>
// <h6 style={{fontWeight:"bold",color:"#cc5143"}}>Income</h6>
//   <p>{props.positivetotal}</p>
// </div>
// <div className="col-2" style={{padding:"0%",paddingLeft:"2%",backgroundColor:"white",boxShadow: "1px 1px 3px #9E9E9E",borderRadius:"3%"}}>
// <h6 style={{fontWeight:"bold",color:"#40de58"}}>Expense</h6>
// <p>{props.nagitivetemp}</p>

// </div>


// </div>
// <div className="row"  style={{marginTop:"1%"}}>

// <div className="col-5" >

// </div>
// <div className="col-4" style={{borderBottom:"2px solid lightgray"}} >
// <h6 style={{fontWeight:"bold"}}>History</h6>
// </div>
// </div>
// {
//           context.transections.map((item)=>{
//         return(
//           <div className="row"  style={{marginTop:"2%" ,  marginLeft:"10%" , marginRight:"10%"  }}>
//         {/* <h1 >{item.id}</h1> */}
//         {console.log(item, "item####")}
//         <div className="col-5 text-right"   >
//         <img alt="img of delete" onClick={()=>{console.log(context.delettedata(item.id))}} src={process.env.PUBLIC_URL + '/bin.png'} style={{width:"6%",height:"60%"}}/> 
//         </div>
//         <div   
//  className="col-2"  >
//         <p  className="text-left" style={{color:"white"}}>{item.name}</p>
//         </div>
//         <div className="col-2"    >

//         <p className="text-right"   style={{color:"white"}}>{item.amount}</p>

//         </div>
       
//         </div>
//         )
//           })
//         }
       

//        <div className="row"  style={{marginTop:"2%"}}>
//         <div className="col-5 text-right" >
//         </div>
//         <div   
//  className="col-3"  style={{borderBottom:" 2px solid lightgray"}}>

//         <p className="text-left" style={{fontWeight:"bold"}}>Add New Transections</p>

//         </div>
//         <div className="col-1" style={{borderBottom:" 2px solid lightgray"}} >

//         <p className="text-right"></p>

//         </div>
       
//         </div>
