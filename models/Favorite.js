"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _database = _interopRequireDefault(require("../database.js"));
var Coin = /*#__PURE__*/function () {
  function Coin(row) {
    (0, _classCallCheck2["default"])(this, Coin);
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "user_id", void 0);
    (0, _defineProperty2["default"])(this, "coins_ids", void 0);
    this.id = row.id;
    this.user_id = row.user_id;
    this.coins_ids = row.coins_ids;
  }
  (0, _createClass2["default"])(Coin, null, [{
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$query, rows;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _database["default"].query('SELECT * FROM users_favorite_coins');
              case 3:
                _yield$pool$query = _context.sent;
                rows = _yield$pool$query.rows;
                return _context.abrupt("return", rows.map(function (row) {
                  return new Coin(row);
                }));
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      function getAll() {
        return _getAll.apply(this, arguments);
      }
      return getAll;
    }()
  }, {
    key: "getUserFavorites",
    value: function () {
      var _getUserFavorites = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user_id) {
        var _yield$pool$query2, rows;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _database["default"].query('SELECT * FROM users_favorite_coins WHERE user_id = $1', [user_id]);
              case 3:
                _yield$pool$query2 = _context2.sent;
                rows = _yield$pool$query2.rows;
                return _context2.abrupt("return", new Coin(rows[0] || []));
              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));
      function getUserFavorites(_x) {
        return _getUserFavorites.apply(this, arguments);
      }
      return getUserFavorites;
    }()
  }, {
    key: "updateUserFavorites",
    value: function () {
      var _updateUserFavorites = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user_id, newFavorites) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _database["default"].query('UPDATE users_favorite_coins SET coins_ids = $1 WHERE user_id = $2', [newFavorites, user_id]);
              case 3:
                return _context3.abrupt("return", this.getUserFavorites(user_id));
              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));
      function updateUserFavorites(_x2, _x3) {
        return _updateUserFavorites.apply(this, arguments);
      }
      return updateUserFavorites;
    }()
  }]);
  return Coin;
}();
exports["default"] = Coin;