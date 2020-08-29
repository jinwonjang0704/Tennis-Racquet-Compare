const router = require('express').Router();
let Racquet = require('../models/racquet.model');

router.route('/').get((req, res) => {
  Racquet.find()
    .then(racquets => res.json(racquets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const headsize = Number(req.body.headsize);
  const length = Number(req.body.length);
  const weight = Number(req.body.weight);
  const swingweight =  Number(req.body.swingweight);
  const balancepoint = req.body.balancepoint;
  const stringpattern = req.body.stringpattern;
  const image = req.body.image;

  const newRacquet = new Racquet({
    name,
    headsize,
    length,
    weight,
    swingweight,
    balancepoint,
    stringpattern,
    image,
  });

  newRacquet.save()
  .then(() => res.json('Racquet added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Racquet.findById(req.params.id)
    .then(racquet => res.json(racquet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Racquet.findByIdAndDelete(req.params.id)
    .then(() => res.json('Racquet deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Racquet.findById(req.params.id)
    .then(racquet => {
      racquet.name = req.body.name;
      racquet.headsize = Number(req.body.headsize);
      racquet.length = Number(req.body.length);
      racquet.weight = Number(req.body.weight);
      racquet.swingweight = Number(req.body.swingweight);
      racquet.balancepoint = req.body.balancepoint;
      racquet.stringpattern = req.body.stringpattern;
      racquet.image = req.body.image;

      racquet.save()
        .then(() => res.json('Racquet updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;