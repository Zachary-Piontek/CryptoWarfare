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
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));
var _database = _interopRequireDefault(require("../database.js"));
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _passwordHash = /*#__PURE__*/new WeakMap();
var User = /*#__PURE__*/function () {
  function User(row) {
    (0, _classCallCheck2["default"])(this, User);
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "username", void 0);
    (0, _defineProperty2["default"])(this, "email", void 0);
    _classPrivateFieldInitSpec(this, _passwordHash, {
      writable: true,
      value: void 0
    });
    this.id = row.id;
    this.username = row.username;
    this.email = row.email;
    (0, _classPrivateFieldSet2["default"])(this, _passwordHash, row.password_hash);
  }
  (0, _createClass2["default"])(User, [{
    key: "passwordHash",
    get: function get() {
      return (0, _classPrivateFieldGet2["default"])(this, _passwordHash);
    }
  }], [{
    key: "insert",
    value: function () {
      var _insert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var username, email, passwordHash, _yield$pool$query, rows, registredUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, email = _ref.email, passwordHash = _ref.passwordHash;
                _context.prev = 1;
                _context.next = 4;
                return _database["default"].query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *", [username, email, passwordHash]);
              case 4:
                _yield$pool$query = _context.sent;
                rows = _yield$pool$query.rows;
                registredUser = rows[0];
                _context.next = 9;
                return _database["default"].query("INSERT INTO users_favorite_coins (user_id,coins_ids) VALUES ($1, $2)", [registredUser.id, '']);
              case 9:
                return _context.abrupt("return", new User(registredUser));
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }));
      function insert(_x) {
        return _insert.apply(this, arguments);
      }
      return insert;
    }()
  }, {
    key: "getByEmail",
    value: function () {
      var _getByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
        var _yield$pool$query2, rows;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _database["default"].query("SELECT * FROM users WHERE email=$1 ", [email]);
              case 3:
                _yield$pool$query2 = _context2.sent;
                rows = _yield$pool$query2.rows;
                return _context2.abrupt("return", new User(rows[0] || []));
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
      function getByEmail(_x2) {
        return _getByEmail.apply(this, arguments);
      }
      return getByEmail;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _yield$pool$query3, rows;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _database["default"].query('SELECT * FROM users');
              case 3:
                _yield$pool$query3 = _context3.sent;
                rows = _yield$pool$query3.rows;
                return _context3.abrupt("return", rows.map(function (row) {
                  return new User(row);
                }));
              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));
      function getAll() {
        return _getAll.apply(this, arguments);
      }
      return getAll;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var _yield$pool$query4, rows;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _database["default"].query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);
              case 3:
                _yield$pool$query4 = _context4.sent;
                rows = _yield$pool$query4.rows;
                return _context4.abrupt("return", new User(rows[0] || []));
              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
  return User;
}();
exports["default"] = User;