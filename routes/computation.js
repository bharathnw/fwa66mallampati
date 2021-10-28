var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let myOutputstr = `For \nMath.acosh: ${Math.acosh(req.query.x)} 
    | Math.log1p: ${Math.log1p(req.query.x)} 
    | Math.tan(): ${Math.tan(req.query.y)} 
    | Math.sqrt(): ${Math.sqrt(req.query.y)}`;
    res.send(myOutputstr);
});

module.exports = router;