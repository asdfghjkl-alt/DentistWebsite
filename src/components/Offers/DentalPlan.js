import React from "react";
import Title from "../Title"
import DentalPlanPart from "./DentalPlanPart"
import Footer from "../Footer"

function DentalPlan() {
    return (
        <div>
            <Title
                title = "National Dental Plan"
            />
            <DentalPlanPart />
            <Footer />
        </div>
    )
}

export default DentalPlan