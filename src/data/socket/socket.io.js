const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const { Cluster } = require('ioredis');
const { momentPhnomPenh } = require('@/common/helper/moment');

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  (async () => {
    pubClient = new Cluster([]);
    subClient = pubClient.duplicate();
    pubClient.on('error', (err) => console.log(err));
    subClient.on('error', (err) => console.log(err));
    io.adapter(createAdapter(pubClient, subClient));
  })();

  io.on('connection', (socket) => {
    socket.emit('connected', 'Welcome to ChatBot!');
    //Listen to "chat" event when it's fired from clint side
    socket.on('chat', (data) => {
      //Then emit the event to all connected clients
      io.sockets.emit('chat', data);
    });
    //Listen to "message" event when client is typing
    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data);
    });
  });
};
