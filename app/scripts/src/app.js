import socket from './ws-client';
import {ChatForm, ChatList} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.ChatList = new ChatList(LIST_SELECTOR, 'wonderwoman');
    
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      this.chatForm.init((data) => {
        let message = new ChatMessage(data);
        
        socket.sendMessage(message.serialize());
      });
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
