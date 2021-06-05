
const SocketIo = require('socket.io');

let io = null;
const initSocket = (server) => {
  if(server){
      io = SocketIo(server);
  }
  if (io) {
      io.on('connect', (socket) => {
        socket.on('join', () => {
          socket.join('alert');
        });
        socket.on('disconnect', () => {
        });
      });
    }
    return io;
}
module.exports = initSocket;

