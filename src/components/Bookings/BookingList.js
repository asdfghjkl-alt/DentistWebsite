import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Table from "react-bootstrap/Table"

function BookingList() {
  const [bookings, setBookings] = useState([]);
  // bookings are all the bookings to display in this page
  const [bookingEdit, setBookingEdit] = useState({});
  // bookingEdit is the booking record to be edited via Edit
  const [chosenDate, setChosenDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const fetchData = async () => {
      try {
        const bksReceived = await axios.get(
          '/bookings/' +
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
  }, [bookingEdit._id]); // reload whenever bookingEdit is saved

  // Edit the bookingEdit, Save, and Delete
  function onClickEdit(id) {
    var eBk = {};
    bookings.map(bk => {
      if (bk._id === id) {
        eBk = bk;
      }
    });
    setBookingEdit(eBk);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setBookingEdit(prevBk => {
      return {
        ...prevBk,
        [name]: value
      };
    });
  }

  function onClickSave(id) {
    const updateBooking = async () => {
      try {
        await axios.post('/bookings/update/' + id, bookingEdit);
      } catch (error) {
        console.error(error);
      }
    };
    updateBooking();
    setBookingEdit('');
  }

  async function deleteBooking(id) {
    try {
      await axios.delete('/bookings/delete/' + id);
      setBookings(prevBk => {
        return prevBk.filter(el => el._id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangeDate(date) {
    setChosenDate(date);

    const fetchData = async () => {
      try {
        const bksReceived = await axios.get(
          '/bookings/' +
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
    <div className = "pad" style = {{marginTop: "99px"}}>
      <div className = "boxshadow">
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
        <h3>Logged Bookings</h3>
        <Table>
          <thead className='thead-light'>
            <tr>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Assigned By</th>
              <th>Patient Phone</th>
              <th>Treatment Type</th>
              <th>Note</th>
              <th>Edit</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, key) => {
              const dateRec = new Date(booking.date);
              if (booking._id === bookingEdit._id) {
                return (
                  <Fragment key={bookingEdit._id}>
                    <tr className='form-group'>
                      <td>
                        {bookingEdit.doctorID.firstName +
                          ' ' +
                          bookingEdit.doctorID.lastName}
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
                      <td>
                        <select
                          className='form-control'
                          type='text'
                          name='assignedBy'
                          //value={bookingEdit.assignedBy}
                          defaultValue={bookingEdit.assignedBy}
                          onChange={handleChange}
                        >
                          <option value='vacant'>vacant</option>
                          <option value='admin'>admin</option>
                          <option value='patient'>patient</option>
                        </select>
                      </td>
                      <td>
                        <input
                          className='form-control'
                          type='text'
                          name='patientPhone'
                          value={bookingEdit.patientPhone}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <select
                          className='form-control'
                          type='text'
                          name='treatmentType'
                          //value={bookingEdit.treatmentType}
                          defaultValue={bookingEdit.treatmentType}
                          onChange={handleChange}
                        >
                          <option value=''></option>
                          <option value='Broken/Chipped tooth'>
                            Broken/Chipped tooth
                          </option>
                          <option value='Check and Clean'>Check and Clean</option>
                          <option value='Consultation'>Consultation</option>
                          <option value='Emergency'>Emergency</option>
                          <option value='Other'>Other</option>
                        </select>
                      </td>
                      <td>
                        <input
                          className='form-control'
                          type='text'
                          name='note'
                          value={bookingEdit.note}
                          onChange={handleChange}
                        />
                      </td>

                      <td>
                        <button
                          //type='submit'
                          onClick={() => onClickSave(bookingEdit._id)}
                          className='btn btn-link btn-sm'
                          title='Save'
                          data-toggle='tooltip'
                          style={{ display: 'inline', float: 'left' }}
                        >
                          <i className='fas fa-save'></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteBooking(booking._id)}
                          className='btn btn-link btn-sm'
                          title='Delete'
                          data-toggle='tooltip'
                          style={{ display: 'inline', float: 'left' }}
                        >
                          <i className='fas fa-trash-alt'></i>
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              } else {
                return (
                  <tr key={booking._id}>
                    <td>
                      {booking.doctorID.firstName +
                        ' ' +
                        booking.doctorID.lastName}
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
                    <td>
                      <button
                        onClick={() => onClickEdit(booking._id)}
                        className='btn btn-link btn-xs'
                        title='Edit'
                        data-toggle='tooltip'
                        style={{ display: 'inline', float: 'left' }}
                      >
                        <i className='fas fa-edit'></i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteBooking(booking._id)}
                        className='btn btn-link btn-xs'
                        title='Delete'
                        data-toggle='tooltip'
                        style={{ display: 'inline', float: 'left' }}
                      >
                        <i className='fas fa-trash-alt'></i>
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default BookingList;
