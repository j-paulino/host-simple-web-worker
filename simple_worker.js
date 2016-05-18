self.addEventListener('message', function(e) {
    throw Error('Error Yo');
    // Send the message back.
    self.postMessage('You said: ' + e.data);
}, false);
