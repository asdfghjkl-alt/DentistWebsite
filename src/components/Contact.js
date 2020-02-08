import React from 'react';
import Form from "react-bootstrap/Form"

function Contact() {
  return (
    <div className='pad'>
      <div className='boxshadow'>
        <h3>Contact Us</h3>
        <Form action="mailto:liuedward180@gmail.com">
          <Form.Group>
            <Form.Control
              type='text'
              required
              placeholder='Your Name:'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              required
              placeholder='Phone Number'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='email'
              required
              placeholder='email'
            />
          </Form.Group>
          <Form.Group>
            <textarea
              type='text'
              rows='3'
              className='form-control'
              placeholder='how can we help'
            />
          </Form.Group>
          <div className='form-group'>
            <input type='submit' value='Submit' className='btn btn-primary' />
          </div>
        </Form>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.578725434976!2d151.07866981520763!3d-33.77155048068322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a682b5543781%3A0xc7b62432f7be0044!2sEpping%20Dental%20Centre!5e0!3m2!1sen!2sau!4v1578434413663!5m2!1sen!2sau'
          title='Epping Dental Centre'
          width='600px'
          height='450px'
          frameBorder='0'
          allowfullscreen=''
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;
