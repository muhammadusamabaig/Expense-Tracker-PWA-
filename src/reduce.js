export default function Appreducer(state,action) {

    // switch (action.type){
    //     default :
    //     return (state)
    // }
    switch(action.type) {
        case 'delet data':

var list=state.transections.filter((item)=>{return (item.id!==action.payload)})

return{
    
    ...state,
    transections:list,

}

          // code block
          
        case 'add data':
          // code block[{}]
    //       state.transections.push({action.id,action.name,action.amount})
    //     default:
    //         return(state)
    //       // code block
    //   }

    var id= action.id
    var name=action.name

    var amount= parseInt(action.amount)

state.transections.push({id ,name,amount})
    return{
        
        ...state
      
    
    }     
    default:
        alert('plear enter proper data')
}
}
