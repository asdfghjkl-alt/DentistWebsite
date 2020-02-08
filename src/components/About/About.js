import React from 'react';
import { Link } from 'react-router-dom';
import about from "../../images/about-us.jpg"
import group from "../../images/Family.jpg"
import recycling from "../../images/jw-recycling.jpg"
import infection from "../../images/infection-control.jpg"
import Title from "../Title"
import Footer from "../Footer"

function About() {
  return (
    <div>
      <Title 
        title = "About Us"
      />
      <div className = "pad row">
        <h5 style = {{textAlign: "center"}}><strong>Welcome to Mascot Dental Clinic, your friendly local dental clinic.We are a professional and comprehensive dental care team with a strong focus on oral health promotion.</strong></h5>
        <div style = {{marginTop: "40px"}} className = "col-md-6">
          <img style={{width: "100%"}} alt = "group" src = {group} />
        </div>
        <div className = "col-lg-6" style = {{marginTop: "40px"}}>
          <p>We love seeing patients with a happy, healthy and satisfied smile. We will work with you to provide the care and service you deserve to help your teeth and mouths stay healthy. In particular, we are passionate about prevention. Getting a car serviced every year is cheaper than getting it fixed when something goes wrong – it’s the same with your teeth! That’s why we strongly encourage regular dental visits. If you want to keep your teeth for life, we’ll do our best to help you get there.</p>
          <Link to ="/bookings/add">Book Now!</Link>
        </div>
        <div className = "row" style = {{marginTop: "40px"}}>
          <div className = "col-md-6">
            <p>Our team includes experienced dentists who graduated from various universities in Australia and New Zealand. We are a close-knit group who strive for excellence in dental care and work together to ensure the best treatment outcomes.</p>
            <p>Our dental nurses are skilled at assisting the dentists in all aspects of dental treatment. They are also friendly and welcoming and can help with any queries you may have.</p>
            <Link to ="/bookings/add">Book Now!</Link>
          </div>
          <div className = "col-md-6">
            <img src = {about} alt = "about" style={{width: "100%"}} />
          </div>
        </div>
        <div className = "row" style = {{marginTop: "40px"}}>
          <div className = "col-md-6">
            <img src = {recycling} alt = "recycling" style={{width: "100%"}} />
          </div>
          <div className = "col-md-6">
            <p>Our team includes experienced dentists who graduated from various universities in Australia and New Zealand. We are a close-knit group who strive for excellence in dental care and work together to ensure the best treatment outcomes.</p>
            <p>Our dental nurses are skilled at assisting the dentists in all aspects of dental treatment. They are also friendly and welcoming and can help with any queries you may have.</p>
          </div>
        </div>
        <div className = "row" style = {{marginTop: "40px"}}>
          <div className = "col-md-6">
            <p>Our team includes experienced dentists who graduated from various universities in Australia and New Zealand. We are a close-knit group who strive for excellence in dental care and work together to ensure the best treatment outcomes.</p>
            <p>Our dental nurses are skilled at assisting the dentists in all aspects of dental treatment. They are also friendly and welcoming and can help with any queries you may have.</p>
          </div>
          <div className = "col-md-6">
            <img src = {infection} alt = "infection" style={{width: "100%"}} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;