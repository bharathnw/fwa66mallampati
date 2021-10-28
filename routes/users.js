var express = require('express');
var router = express.Router();
var count = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
    count++;
    res.send(`Users tried to access this page ${count} times`);
});

module.exports = router;