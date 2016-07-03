importScripts('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash.min.js')

self.addEventListener('message', function(e) {
    var msg  = e.data;
    
    console.log(_);
    
    self.postMessage('You said: ' + msg);
    
}, false);
