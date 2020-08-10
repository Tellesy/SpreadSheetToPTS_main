import {generateFile} from '../tools/filleGenerator';

import express from 'express';
var router = express.Router();
/* GET users listing. */
router.get('/',generateFile ,function(req, res, next) {
  //createFile();
  console.log("Heeey");
  res.send('respond with a resource');
});

export default router;