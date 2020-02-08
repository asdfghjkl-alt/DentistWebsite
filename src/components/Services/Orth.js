import React from "react"
import Title from "../Title"
import yeti from "../../images/yeti.png"
import invisalign from "../../images/invisalign.png"
import ADJ from "../../images/ADJ.png"
import Braces from "../../images/Braces.png"
import Footer from "../Footer"

function Orth() {
    return (
        <div>
            <Title 
                title = "Orthodontics"
            />
            <div className="pad">
                <div style = {{textAlign: "center"}}>
                    <img src = {yeti} alt = "yeti" />
                    <p>The sad fact is, 10 years after completion of orthodontic treatment, only 30-50% of patients retain satisfactory teeth alignment¹. After 20 years, this further drops to only 10% of patients¹. While most changes to teeth alignment are due to late jaw changes between the ages of 20-30 years, tooth movement and crowding can still continue in your 50's or 60's².</p>
                    <p>Crooked teeth can also affect your oral health - when teeth overlap, they can wear down unevenly and are harder to keep clean. Plaque and tartar build up faster, which leads to gum infections such as gingivitis and periodontitis.</p>
                </div>
                <p style = {{color: "grey"}}>1. Yu, Y. (2013). Interventions for managing relapse of the lower front teeth after orthodontic treatment (Review). Cochrane Database of Systematic Reviews.</p>
                <p style = {{color: "grey"}}>2. Blake, M. and Bibby, K. (1998). Retention and stability: A review of the literature. American Journal of Orthodontics and Dentofacial Orthopedics, 114(3), pp.299-306.</p>
                <hr />
                <h1><strong>At Mascot Dental Clinic, we offer a range of options to help you move those rogue teeth back.</strong></h1>
                <hr />
                <div className = "row">
                    <div className = "col-lg-4">
                        <img src = {invisalign} alt = "invisalign" style = {{width: "100%"}} />
                        <h5><strong>Clear Aligners</strong></h5>
                        <p>Clear Aligners are a simple, invisible way to straighten teeth. The clear aligners are custom-made in the USA and are almost undetectable - most people won't even notice you are wearing them! You only need to remove them when you're eating or brushing your teeth.</p>
                    </div>
                    <div className = "col-md-4">
                        <img alt = "ADJ" src = {ADJ} style = {{width: "100%"}} />
                        <h5><strong>Cfast</strong></h5>
                        <p>Cfast is a fast, effective system of clear braces for adults looking to focus on only their front teeth. Using a combination of traditional orthodontic techniques, ceramic braces and white nickel titanium wires, Cfast can move your teeth much quicker than conventional braces.</p>
                    </div>
                    <div className = "col-md-4">
                        <img alt = "braces" src = {Braces} style = {{width: "100%"}} />
                        <h5><strong>Conventional Braces</strong></h5>
                        <p>If your teeth have moved too much, if there have been drastic changes to your bite or if you have never have orthodontic treatment before, then conventional braces may be suitable for you. These may be metal braces or ceramic braces.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orth