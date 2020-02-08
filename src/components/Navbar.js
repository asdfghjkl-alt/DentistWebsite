import React from 'react';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Navbars() {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "0px";
      document.getElementById("navbar").style.opacity = "0.8";
    } else {
      document.getElementById("navbar").style.padding = "5px 10px";
      document.getElementById("navbar").style.opacity = "1.0";
    }
  }
  return (
    <div>
      <Navbar style = {{position: "fixed", padding: "5px", zIndex: "99"}} className = "other" bg = "dark" expand = "lg" varient = "dark" id = "navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id = "basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href = "/bookings/add">
                <i className="fas fa-calendar-times"></i> REQUEST APPOINTMENT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href = "/contact">
                <i className="fas fa-phone"></i> CONTACT US
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className = "navbar-right">
            <Nav.Item>
              <a href = "www.facebook.com" className = "nav-link">
                <i className="fab fa-facebook"></i>
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href = "www.instagram.com" className = "nav-link">
                <i className="fab fa-instagram"></i>
              </a>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className = "nav-link" href = "tel:98693003">9869 3003</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar style = {{marginTop: "59px", zIndex: "1", backgroundColor: "rgb(211, 211, 211)"}} expand="lg" varient = "light" id = "navbar">
        {/* <Navbar.Brand id = "logo" href="/"><i className='fas fa-tooth'></i> Epping</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style = {{paddingLeft: "3.9%"}}>
            <Nav.Item>
              <Nav.Link href = "/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className = "dropdown">
              <Nav.Link href = "/about" className = "dropbtn">
                About
              </Nav.Link>
              <div className = "dropdown-content">
                <Nav.Link href="/about">Our Clinic</Nav.Link>
                <Nav.Link href="/about/team">Meet Our Team</Nav.Link>
                <Nav.Link href = "/about/ourtech">Our Tech</Nav.Link>
              </div>
            </Nav.Item>
            <Nav.Item className = "dropdown">
              <Nav.Link href = "/offers" className = "dropdown">
                Offers
              </Nav.Link>
              <div className = "dropdown-content">
                <Nav.Link href="/offers/invisalign">Invisalign</Nav.Link>
                <Nav.Link href="/offers/plan">National Dental Plan</Nav.Link>
                <Nav.Link href = "/offers/patient">New Patient Special</Nav.Link>
              </div>
            </Nav.Item>
            <Nav.Item className = "navbar-item dropdown">
              <Nav.Link href = "/services" className='dropbtn'>
                Services
              </Nav.Link>
              <div className = "dropdown-content">
                <Nav.Link href="/services/fillings">Prevention, Fillings and Gum Disease</Nav.Link>
                <Nav.Link href="/services/child">Children's Dentistry</Nav.Link>
                <Nav.Link href = "/services/orthodontics">Orthodontics</Nav.Link>
              </div>
            </Nav.Item>
          </Nav>
          <Nav className = "navbar-right" style = {{paddingRight: "3.9%"}}>
            <Nav.Item className = "dropdown">
              <Nav.Link href = "/patients/registration" className = "dropbtn">
                Patients
              </Nav.Link>
              <div className = "dropdown-content">
                <Nav.Link href="/patients/list">Patients List</Nav.Link>
                <Nav.Link href="/patients/registration">Patient Registration</Nav.Link>
              </div>
            </Nav.Item>
            <Nav.Item className = "dropdown">
              <Nav.Link href = "/contact" className = "dropbtn">
                Add Booking
              </Nav.Link>
              <div className = "dropdown-content">
                <Nav.Link href="/bookings/add">Online Booking</Nav.Link>
                  <Nav.Link to='/bookings'>Bookings</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </div>
            </Nav.Item>
            <Nav.Item className = "dropdown">
              <Nav.Link href = "/doctors">
                Doctors
              </Nav.Link>
              <div className = "dropdown-content">
                <Nav.Link href='/doctors'>Doctors</Nav.Link>
                <Nav.Link href='/doctors/add'>Add Doctor</Nav.Link>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbars;