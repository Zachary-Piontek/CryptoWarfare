"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _User = _interopRequireDefault(require("../models/User.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var UserService = /*#__PURE__*/function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }
  (0, _createClass2["default"])(UserService, null, [{
    key: "signUp",
    value: function () {
      var _signUp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var username, email, password, passwordHash, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, email = _ref.email, password = _ref.password;
                _context.next = 3;
                return _bcrypt["default"].hash(password, Number(process.env.SALT_ROUNDS));
              case 3:
                passwordHash = _context.sent;
                _context.next = 6;
                return _User["default"].insert({
                  username: username,
                  email: email,
                  passwordHash: passwordHash
                });
              case 6:
                user = _context.sent;
                return _context.abrupt("return", user);
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function signUp(_x) {
        return _signUp.apply(this, arguments);
      }
      return signUp;
    }()
  }, {
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
        var email, _ref2$password, password, user, token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                email = _ref2.email, _ref2$password = _ref2.password, password = _ref2$password === void 0 ? '' : _ref2$password;
                _context2.prev = 1;
                _context2.next = 4;
                return _User["default"].getByEmail(email);
              case 4:
                user = _context2.sent;
                if (user) {
                  _context2.next = 7;
                  break;
                }
                throw new Error('Invalid email');
              case 7:
                if (_bcrypt["default"].compareSync(password, user.passwordHash)) {
                  _context2.next = 9;
                  break;
                }
                throw new Error('Invalid password');
              case 9:
                token = _jsonwebtoken["default"].sign(_objectSpread({}, user), process.env.JWT_SECRET, {
                  expiresIn: '1 day'
                });
                return _context2.abrupt("return", token);
              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](1);
                _context2.t0.status = 401;
                throw _context2.t0;
              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 13]]);
      }));
      function signIn(_x2) {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(sessionToken) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _User["default"].getBySessionToken(sessionToken);
              case 2:
                user = _context3.sent;
                if (user) {
                  _context3.next = 5;
                  break;
                }
                throw new Error('Invalid session token');
              case 5:
                user.sessionToken = null;
                _context3.next = 8;
                return user.update();
              case 8:
                return _context3.abrupt("return", user);
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function signOut(_x3) {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }]);
  return UserService;
}();
exports["default"] = UserService;