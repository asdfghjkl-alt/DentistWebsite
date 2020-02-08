import React from "react";
import Tooth from "../../images/Toothmagnify.png"
import Title from "../Title"
import Kids from "../../images/Kids.png"
import Orth from "../../images/Orthodontics.png"
import Footer from "../Footer"

function Services() {
    return (
        <div>
            <Title 
                title = "Our Services"
            />
            <div className = "pad row">
                <a href = "/services/fillings" className = "col-lg-4">
                    <div style = {{textAlign: "center"}}>
                        <img src = {Tooth} alt = "tooth" className = "imageservice" style = {{width: "20%"}} />
                        <p style = {{color: "black"}}>Prevention, Fillings and Gum Disease</p>
                    </div>
                </a>
                <a href = "/services/child" className = "col-lg-4">
                    <div style = {{textAlign: "center"}}>
                        <img src = {Kids} alt = "kids" className = "imageservice" style = {{width: "20%"}} />
                        <p style = {{color: "black"}}>Children's Dentistry</p>
                    </div>
                </a>
                <a href = "/services/orthodontics" className = "col-lg-4">
                    <div style = {{textAlign: "center"}}>
                        <img src = {Orth} alt = "orth" className = "imageservice" style = {{width: "20%"}} />
                        <p style = {{color: "black"}}>Orthodontics</p>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Services