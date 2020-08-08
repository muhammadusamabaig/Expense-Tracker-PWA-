import React, { createContext ,useReducer} from 'react';
 import Appreducer from './reduce'

export const Globalcontext=createContext()
const inistate={
  transections:[
    // {id:0,name:"usama",amount:20},
    // {id:1,name:"usama",amount:-20},
    // {id:2,name:"usama",amount:20},
    // {id:3,name:"usama",amount:20}

  ]
}

export const Contaxt=(props)=> {
   const [state,dispatch]=useReducer(Appreducer,inistate)

function delettedata(id){
dispatch({type:'delet data',payload:id})
}
function add_data(name,amount,id){
dispatch({type:'add data',id:id,name:name,amount:amount})
}
  return (
    
    <div>
     <Globalcontext.Provider value={{transections:state.transections,delettedata,add_data}}>
       {props.children}
     </Globalcontext.Provider>
    </div>
  );
}

