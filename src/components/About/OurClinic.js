import React from 'react';
import group from "../../images/Jess.jpg"
import Title from "../Title"
import Footer from "../Footer"

function About() {
  return (
    <div>
      <Title 
        title = "Meet Our Team"
      />
      <div className = "pad row">
        <h5 style = {{textAlign: "center"}}><strong>Welcome to Mascot Dental Clinic, your friendly local dental clinic.We are a professional and comprehensive dental care team with a strong focus on oral health promotion.</strong></h5>
        <div style = {{marginTop: "40px"}} className = "col-md-3">
          <img style={{width: "100%"}} src = {group} alt = "Steven Hu" />
        </div>
        <div className = "col-lg-9" style = {{marginTop: "40px"}}>
          <h2><strong>Dr Steven Hu</strong></h2>
          <h2><strong>Principal Dentist</strong></h2>
          <h5><strong>BMedSci (USyd) BDent (Hons) (USyd) GradDip Ortho (UK) FICCDE IADFE</strong></h5>
          <p>As a child, Dr Jess needed a lot of dental work. However she had a gentle and understanding dentist, who made dental treatment easy and relaxing. This is what inspired her to become a dentist herself, and help others feel confident about going to the dentist.</p>
          <p>Jess graduated from the University of Sydney with a Bachelor of Dentistry (Honours) in 2010. As part of her dental degree, she went to East Africa and performed volunteer dental work in various small towns in the Democratic Republic of Congo. After graduating, Jess worked in the public dental clinics in Newcastle, Wallsend and Nelson Bay, observing specialists and gaining experience across multiple fields of dentistry. Afterwards, she moved back to Sydney to begin life in private practice. Jess finally settled down in Mascot, and opened Mascot Dental Clinic in 2014.</p>
          <p>While she enjoys most aspects of dentistry, Jess has particular interests in orthodontics <a href = "/offers/invisalign">(Invisalign/Clear Correct</a> and <a href = "/services/child">fixed braces for children and adults)</a>, <a href = "/services/fillings">cosmetic dentistry</a> and <a href = "#sleep">dental sleep medicine</a>. It never ceases to amaze her when tweaking small things in a person’s smile can boost their confidence, or how adjusting the position of the jaw can vastly improve the quality of sleep.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;