const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  position: String,
  qualification: String,
  description: String,
  bookingIDs: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
