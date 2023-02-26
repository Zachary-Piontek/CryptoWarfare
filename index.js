"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _app = _interopRequireDefault(require("./app.js"));
/*******************************************************************************
 * This is the entry point for the server. This is separated from all of the
 * route registration to help Supertest auto-start the server without the server
 * having already been started. See
 * https://github.com/visionmedia/supertest/issues/697 for more context on this
 * issue.
 *
 * Any deployments will need to execute the transpiled version of this file.
 ******************************************************************************/

_dotenv["default"].config();
var server = _app["default"].listen(parseInt(process.env.PORT || '7890'), function () {
  console.log('Started server on ', server.address());
});