import React from "react";
import Title from "../Title"
import NewPatientPart from "./NewPatientPart"
import Footer from "../Footer"

function NewPatient() {
    return (
        <div>
            <Title
                title = "New Patient Special"
            />
            <NewPatientPart />
            <Footer />
        </div>
    )
}

export default NewPatient