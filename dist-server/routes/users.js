"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _filleGenerator = require("../tools/filleGenerator");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();
/* GET users listing. */


router.get('/', _filleGenerator.generateFile, function (req, res, next) {
  //createFile();
  console.log("Heeey");
  res.send('respond with a resource');
});
var _default = router;
exports.default = _default;