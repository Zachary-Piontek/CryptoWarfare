"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _users = _interopRequireDefault(require("./controllers/users.js"));
var _favorites = _interopRequireDefault(require("./controllers/favorites.js"));
/*******************************************************************************
 * Routes here belong to the API. All routes here assume API_PREFIX. In local
 * development, this is assumed to be /api/v1. See the Webpack configuration
 * (webpack.config.js) for the re-writes to accomplish that.
 *
 * Since API_PREFIX adds the /api/v1, you needn't do it here in your routes.
 ******************************************************************************/
// Here we demonstrate that JavaScript files can be included from TypeScript
// files on the server side.
var _default = function _default() {
  var prefixRouter = _express["default"].Router();
  // Think of the poor foos.
  prefixRouter.use('/users', _users["default"]);
  prefixRouter.use('/favorites', _favorites["default"]);
  return prefixRouter;
};
exports["default"] = _default;