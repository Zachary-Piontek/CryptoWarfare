"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Favorite = _interopRequireDefault(require("../models/Favorite.js"));
var _authenticate = _interopRequireDefault(require("../middleware/authenticate.js"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
var _default = (0, _express.Router)().get('/', _authenticate["default"], /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var favorites;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Favorite["default"].getAll();
          case 3:
            favorites = _context.sent;
            res.status(200).json(favorites);
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()).get('/userfavorites', _authenticate["default"], /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var favorites;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Favorite["default"].getUserFavorites(req.user.id);
          case 3:
            favorites = _context2.sent;
            res.status(200).json(favorites);
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}()).get('/coins/userfavorites', _authenticate["default"], /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var favorites, coins_res, coins_json;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Favorite["default"].getUserFavorites(req.user.id);
          case 3:
            favorites = _context3.sent;
            if (favorites.coins_ids) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return", res.status(200).json([]));
          case 6:
            _context3.next = 8;
            return (0, _nodeFetch["default"])("".concat(COINGECKO_API, "&ids=").concat(favorites.coins_ids));
          case 8:
            coins_res = _context3.sent;
            _context3.next = 11;
            return coins_res.json();
          case 11:
            coins_json = _context3.sent;
            res.status(200).json(coins_json);
            _context3.next = 18;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);
          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}()).post('/add/userfavorites', _authenticate["default"], /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var coin_id, _yield$Favorite$getUs, coins_ids, exist, updatedFavorites;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            coin_id = req.body.coin_id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Favorite["default"].getUserFavorites(req.user.id);
          case 4:
            _yield$Favorite$getUs = _context4.sent;
            coins_ids = _yield$Favorite$getUs.coins_ids;
            coins_ids = coins_ids.split(',');
            exist = coins_ids.find(function (id) {
              return id === coin_id;
            });
            if (exist) coins_ids = coins_ids.filter(function (id) {
              return id !== coin_id;
            });else coins_ids.push(coin_id);
            coins_ids = coins_ids.join(',');
            _context4.next = 12;
            return _Favorite["default"].updateUserFavorites(req.user.id, coins_ids);
          case 12:
            updatedFavorites = _context4.sent;
            res.status(201).json(updatedFavorites);
            _context4.next = 19;
            break;
          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](1);
            next(_context4.t0);
          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 16]]);
  }));
  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
exports["default"] = _default;