let socket;

function init(url) {
  socket = new WebSocket(url);
  
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    
    handlerFunction();
  }
}

export default {
  init,
}
