"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setupDb;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _promises = _interopRequireDefault(require("node:fs/promises"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _database = _interopRequireDefault(require("./database.js"));
function setupDb() {
  return _promises["default"].readFile(_nodePath["default"].resolve("./sql/setup.sql"), {
    encoding: 'utf-8'
  }).then(function (sql) {
    return _database["default"].query(sql);
  }).then(function () {
    if (process.env.NODE_ENV !== 'test') {
      console.log('✅ Database setup complete!');
    }
  })["catch"](function (error) {
    var dbNotFound = error.message.match(/database "(.+)" does not exist/i);
    if (dbNotFound) {
      var _dbNotFound = (0, _slicedToArray2["default"])(dbNotFound, 2),
        err = _dbNotFound[0],
        db = _dbNotFound[1];
      console.error('❌ Error: ' + err);
      console.info("Try running `createdb -U postgres ".concat(db, "` in your terminal"));
    } else {
      console.error(error);
      console.error('❌ Error: ' + error.message);
    }
  });
}