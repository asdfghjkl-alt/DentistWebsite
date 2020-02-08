import React from "react"
import Title from "../Title"
import Footer from "../Footer"
import tripod from "../../images/Tripod.png"
import laser from "../../images/Laser.png"
import digital from "../../images/digital.jpg"

function OurTech() {
    return (
        <div>
            <Title 
                title = "Our Tech"
            />
            <div  className = "row pad">
                <div className = "col-md-6">
                    <iframe style = {{width: "100%", height: "315px"}} src="https://www.youtube.com/embed/ixo0V6rNqi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title = "Is your dentist ripping you off" allowfullscreen></iframe>
                </div>
                <div className = "col-md-6">
                    <h2><strong>Digital Dental Impressions with Trios</strong></h2>
                    <p>Digital dental impressions are the newest, most accurate way to capture a digital image of your teeth onto the computer. From measuring how much your teeth move throughout orthodontic treatment, to evaluating how much tooth structure is being worn away through grinding habits, the award-winning 3Shape Trios scanner is the latest technology in impression-taking.</p>
                    <p>Our most popular cosmetic dental procedures, such as Invisalign/ClearCorrect, dental veneers and orthodontics, require moulds to be take of your teeth to plan your ideal smile. Traditional procedures such as crowns, bridges, onlays and implants also require dental impressions. Now, using our digital scanner TRIOS, we can take these scans without the messy impression material tickling your throat!</p>
                </div>
                <div className = "col-md-6">
                    <h5><strong>How Does it Work?</strong></h5>
                    <p>The Trios scanner is simply held over your teeth where it will quickly and accurately take images of all sides of the teeth and gums. A high quality 3D image of your mouth is then generated in full colour. This allows us to clearly identify treatment areas and help us design the smile you've always wanted. The time lapse function can also help identify if your teeth have moved or changed over time.</p>
                </div>
                <div className = "col-md-6">
                    <img src = {tripod} alt = "trios" />
                </div>
                <div className = "row boxshadow">
                    <div className = "col-md-6">
                        <img src = {laser} alt = "laser" />
                    </div>
                    <div className = "col-md-6">
                        <h2><strong>Laser Dentistry</strong></h2>
                        <p>Lasers are used commonly in medical practice, but they are relatively new in dentistry. Lasers, which are an extremely focused beam of light, can be used in different aspects of dentistry, including gum reshaping (gingivectomy), removal of overgrown gums, biopsies, and the treatment of infected root canals and periodontal disease.</p>
                        <p>At Mascot Dental Clinic, we use a soft tissue laser, the Gemini. It is the only dual-wavelength laser on the market, and so our dentists can choose the ideal wavelength to use for different purposes. Because a laser cauterizes the tissue as it cuts, there is less bleeding, less discomfort, and faster post-operative healing.</p>
                        <p>For more information about Laser Dentistry, <a href = "/contact">contact us</a> today!</p>
                    </div>
                </div>
                <div className = "row" style = {{marginTop: "40px"}}>
                    <div className = "col-md-6">
                        <h2><strong>Digital X-rays</strong></h2>
                        <p>X-rays are an essential part of dental health maintenance and treatment planning. Most parts of the teeth are hidden underneath the gums and bone, and so we need to take x-rays to ensure these areas are healthy. Dental x-rays can pick up problems long before they become visible in the mouth, and so they are essential in preventing problems before they become a bigger issue.</p>
                        <p>At Mascot Dental Clinic, we use digital x-rays, and so the radiation can be 50-80 times less than film x-rays. Our dental x-rays give a similar amount of radiation as you would receive on a 1-2 hour flight! This means that you can have x-rays taken even if you’re pregnant, although please let us know if you’re not comfortable doing so. They are also almost instant - we can see the x-ray and identify any problems straight away.</p>
                    </div>
                    <div className = "col-md-6" >
                        <img src = {digital} alt = "digital" style = {{width: "100%"}} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OurTech;