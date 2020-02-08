import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table"

function ExercisesList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resExs = await axios.get('/doctors');
        setDoctors(resExs.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  async function deleteDoctor(id) {
    try {
      await axios.delete('/doctors/' + id);
      setDoctors(prevUs => {
        return prevUs.filter(el => el._id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style = {{padding: "10%"}}>
      <div className='boxshadow'>
        <h3>Doctors</h3>
        <Table>
          <thead className='thead-light' style = {{width: "100%"}}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Position</th>
              <th>Qualification</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr>
                <td>{doctor.firstName}</td>
                <td>{doctor.lastName}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.email}</td>
                <td>{doctor.password}</td>
                <td>{doctor.position}</td>
                <td>{doctor.qualification}</td>
                <td>{doctor.description}</td>
                <td>
                  <button
                    onClick={() => deleteDoctor(doctor._id)}
                    className='btn btn-link btn-xs'
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
export default ExercisesList;
