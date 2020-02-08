import React from "react";
import Title from "../Title"
import InvisalignPart from "./InvisalignPart"
import Footer from "../Footer"

function Invisalign() {
    return (
        <div className = "row">
            <Title
                title = "Invisalign"
            />
            <InvisalignPart />
            <Footer />
        </div>
    )
}

export default Invisalign;