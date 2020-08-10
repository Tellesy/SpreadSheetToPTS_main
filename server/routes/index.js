
import express from 'express';
var router = express.Router();
router.get('/',function(req, res, next) {

  console.log("Heeey");
  res.render('index', { title: 'ExpressDF' });
});
export default router;