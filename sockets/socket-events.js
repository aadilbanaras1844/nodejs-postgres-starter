

let socket;

setTimeout(() => {
  socket = require('./socket.io')();
}, 2000);

module.exports.update = (type, message) => {
    socket.to('alert').emit('alert', message);
  }