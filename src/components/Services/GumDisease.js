import React from "react"
import Title from "../Title"
import Footer from "../Footer"
import prevention from "../../images/prevention.jpg"

function GumDisease() {
    return (
        <div>
            <Title 
                title = "Prevention, Fillings and Gum Disease"
            />
            <div className= "pad row">
                <div className = "col-lg-6">
                    <p>Tooth decay is one of the most common dental problems. It generally can occur in anyone, but is almost entirely preventable.</p>
                    <p>Tooth decay occurs when bacteria in the mouth convert sugars left on the tooth surface into acid, which slowly erodes the tooth. Over time, more and more of the tooth structure is dissolved and a hole appears.</p>
                    <p>Tooth decay can be prevented with good oral hygiene, appropriate fluoride exposure and a well-balanced diet. The dentists at Mascot Dental Clinic can show you how to brush and floss to help reduce the amount of bacteria left on the tooth surfaces. Use of fluoridated toothpaste and rinsing your mouth with water after food can make teeth more resistant to acid attacks. Minimizing sugary or acidic food and drinks can also help prevent decay.</p>
                    <p>Tooth decay can be painful, or it can be entirely symptomless. As the disease progresses, the tooth becomes weaker and the nerve may become infected. That is why it is important to have periodic check-ups and X-rays to ensure that any initial decay is identified early to prevent symptoms and stop progression.</p>

                </div>
                <div className = "col-lg-6">
                    <img src = {prevention} alt = "prevention" style = {{width: "100%"}} />
                </div>
                <div className = "boxshadow">
                    <p>Gum disease describes a range of conditions that affect the supporting structures of the teeth. Of these, the most common are gingivitis and periodontitis.</p>
                    <p>Gingivitis is the inflammation of the gums surrounding the teeth. It is a common and reversible condition. The inflammation is caused by bacteria and their by-products irritating the gums, causing redness, bleeding, swelling and pain. If left to progress, it can lead to periodontitis.</p>
                    <p>Periodontitis is a more chronic condition, also caused by bacteria. It occurs when bacteria burrow into the space between the tooth and the gum and cause permanent damage to the underlying bone and ligaments. If left untreated, periodontitis can lead to progressive loosening of the tooth and eventually tooth loss.</p>
                    <p>In recent years, poor gum health has also been linked to higher incidence of diabetes, heart disease and stroke.</p>
                </div>
                <p>Good oral hygiene is one of the most important factors in preventing tooth decay and gum disease. Our dentists will show you proper brushing and flossing techniques and identify any areas to monitor. With gingivitis, usually a clean is sufficient to remove plaque and calculus from the tooth surface. In periodontitis, you may need to have a ‘deep clean’ to remove debris from deeper within the gums. If necessary, we may also refer you to a periodontist (a gum disease specialist).</p>
            </div>
            <Footer />
        </div>
    )
}

export default GumDisease