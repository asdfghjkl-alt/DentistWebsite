import React from "react";
import edward from "../images/Dentist-Office.jpg"

function Title(props) {
    return (
        <div>
            <div className="about" style={{backgroundImage: `url(${edward})`}}>
                <div className = "image about" style={{padding: '10%'}} >
                    <div style = {{color: 'white'}}>
                        <h1>{props.title}</h1>
                        <p>Home / {props.title}</p>
                    </div>
                </div>
            </div>
            {/* <div className = "about" style = {{backgroundColor: "rgb(240, 240, 240)", padding: "2%"}}>
                <div className = "image about">
                    <h1><i className='fas fa-tooth'></i> Epping Dental</h1>
                </div>
            </div> */}
        </div>
    )
}

export default Title;