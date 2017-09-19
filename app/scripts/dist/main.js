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

exports.default = {
  init: init
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWixxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDRCxDOztJQUdHLFc7QUFDSiw2QkFJRztBQUFBLFFBSFEsQ0FHUixRQUhELE9BR0M7QUFBQSx5QkFGRCxJQUVDO0FBQUEsUUFGSyxDQUVMLDZCQUZPLFFBRVA7QUFBQSx5QkFERCxJQUNDO0FBQUEsUUFESyxDQUNMLDZCQURRLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNQOztBQUFBOztBQUNELFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTztBQUNMLGNBQU0sS0FBSyxJQUROO0FBRUwsaUJBQVMsS0FBSyxPQUZUO0FBR0wsY0FBTSxLQUFLO0FBSE4sT0FBUDtBQUtEOzs7Ozs7a0JBR1ksTzs7Ozs7QUM1QmY7Ozs7OztBQUVBOzs7Ozs7OztBQ0ZBLElBQUksZUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCLFdBQVMsSUFBSSxTQUFKLENBQWMsR0FBZCxDQUFUOztBQUVBLFVBQVEsR0FBUixDQUFZLGVBQVo7QUFDRDs7a0JBRWM7QUFDYjtBQURhLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XG5cbmNsYXNzIENoYXRBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIG1lc3NhZ2U6IG0sXG4gICAgdXNlcjogdT0nYmF0bWFuJyxcbiAgICB0aW1lOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgfSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgdGhpcy51c2VyID0gdTtcbiAgICB0aGlzLnRpbWUgPSB0O1xuICB9XG4gIFxuICBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHRpbWU6IHRoaXMudGltZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xuXG5uZXcgQ2hhdEFwcCgpO1xuIiwibGV0IHNvY2tldDtcblxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICBcbiAgY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcuLi4nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0LFxufVxuIl19
