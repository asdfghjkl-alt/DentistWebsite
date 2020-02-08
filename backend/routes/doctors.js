const router = require('express').Router();
let Doctor = require('../models/doctorModel');

// @route    GET doctors/
// @desc     Show all doctors
// @access   Private
router.get('/', async (req, res) => {
  try {
    const allDoctors = await Doctor.find();
    res.json(allDoctors);
  } catch (error) {
    res.status(500).send('server error');
  }
});

// @route    POST doctors/add
// @desc     Add a doctor
// @access   Private
router.post('/add', async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    password,
    position,
    qualification,
    description
  } = req.body;

  try {
    let doc = await Doctor.findOne({ email });
    if (doc) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Doctor already exists' }] });
    }
    var docs = new Doctor({
      firstName,
      lastName,
      phone,
      email,
      password,
      position,
      qualification,
      description
    });
    const newDoc = await docs.save();
    console.log(newDoc)
    res.json('newDoc added' + newDoc);
  } catch (error) {
    res.status(500).send('server error');
  }
});

router.route('/:id').delete((req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
