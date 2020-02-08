import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table"
import axios from 'axios';

function BookingList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patients = await axios.get('/patients');
        setPatients(patients.data);
        console.log(patients.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  async function deletePatient(id) {
    try {
      await axios.delete('/patients/' + id);
      setPatients(prevBk => {
        return prevBk.filter(el => el._id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='pad'>
      <div className = "boxshadow">
        <h3>Logged Patients</h3>
        <Table>
          <thead className='thead-light'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>Address</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, key) => (
              <tr key={patient._id}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.phone}</td>
                <td>{patient.email}</td>
                <td>{patient.DateOfBirth}</td>
                <td>{patient.address}</td>
                <td>{patient.description}</td>
                <td>
                  <button
                    onClick={() => deletePatient(patient._id)}
                    className='btn btn-link btn-sm'
                    title='Delete'
                    data-toggle='tooltip'
                    style={{ display: 'inline', float: 'left' }}
                  >
                    <i className='fas fa-trash-alt'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default BookingList;
