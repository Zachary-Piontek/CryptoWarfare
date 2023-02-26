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
    (0, _defineProperty2["default"])(this, "name", void 0);
    (0, _defineProperty2["default"])(this, "symbol", void 0);
    (0, _defineProperty2["default"])(this, "price", void 0);
    (0, _defineProperty2["default"])(this, "marketCap", void 0);
    (0, _defineProperty2["default"])(this, "percent_change_24h", void 0);
    (0, _defineProperty2["default"])(this, "favorite", void 0);
    this.id = row.id;
    this.name = row.name;
    this.symbol = row.symbol;
    this.price = row.price;
    this.marketCap = row.market_cap;
    this.percent_change_24h = row.percent_change_24h;
    this.favorite = row.favorite;
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
                _context.next = 2;
                return _database["default"].query('SELECT * FROM coins');
              case 2:
                _yield$pool$query = _context.sent;
                rows = _yield$pool$query.rows;
                console.log(rows);
                return _context.abrupt("return", rows.map(function (row) {
                  return new Coin(row);
                }));
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getAll() {
        return _getAll.apply(this, arguments);
      }
      return getAll;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var _yield$pool$query2, rows;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _database["default"].query('SELECT * FROM coins WHERE id = $1', [id]);
              case 2:
                _yield$pool$query2 = _context2.sent;
                rows = _yield$pool$query2.rows;
                if (rows[0]) {
                  _context2.next = 6;
                  break;
                }
                throw new Error("No coin with id ".concat(id));
              case 6:
                console.log(rows[0]);
                return _context2.abrupt("return", new Coin(rows[0]));
              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function getById(_x) {
        return _getById.apply(this, arguments);
      }
      return getById;
    }()
  }, {
    key: "insert",
    value: function () {
      var _insert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(favorite) {
        var _yield$pool$query3, rows;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _database["default"].query('INSERT INTO coins (favorite) VALUES ($1) RETURNING *', [favorite.favorite]);
              case 2:
                _yield$pool$query3 = _context3.sent;
                rows = _yield$pool$query3.rows;
                console.log(rows[0]);
                return _context3.abrupt("return", new Coin(rows[0]));
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function insert(_x2) {
        return _insert.apply(this, arguments);
      }
      return insert;
    }()
  }]);
  return Coin;
}();
exports["default"] = Coin;