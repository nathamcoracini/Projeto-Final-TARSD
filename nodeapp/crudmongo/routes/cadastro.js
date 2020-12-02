var express = require('express');
var router = express.Router();

router.put('/:nome/:idade', function(req, res) {
  var nome = req.params.nome;
  var idade = parseInt(req.params.idade);
  console.log(nome);
  console.log(idade);
  global.db.insert({nome, idade}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/');
      })
})

module.exports = router;
