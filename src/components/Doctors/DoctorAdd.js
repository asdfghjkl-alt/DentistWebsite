import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from "react-bootstrap/Form"

function DoctorAdd() {
  const [doctors, setDoctors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    position: '',
    qualification: '',
    description: '',
  });
  function onChange(event) {
    const { name, value } = event.target;
    setDoctors(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
    console.log(value)
  }

  let history = useHistory();
  async function onSubmit(event) {
    event.preventDefault();
    const doctor = {
      firstName: doctors.firstName,
      lastName: doctors.lastName,
      phone: doctors.phone,
      email: doctors.email,
      password: doctors.password,
      position: doctors.position,
      qualification: doctors.qualification,
      description: doctors.description
    };
    console.log(doctor)
    try {
      await axios.post('/doctors/add', doctor);
    } catch (error) {
      console.error(error);
    }
    history.push('/doctors');
  }

  return (
    <div className='pad'>
      <div className='boxshadow'>
        <h3>Create New Doctor</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group style = {{width: "50%", float: "right"}}>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control
              required
              type='text'
              name='lastName'
              value={doctors.lastName}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group style = {{width: "50%", float: "right"}}>
            <Form.Label>First Name: </Form.Label>
            <Form.Control
              required
              type='text'
              name='firstName'
              value={doctors.firstName}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone: </Form.Label>
            <Form.Control
              required
              type='text'
              name='phone'
              value={doctors.phone}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={doctors.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={doctors.password}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position: </Form.Label>
            <Form.Control
              type='text'
              name='position'
              value={doctors.position}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Qualification: </Form.Label>
            <Form.Control
              type='text'
              name='qualification'
              value={doctors.qualification}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <textarea
              className = "form-control"
              name='description'
              value={doctors.description}
              onChange={onChange}
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
export default DoctorAdd;
