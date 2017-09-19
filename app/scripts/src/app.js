class ChatApp {
  constructor() {
    console.log('Hello ES6!');
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
}

export default ChatApp;
