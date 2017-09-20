(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new ChatMessage({ message: 'pow!' });

    _wsClient2.default.sendMessage(message);
  });
  _wsClient2.default.registerMessageHandler(function (data) {
    console.log(data);
  });
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$time = _ref.time,
        t = _ref$time === undefined ? new Date().getTime() : _ref$time;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.time = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        time: this.time
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

function init(url) {
  socket = new WebSocket(url);

  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');

    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);

    var data = JSON.parse(e.data);

    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWixxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxxQkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQy9CLFFBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBRSxTQUFTLE1BQVgsRUFBaEIsQ0FBZDs7QUFFQSx1QkFBTyxXQUFQLENBQW1CLE9BQW5CO0FBQ0QsR0FKRDtBQUtBLHFCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3RDLFlBQVEsR0FBUixDQUFZLElBQVo7QUFDRCxHQUZEO0FBR0QsQzs7SUFHRyxXO0FBQ0osNkJBSUc7QUFBQSxRQUhRLENBR1IsUUFIRCxPQUdDO0FBQUEseUJBRkQsSUFFQztBQUFBLFFBRkssQ0FFTCw2QkFGTyxRQUVQO0FBQUEseUJBREQsSUFDQztBQUFBLFFBREssQ0FDTCw2QkFEUSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDUDs7QUFBQTs7QUFDRCxTQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU87QUFDTCxjQUFNLEtBQUssSUFETjtBQUVMLGlCQUFTLEtBQUssT0FGVDtBQUdMLGNBQU0sS0FBSztBQUhOLE9BQVA7QUFLRDs7Ozs7O2tCQUdZLE87Ozs7O0FDcENmOzs7Ozs7QUFFQTs7Ozs7Ozs7QUNGQSxJQUFJLGVBQUo7O0FBRUEsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUNqQixXQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDs7QUFFQSxVQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM1QyxTQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixZQUFRLEdBQVIsQ0FBWSxNQUFaOztBQUVBO0FBQ0QsR0FKRDtBQUtEOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDL0MsU0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3hCLFlBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsRUFBRSxJQUF6Qjs7QUFFQSxRQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVg7O0FBRUEsb0JBQWdCLElBQWhCO0FBQ0QsR0FORDtBQU9EOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBRWM7QUFDYixZQURhO0FBRWIsMENBRmE7QUFHYixnREFIYTtBQUliO0FBSmEsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50JztcblxuY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG4gICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93IScgfSk7XG4gICAgICBcbiAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9KTtcbiAgICBzb2NrZXQucmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWVzc2FnZTogbSxcbiAgICB1c2VyOiB1PSdiYXRtYW4nLFxuICAgIHRpbWU6IHQ9KG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICB9KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbTtcbiAgICB0aGlzLnVzZXIgPSB1O1xuICAgIHRoaXMudGltZSA9IHQ7XG4gIH1cbiAgXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgdGltZTogdGhpcy50aW1lXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7XG4iLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5cbm5ldyBDaGF0QXBwKCk7XG4iLCJsZXQgc29ja2V0O1xuXG5mdW5jdGlvbiBpbml0KHVybCkge1xuICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gIFxuICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgXG4gICAgaGFuZGxlckZ1bmN0aW9uKCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gIHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZS5kYXRhKTtcbiAgICBcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICBcbiAgICBoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcbiAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQsXG4gIHJlZ2lzdGVyT3BlbkhhbmRsZXIsXG4gIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXG4gIHNlbmRNZXNzYWdlXG59XG4iXX0=
