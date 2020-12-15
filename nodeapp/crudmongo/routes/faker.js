var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  const faker = require("faker");

  let plantacao = []
  for (let i = 0; i < 10; i += 1) {
    const tag = lorem.words(10);
    const temperatura = faker.random.number();
    const umidade = faker.random.number();
    const clorofila = faker.random.number();
    const reflectancia = faker.random.number();

    let newPlant = {
      tag,
      temperatura,
      umidade,
      reflectancia,
      clorofila
    };

    global.db.insertOne({newPlant},  (err, result) => {
            if(err) { return console.log(err); }
        })
  }
})


module.exports = router;
