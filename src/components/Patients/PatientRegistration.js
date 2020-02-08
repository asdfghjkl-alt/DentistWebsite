import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import Form from "react-bootstrap/Form"
function PatientRegistration() {
  const [newPatient, setNewPatient] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    DateOfBirth: '',
    address: '',
    description: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPatient(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
  }

  function handleChangeMobile(event) {
    const { name, value } = event.target;
    setNewPatient(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
    var phoneNumber = newPatient.phone;
    if (validator.isMobilePhone(phoneNumber) === false) {
      console.log('Wrong');
    } else {
      console.log('Valid Phone Number');
    }
  }

  let history = useHistory();
  async function onSubmit(event) {
    event.preventDefault();
    const Patient = {
      firstName: newPatient.firstName,
      lastName: newPatient.lastName,
      phone: newPatient.phone,
      DateOfBirth: newPatient.DateOfBirth,
      address: newPatient.address,
      email: newPatient.email,
      description: newPatient.description
    };
    console.log(Patient);

    try {
      await axios.post('/patients/add', Patient);
    } catch (error) {
      console.error(error);
    }
    history.push('/patients');
  }

  return (
    <div className='pad'>
      <div className='boxshadow'>
        <h3>Register Here:</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control
              required
              type='text'
              name='firstName'
              value={newPatient.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control
              required
              type='text'
              name='lastName'
              value={newPatient.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number: </Form.Label>
            <Form.Control
              required
              type='text'
              name='phone'
              value={newPatient.phone}
              onChange={handleChangeMobile}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth: </Form.Label>
            <Form.Control
              type='text'
              className='form-control'
              name='DateOfBirth'
              value={newPatient.DateOfBirth}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={newPatient.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address: </Form.Label>
            <Form.Control
              type='text'
              name='address'
              value={newPatient.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <textarea
              type='text'
              rows='3'
              className='form-control'
              name='description'
              value={newPatient.description}
              onChange={handleChange}
            />
          </Form.Group>

          <div className='form-group'>
            <input type='submit' value='Register' className='btn btn-primary' />
          </div>
        </Form>
      </div>
    </div>
  );
}
export default PatientRegistration;
