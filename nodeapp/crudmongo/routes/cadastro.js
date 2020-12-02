var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cadastro', { title: 'Novo Cadastro' });
});

router.put('/', function(req, res) {
  var nome = req.params.nome;
  var idade = parseInt(req.params.idade);
  global.db.insert({nome, idade}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/');
      })
})

module.exports = router;
