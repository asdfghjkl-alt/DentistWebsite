import React from "react";
import invisalign from "../../images/invisalign.png"

function InvisalignPart() {
    return (
        <div className = "pad row">
            <div className = "col-md-6">
                <p>Have you always wondered what your teeth would look like if they were straight? Invisalign's patented ClinCheck software can show you how your teeth will look after Invisalign treatment!</p> 
                <p>With every check-up appointment at Mascot Dental Clinic, we are now offering <strong>FREE Invisalign ClinCheck</strong> - just mention this offer! You can now visualize how Invisalign can change your smile and get a free movie simulation of how your teeth will move - all before committing to treatment!</p>
                <p>For more information, visit our <a href = "/offers/invisalign">Invisalign</a> page or <a href = "/contact">Contact Us</a> today!</p>
                <p>Ts & Cs: To be used in conjunction with a consultation ($50). May be used in conjunction with the New Patient Special ($199). ClinCheck is valued at $300. Cannot be exchanged for cash or vouchers.</p>
            </div>
            <div className = "col-md-6">
                <img src = {invisalign} alt = "invisalign" />
            </div>
        </div>
        
    );
}

export default InvisalignPart
