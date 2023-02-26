"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _routes = _interopRequireDefault(require("./routes.js"));
var _error = _interopRequireDefault(require("./middleware/error.js"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
/*******************************************************************************
 * All general routes are handled in this file - all routes agnostic of the API
 * itself. This includes global middleware, general handlers (like 404 and error
 * handling) as well as static asset hosting.
 *
 * For routes for your API, see routes.ts.
 ******************************************************************************/

_dotenv["default"].config();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(process.env.API_PREFIX || '', (0, _routes["default"])());
// Ordinarily we'd use __dirname as a base directory, but issues that arise from
// https://github.com/kulshekhar/ts-jest/issues/1174 cause problems with not
// being able to use import.meta.url (our module equivalent of __dirname). Our
// settings are covered according to the various guides. Using $PWD (what
// process.cwd() returns) may not be safe in all occasions, but should be good
// enough since we control the deployment context.
var publicDir = _nodePath["default"].join(process.cwd(), 'public');
app.use(_express["default"]["static"](publicDir));
app.use(_error["default"]);

// Sending our index.html to the client on a 404 is required to make HTML5
// routes. HTML5 routes are the routes using the paths instead of the
// fake paths after the anchor (#) in the URL.
app.all('*', function (req, res) {
  res.status(404).sendFile(_nodePath["default"].join(publicDir, 'index.html'));
});
var _default = app;
exports["default"] = _default;