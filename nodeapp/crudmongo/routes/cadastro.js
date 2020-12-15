var express = require('express');
var router = express.Router();

router.put('/:tag/:temp/:umidade/:clorofila/:reflectancia', function(req, res) {
  var tag = req.params.tag;
  var temp = parseFloat(req.params.temp);
  var umidade = parseFloat(req.params.umidade);
  var clorofila = parseInt(req.params.clorofila);
  var reflectancia = parseFloat(req.params.reflectancia);

  global.db.insertOne({tag, temp, umidade, clorofila, reflectancia}, (err, result) => {
          if(err) { return console.log(err); }
      })
})

module.exports = router;
