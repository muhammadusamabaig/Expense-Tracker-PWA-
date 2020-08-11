let cacheData='appv1'

this.addEventListener('install',(event)=>{
    event.waitUntil(
        chaches.open(cacheData).then(()=>{
            chache.addAll([
              '/',
              './app.js'  
              
            ])
        })
    )
})