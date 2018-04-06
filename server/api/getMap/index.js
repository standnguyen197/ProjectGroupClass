var express = require('express');
var router = express.Router();

/* GET SINGLE Auth BY ID */
router.get('/:id', function(req, res, next) {
  Auth.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
