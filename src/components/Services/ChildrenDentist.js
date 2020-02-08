import React from "react"
import Title from "../Title"
import smile from "../../images/smiling-child.jpg"
import mouth from "../../images/Mouth-Guard.png"

function ChildrenDentist() {
    return(
        <div>
            <Title 
                title = "Children's Dentistry"
            />
            <div className = "row pad">
               <div className = "col-lg-9">
                    <p>Your child’s first visit to the dentist is very important and will shape how they feel about going to the dentist for life. With a relaxed and open approach, children respond very well during treatment and can even be calmer than many adults. At Mascot Dental Clinic, we are committed to making your child’s dental experiences fun and comfortable.</p> 
                    <h1><strong>Importance of Regular Checkups for Kids</strong></h1>
                    <p>Most parents don’t realise that even kids need regular dental check-ups. The Australian Dental Association recommends that a child’s first dental visit should be when their first tooth becomes visible or when they reach 12 months old, and then every 6-12 months depending on their risk of decay. This way, any problems with your child’s mouth, teeth, gums and lips can be identified early. Developing a routine with regular check-ups helps to familiarise your child with our team and our clinic, and will help us get to know them as well!</p>  
               </div>
               <div className= "col-lg-3">
                   <img src = {smile} alt = "smile" />
               </div>
               <div>
                   <h1><strong>First Visit</strong></h1>
                   <p>On their first visit, we will do a thorough examination of your child’s teeth, gums, jaws and mouth and will be able to advise you on how you can help look after their teeth and prevent decay.</p>
                   <p>We provide a full range of treatment for your children, including:</p>
                   <ul>
                       <li>Oral examination and X-rays</li>
                       <li>Scale and clean to remove tartar, plaque and stains</li>
                       <li>Fillings, fissure sealants and extractions</li>
                   </ul>
                   <div className = "boxshadow">
                       <h1><strong>Children’s Orthodontics</strong></h1>
                       <p>Are you worried about the alignment of your child’s teeth? The American Association of Orthodontists recommends that every child should have an orthodontic assessment at the first recognition of an orthodontic problem or no later than 7 years of age. At this stage, your child will have a mix of baby and permanent teeth. This allows us to identify if an orthodontic problem is developing. If you wait for all the permanent teeth to come through before seeking an orthodontic opinion, it could make correction of the problem more difficult, since the face and jaws have almost completed their growth.</p>
                       <p>If there is a problem developing, our dentists at Mascot Dental Clinic can discuss with you what the best early treatment modality is. The goal of early treatment is to create a better environment for the adult teeth to come through. Sometimes it may involve the use of appliances or exercises to improve tongue posture and swallowing patterns. If your child’s palate is too narrow, an expander may be used to widen the jaw.</p>
                   </div>
               </div>
               <div className = "row" style = {{marginTop: "50px"}}>
                <div className= "col-lg-6">
                    <h1><strong>Mouthguards</strong></h1>
                    <p>The most common cause of dental injuries comes from playing sport or recreational activities where impact can damage the jaw and teeth. A custom fit mouthguard is like a seat belt for your teeth – it won’t stop collisions but you’ll be sure that your teeth will be protected. Also, unlike boil-and-bite mouthguards, custom mouthguards won’t slip or fall out of your mouth and don’t require any effort to keep in, leaving you free to concentrate on your game.</p>
                    <p>At Mascot Dental Clinic, we will assess your mouth to provide the best fit, size, coverage and thickness of mouthguard for your sport. This typically requires 2 appointments – the first to take impressions of your teeth and the second to fit it by your dentist to ensure it is comfortable and secure.</p>
                </div>
                <div className = "col-lg-6">
                    <img src = {mouth} alt = "mouth" />
                </div>
               </div>
               <div>
                   <h4><strong>General Tips:</strong></h4>
                   <ul>
                       <li>Wear the mouthguard at all times, including training sessions.</li>
                       <li>Rinse the mouthguard in soap and warm (not hot) water after each use. Allow to air dry.</li>
                       <li>Disinfect the mouthguard from time to time using a mouthwash.</li>
                       <li>Do not leave the mouthguard in direct sunlight as heat can damage it.</li>
                       <li>Ask your dentist to inspect your mouthguard at every check-up.</li>
                       <li>Replace the mouthguard if damaged.</li>
                       <li>Replace a child’s mouthguard every 12-18 months as growth and new teeth can alter the fit.</li>
                       <li>Replace an adult’s mouthguard after dental treatment or tooth loss.</li>
                   </ul>
               </div>
            </div>
        </div>
    )
}

export default ChildrenDentist;