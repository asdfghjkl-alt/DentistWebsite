const router = require('express').Router();
const Booking = require('../models/bookingModel');

// @route    GET bookings/
// @desc     Show all bookings
// @access   Private
router.get('/', async (req, res) => {
  try {
    const foundBookings = await Booking.find()
      .populate('doctorID', ['firstName', 'lastName'])
      .sort({ doctorID: 1, timeSlot: 1 });
    res.json(foundBookings);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

// @route    GET bookings/:date
// @desc     Show bookings on a specific day yyyy-mm-dd
// @access   Private
router.get('/:date', async (req, res) => {
  const [yyyy, mm, dd] = req.params.date.split('-');
  const y = parseInt(yyyy);
  const m = parseInt(mm);
  const d = parseInt(dd);

  try {
    const foundBookings = await Booking.find({
      date: {
        $gte: new Date(y, m - 1, d),
        $lt: new Date(y, m - 1, d + 1)
      }
    })
      .populate('doctorID', ['firstName', 'lastName'])
      .sort({ doctorID: 1, timeSlot: 1 });
    res.json(foundBookings);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

// @route    GET bookings/vacant/:date
// @desc     Show vacant bookings on a specific day yyyy-mm-dd
// @access   Private
router.get('/vacant/:date', async (req, res) => {
  const [yyyy, mm, dd] = req.params.date.split('-');
  const y = parseInt(yyyy);
  const m = parseInt(mm);
  const d = parseInt(dd);

  try {
    const foundBookings = await Booking.find({
      date: {
        $gte: new Date(y, m - 1, d),
        $lt: new Date(y, m - 1, d + 1)
      },
      assignedBy: 'vacant'
    })
      .populate('doctorID', ['firstName', 'lastName'])
      .sort({ doctorID: 1, timeSlot: 1 });
    res.json(foundBookings);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

// @route    POST bookings/add
// @desc     Add a booking for a doctor
// @access   Private
router.post('/add', async (req, res) => {
  const {
    date,
    timeSlot,
    doctorID,
    patientID,
    assignedBy,
    treatmentType,
    note
  } = req.body;

  try {
    const booking = new Booking({
      date,
      timeSlot,
      doctorID,
      patientID,
      assignedBy,
      treatmentType,
      note
    });

    const newBooking = await booking.save();
    res.json('new booking added. ' + newBooking);
  } catch (error) {
    res.status(500).send('server error: ' + error.message);
  }
});

// @route    POST bookings/add-day
// @desc     Add bookings for a doctor on a 'dateAssigned'
//           from specified 'morningStart' to 'morningEnd'
//           and from 'afternoonStart' to 'afternoonEnd', inclusive
//           with 15 minutes increment
// @access   Private
router.post('/add-day', async (req, res) => {
  const {
    dateAssigned,
    morningStart,
    morningEnd,
    afternoonStart,
    afternoonEnd,
    doctorID,
    patientID,
    assignedBy,
    treatmentType,
    note
  } = req.body;
  const increment = 15;

  var morningStartDate = new Date(dateAssigned);
  morningStartDate.setHours(
    morningStart.split(':')[0],
    morningStart.split(':')[1]
  );
  var morningEndDate = new Date(dateAssigned);
  morningEndDate.setHours(morningEnd.split(':')[0], morningEnd.split(':')[1]);
  var afternoonStartDate = new Date(dateAssigned);
  afternoonStartDate.setHours(
    afternoonStart.split(':')[0],
    afternoonStart.split(':')[1]
  );
  var afternoonEndDate = new Date(dateAssigned);
  afternoonEndDate.setHours(
    afternoonEnd.split(':')[0],
    afternoonEnd.split(':')[1]
  );
  var nTS = 0;

  async function addTimeSlots(timeStart, timeEnd) {
    let minute = timeStart.getMinutes();
    let timeSlot = '';
    let timePt = new Date(timeStart);

    while (timePt <= timeEnd) {
      timeSlot =
        ('0' + timePt.getHours()).slice(-2) +
        ':' +
        ('0' + timePt.getMinutes()).slice(-2);
      const booking = new Booking({
        date: timePt,
        timeSlot,
        doctorID,
        patientID,
        assignedBy,
        treatmentType,
        note
      });
      try {
        await booking.save();
        minute += increment;
        nTS++;
        timePt.setHours(timeStart.getHours(), minute);
      } catch (error) {
        res.status(500).send('server error: ' + error.message);
      }
    }
  }

  await addTimeSlots(morningStartDate, morningEndDate);
  await addTimeSlots(afternoonStartDate, afternoonEndDate);
  res.json(nTS + ' new bookings added');
});

// @route    POST bookings/add-date-range
// @desc     Add bookings for a doctor on day range from 'dateStart' to 'dateEnd', inclusive
//           from specified 'morningStart' to 'morningEnd', inclusive
//           and from 'afternoonStart' to 'afternoonEnd', inclusive
//           with 15 minutes increment
// @access   Private
router.post('/add-date-range', async (req, res) => {
  const {
    dateStart,
    dateEnd,
    morningStart,
    morningEnd,
    afternoonStart,
    afternoonEnd,
    doctorID,
    patientID,
    assignedBy,
    treatmentType,
    note
  } = req.body;
  const increment = 15;
  var nTS = 0;

  async function addTimeSlots(timeStart, timeEnd) {
    let minute = timeStart.getMinutes();
    let timeSlot = '';
    let timePt = new Date(timeStart);

    while (timePt <= timeEnd) {
      timeSlot =
        ('0' + timePt.getHours()).slice(-2) +
        ':' +
        ('0' + timePt.getMinutes()).slice(-2);
      const booking = new Booking({
        date: timePt,
        timeSlot,
        doctorID,
        patientID,
        assignedBy,
        treatmentType,
        note
      });
      try {
        await booking.save();
        minute += increment;
        nTS++;
        timePt.setHours(timeStart.getHours(), minute);
      } catch (error) {
        res.status(500).send('server error: ' + error.message);
      }
    }
  }

  var datePt = new Date(dateStart);
  const dateEndDate = new Date(dateEnd);
  while (datePt <= dateEndDate) {
    var morningStartDate = new Date(datePt);
    morningStartDate.setHours(
      morningStart.split(':')[0],
      morningStart.split(':')[1]
    );
    var morningEndDate = new Date(datePt);
    morningEndDate.setHours(morningEnd.split(':')[0], morningEnd.split(':')[1]);
    var afternoonStartDate = new Date(datePt);
    afternoonStartDate.setHours(
      afternoonStart.split(':')[0],
      afternoonStart.split(':')[1]
    );
    var afternoonEndDate = new Date(datePt);
    afternoonEndDate.setHours(
      afternoonEnd.split(':')[0],
      afternoonEnd.split(':')[1]
    );

    await addTimeSlots(morningStartDate, morningEndDate);
    await addTimeSlots(afternoonStartDate, afternoonEndDate);

    datePt.setDate(datePt.getDate() + 1);
  }
  res.json(nTS + ' new bookings added');
});

// @route    GET bookings/:id
// @desc     Get a booking by ID
// @access   Private
router.get('/:id', async (req, res) => {
  try {
    const foundBooking = await Booking.findById(req.params.id);
    res.json(foundBooking);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json('Booking deleted.');
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

// @route    POST bookings/update/:id
// @desc    Update a booking by ID
// @access   Private
router.post('/update/:id', async (req, res) => {
  try {
    const bookingUpdate = await Booking.findById(req.params.id);
    // bookingUpdate.doctorName = req.body.doctorName;
    // bookingUpdate.date = req.body.date;
    // bookingUpdate.patientID.firstName = req.body.patientName;
    // bookingUpdate.timeSlot = req.body.timeSlot;
    bookingUpdate.assignedBy = req.body.assignedBy;
    bookingUpdate.treatmentType = req.body.treatmentType;
    bookingUpdate.note = req.body.note;
    await bookingUpdate.save();
    res.json('Booking updated!');
  } catch (error) {
    res.status(500).send('server error');
  }
});
module.exports = router;
