const router = require('express').Router();
let Patient = require('../models/patientModel');
const _ = require("lodash");

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

router.post('/add', async (req, res) => {
  const newPatient = new Patient({ 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    DateOfBirth: req.body.DateOfBirth,
    address: req.body.address,
    description: req.body.description
  });
  try {
    const newPat = await newPatient.save();
    res.json('newDoc added' + newPat);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

router.route('/:id').get((req, res) => {
  Patient.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
