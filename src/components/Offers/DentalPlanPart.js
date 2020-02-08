import React from "react";
import ndc from "../../images/ndc.png"

function DentalPlanPart() {
    return (
        <div className = "row pad">
            <div className = "col-lg-9">
                <p>We are now offering a payment plan option with National Dental Plan (NDP), powered by Certegy Ezi-Pay!</p>
                <p>With NDP, you can start treatment today and spread the cost over easy to manage fortnightly payments and best of all, there is No Interest Ever! You just need to be over 18 years of age, an Australian citizen/ permanent resident with a driver's licence and be employed over 30 hours per week.</p>
                <p>For more information, visit <a href = "/offers/plan">National Dental Plan</a> or <a href = "/contact">Contact Us</a> today!</p>
                <p><i>Ts & Cs: Fees, charges, terms, conditions and lending criteria apply.</i></p>
            </div>
            <div className = "col-lg-3">
                <img src = {ndc} alt = "ndp"  />
            </div>
        </div>
    )
}

export default DentalPlanPart