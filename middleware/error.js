"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var handler = function handler(err, req, res, next) {
  var status = err.status || 500;
  res.status(status);
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  res.send({
    status: status,
    message: err.message
  });
};
var _default = handler;
exports["default"] = _default;