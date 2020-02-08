const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  doctorID: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  patientID: { type: Schema.Types.ObjectId, ref: 'Patient' },
  assignedBy: { type: String, default: 'vacant' },
  treatmentType: String,
  note: String
});
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
