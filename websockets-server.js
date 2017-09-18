var WebSocket = require('ws');

var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});
var messages = [];

console.log('websockets server started');

ws.on('connection', function (socket) {
  console.log('client connection established');
  
  // Send previous messages to new clients.
  messages.forEach(function (msg) {
    socket.send(msg);
  });
  
  socket.on('message', function (data) {
    console.log('message received: ' + data);
    
    // Keeping a log of messages as your users send them is necessary 
    // in order to send the message history to new users.
    messages.push(data);
    
    // Rebroadcast new messages to to all the users.
    ws.clients.forEach(function (clientSocket) {
      clientSocket.send(data);
    });
  });
});
