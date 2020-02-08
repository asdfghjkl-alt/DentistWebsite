import React from "react";
import Patient from "../../images/patient.jpg"

function NewPatientPart() {
    return (
        <div className = "row pad">
            <div className = "col-lg-6">
                <p>Our New Patient Special includes:</p>   
                <ul>
                    <li><strong>Comprehensive Examination:</strong> On your first visit to Mascot Dental Clinic, we will complete a comprehensive survey of your teeth and other oral structures. This will allow us to give you personalized advice and treatment options.</li>
                    <li><strong>Scale and clean: </strong>This involves removal of calculus (tartar) buildup around your teeth.</li>
                    <li><strong>X-rays: </strong>If you have fillings or your teeth are crowded or close together, we may not be able to see under and around some areas of your teeth. X-rays will allow us to see if there are any hidden problems and we can prevent those from becoming bigger problems.</li>
                    <li><strong>Fluoride Treatment: </strong>Fluoride has a long history of preventing and even stopping tooth decay. A 6-monthly application of fluoride will help strengthen your teeth and prevent decay.</li>
                </ul>
                <p><i>Ts & Cs: New patients only, limit of 1 per patient. Normally valued at $280, cannot be exchanged for cash or vouchers.</i></p>
                <a href = "/bookings/add">Book an appointment now.</a>
            </div>
            <div className = "col-lg-6">
                <img src = {Patient} alt = "patient" style = {{width: "100%"}} />
            </div>
        </div>
    )
}

export default NewPatientPart