export default function swDev (){

    let SwUrl=`${process.env.PUBLIC_URL}/sw.js`
 
 console.log()
       if ('serviceWorker' in navigator) {
           navigator.serviceWorker
           .register(SwUrl)  
   .catch(error => {
     console.error('Error during service worker registration:', error);
   });
}


}