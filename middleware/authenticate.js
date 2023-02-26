"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var authenticate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var cookies, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            cookies = req.cookies && req.cookies[process.env.COOKIE_NAME];
            if (cookies) {
              _context.next = 4;
              break;
            }
            throw new Error('Need sign in to continue.');
          case 4:
            user = _jsonwebtoken["default"].verify(cookies, process.env.JWT_SECRET);
            req.user = user;
            next();
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            _context.t0.status = 401;
            next(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function authenticate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = authenticate;
exports["default"] = _default;