"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _pg = _interopRequireDefault(require("pg"));
var _dotenv = _interopRequireDefault(require("dotenv"));
// Even if redundantly done elsewhere. It needs to be done here though because
// the environment variable is used immediately. It cannot wait for later.
// Trying to run code inside of modules _before_ imports are done is impossible
// in a true module (which we use here).

_dotenv["default"].config();
var pool = new _pg["default"].Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE == 'true' && {
    rejectUnauthorized: false
  }
});
pool.on('connect', function () {
  return console.log('🐘 Postgres connected');
});
var _default = pool;
exports["default"] = _default;