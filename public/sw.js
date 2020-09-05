console.log('registyered')

console.log('sw')

let cacheData = "appv1"

this.addEventListener('install',(event)=>{
event.waitUntil(
caches.open(cacheData).then((cache)=>{
    cache.addAll([
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        'index.html',
        '/',
    ])
})
)
})


this.addEventListener('fetch',(event)=>{
if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request).then((result)=>{
    if(result){

    return result
     }else{
         const urlfetch=event.request
         return fetch(urlfetch)

     }
            })
        )
    
}
})