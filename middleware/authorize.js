"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var authorize = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(!req.user || req.user.email !== 'admin')) {
              _context.next = 3;
              break;
            }
            throw new Error('You do not have access to view this page');
          case 3:
            next();
            _context.next = 10;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            _context.t0.status = 403;
            next(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function authorize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = authorize;
exports["default"] = _default;