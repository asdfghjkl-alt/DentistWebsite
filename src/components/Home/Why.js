import React from "react";
import Plus from "../../images/icons8-plus-math-64.png"
import Support from "../../images/support.png"

function Why() {
    return (
        <div>
            <div className = "row info">
                <div className = "col-md-4 col-sm-12 why">
                    <div>
                        <h3><strong>Why Edward Dentist</strong></h3>
                        <p></p>
                        <p>
                        Edward Dentist is a fully integrated dental clinic, which under one roof provides you all possible solutions in the varied field of Dentistry, whether related to Esthetic, Emergency Dentistry, Cosmetic, General Or Full
                        Mouth rehabilitation."
                        </p>
                    </div>
                </div>
                <div className = "center col-md-4 col-sm-12">
                    <img className = "icon" src = {Plus} alt = "plus" />
                    <div className="desc">
                        <h5>Clinic Facilities</h5>
                        <p>Our Clinic are fully high-tech with equipped laboratory cosmetic dentistry, friendly and dedicated staff</p>
                    </div>
                </div>
                <div className = "center col-md-4 col-sm-12">
                    <img className = "icon" src = {Support} alt = "support" />
                    <div className="desc">
                        <h5>Infection Control</h5>
                        <p>Safety Is Our Priority - We follows the standardized sterilization methods which are rigorously and consistently practiced.</p>
                    </div>
                </div>
            </div>
            <div className = "container-fluid"></div>
        </div>
    );
}

export default Why