import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingsForPatient() {
  const [bookings, setBookings] = useState([]);
  // bookings are all the bookings to display in this page
  const [chosenDate, setChosenDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const fetchData = async () => {
      try {
        const bksReceived = await axios.get(
          '/bookings/vacant/' +
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
        );
        setBookings(bksReceived.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function handleChangeDate(date) {
    setChosenDate(date);

    const fetchData = async () => {
      try {
        const bksReceived = await axios.get(
          '/bookings/vacant/' +
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate()
        );
        setBookings(bksReceived.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }

  function addDays(date, days) {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  }

  return (
    <div style = {{marginTop: "100px"}}>
      <div className='form-group'>
        <label>Select a Date: </label>
        <div>
          <DatePicker
            selected={chosenDate}
            onChange={handleChangeDate}
            dateFormat='yyyy-MM-dd'
            minDate={new Date()}
            maxDate={addDays(new Date(), 6)}
          />
        </div>
      </div>
      <h3>Bookings for Patient</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Assigned By</th>
            <th>Patient Phone</th>
            <th>Treatment Type</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, key) => {
            const dateRec = new Date(booking.date);
            return (
              <tr key={booking._id}>
                <td>
                  {booking.doctorID.firstName + ' ' + booking.doctorID.lastName}
                </td>
                <td>
                  {dateRec.getFullYear() +
                    '/' +
                    ('0' + (dateRec.getMonth() + 1)).slice(-2) +
                    '/' +
                    ('0' + dateRec.getDate()).slice(-2)}
                </td>
                <td>
                  {('0' + dateRec.getHours()).slice(-2) +
                    ':' +
                    ('0' + dateRec.getMinutes()).slice(-2)}
                </td>
                <td>{booking.assignedBy}</td>
                <td>{booking.patientPhone}</td>
                <td>{booking.treatmentType}</td>
                <td>{booking.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default BookingsForPatient;
