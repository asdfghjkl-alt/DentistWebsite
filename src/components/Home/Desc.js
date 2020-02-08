import React from "react";
import Edward from '../../images/IMG_2164.jpeg'
import Sing from "../../images/IMG_2385.jpeg"
import HappyFace from "../../images/IMG_2404.jpeg"

function Desc() {
    return (
        <div className = "welcome">
            <h2 className = "bold">Welcome To Your Family Dentist Epping</h2>
            <p></p>
            <p className = "bold">
                For Dental Appointments, please phone us on (02) 9869 3003
            </p>
            <p>We’ll take care of all your general dentistry needs. From an instant appointment for emergency tooth pain conditions, to proactive and preventative dental services and smile design transformations, we are your family dentists Epping.</p>
            <p></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio blanditiis illo, sapiente officia excepturi ratione minima architecto nostrum quo aliquam! Rerum quam voluptas sapiente laudantium eum asperiores optio pariatur cumque.</p>
            <p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea nulla consequatur ad reprehenderit. Quam illum officia nisi eaque labore repudiandae explicabo! Aliquid similique nulla asperiores libero iste eum unde.</p>
            <p></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum dolorem tempore est ab asperiores cum perferendis odit laboriosam maxime? Error beatae aperiam nesciunt architecto magni obcaecati itaque similique sit?</p>

            <h2 className = "bold padded">Our Edward Dentist - What services do we offer?</h2>

            <div className = "row">
                <div className = "gallery col-md-4 col-sm-12">
                    <img src={Edward} alt="Forest" />
                    <div className="desc"><strong>Teeth Cleansing</strong></div>
                </div>
                <div className = "gallery col-md-4 col-sm-12">
                    <img src={Sing} alt="Forest" />
                    <div className="desc"><strong>Mouthwashing</strong></div>
                </div>
                <div className = "gallery col-md-4 col-sm-12">
                    <img src={HappyFace} alt="Forest" />
                    <div className="desc"><strong>Making You happy Every Day!</strong></div>
                </div>
            </div>
        </div>
    );
}

export default Desc;