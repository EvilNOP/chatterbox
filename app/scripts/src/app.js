import socket from './ws-client';

class ChatApp {
  constructor() {
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({ message: 'pow!' });
      
      socket.sendMessage(message);
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
    });
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: u='batman',
    time: t=(new Date()).getTime()
  }) {
    this.message = m;
    this.user = u;
    this.time = t;
  }
  
  serialize() {
    return {
      user: this.user,
      message: this.message,
      time: this.time
    }
  }
}

export default ChatApp;
