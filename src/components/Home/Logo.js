import React from "react"
import Tooth from "../../images/Toothmagnify.png"
import Kids from "../../images/Kids.png"

function Logo() {
    return (
        <div className = "row">
            <div className = "col-md-9" style = {{padding: "10%"}}>
                <a href = "/" style = {{color: "black"}}><h1 style = {{marginBottom: "50px"}}><i className='fas fa-tooth'></i> Epping</h1></a>
                <h1><strong>Show Off a Healthy Smile</strong> At EPPING DENTAL CENTRE</h1>
            </div>
            <div style = {{marginBottom: "50px"}} className = "row">
                    <div className = "col-md-3" style = {{textAlign: "center"}}>
                        <a href = "/about" style = {{color: "black"}}>
                            <img src = {Kids} alt = "tooth" className = "imageservice" style = {{width: "50%"}} />
                            <h2><strong>Meet</strong> Our Team</h2>
                        </a>
                    </div>
                    <div className = "col-md-3"  style = {{textAlign: "center"}}>
                        <a href = "/services" style = {{color: "black"}}>
                            <img src = {Tooth} alt = "tooth" className = "imageservice" style = {{width: "50%"}} />
                            <h2><strong>Our</strong> Services</h2>
                        </a>
                    </div>
                    <div className = "col-md-3" style = {{textAlign: "center"}}>
                        <a href = "/about" style = {{color: "black"}}>
                            <img src = {Kids} alt = "tooth" className = "imageservice" style = {{width: "50%"}} />
                            <h2><strong>New</strong> Patients</h2>
                        </a>
                    </div>
                    <div className = "col-md-3" style = {{textAlign: "center"}}>
                        <a href = "/contact" style = {{color: "black"}}>
                            <img src = {Tooth} alt = "tooth" className = "imageservice" style = {{width: "50%"}} />
                            <h2><strong>Contact</strong> Us</h2>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Logo;