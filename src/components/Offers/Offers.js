import React from "react";
import Title from "../Title"
import InvisalignPart from "./InvisalignPart"
import DentalPlanPart from "./DentalPlanPart"
import NewPatientPart from "./NewPatientPart"
import Footer from "../Footer"

function Offers() {
    return (
        <div>
            <Title 
                title = "Special Offers"
            />
            <InvisalignPart />
            <DentalPlanPart />
            <NewPatientPart />
            <Footer />
        </div>
    )
}

export default Offers;