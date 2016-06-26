importScripts('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash.min.js')
importScripts('js/script1.js');

self.addEventListener('message', function(e) {
    var msg  = e.data;
    // Send the message back.
    if(e.data === "throw-error"){
         throw Error('Error Yo');
    }
    
    if(e.data === "__angular__"){
        msg = typeof angular;
    }
    
    self.postMessage('You said: ' + msg);
    
}, false);
