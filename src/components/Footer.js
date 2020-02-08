import React from "react";
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/link.png"
import insta from "../images/insta.jpeg"

function Footer() {
    return (
        <div className = "row info">
            <div className = "col-md-6 col-sm-12 why">
                <h5><strong>About Us</strong></h5>
                <hr/>
                <p></p>
                <p>Your Edward Dentist is a state of art dental surgery located in Epping. We are open long hours, from 8am to 10pm and available for emergency treatments on weekends and public holidays, 7 days per week. And there is free parking
                available on site with other parking also available across the street, and for free in nearby Westfield.</p>
                <p></p>
                <p>Our LOCATIONS are as follows.</p>
                <p></p>
                <p>Edward DENTAL CLINIC: Suite 20-21, 33 Dorset St Epping NSW 2121</p>
            </div>
            <div className = "col-md-6 col-sm-12">
                <h5>Contact Us</h5>
                <hr/>
                <a className = "call" href="tel:98693003">
                    <h4>Call us: (02) 9869 3003</h4>
                </a>
                <p></p>
                <p>Open 7 Days - 8 am to 10 pm</p>
                <p></p>
                <div className = "row">
                    <div className = "gallery ico" style = {{width: "10%"}}>
                        <a href="https://facebook.com"><img src={facebook} alt="Forest" /></a>
                    </div>
                    <div className = "gallery ico" style = {{width: "10%"}}>
                        <a href="https://twitter.com"><img src={twitter} alt="Forest" /></a>
                    </div>
                    <div className = "gallery ico" style = {{width: "10%"}}>
                        <a href="https://au.linkedin.com"><img src={linkedin} alt="Forest" /></a>
                    </div>
                    <div className = "gallery ico" style = {{width: "10%"}}>
                        <a href="https://www.instagram.com"><img src={insta} alt="Forest" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;