importScripts('https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js');
self.addEventListener('message', function(e) {
    // Send the message back.
    if(e.data === "throw-error"){
         throw Error('Error Yo');
    }
    
    self.postMessage('You said: ' + e.data);
    
}, false);
