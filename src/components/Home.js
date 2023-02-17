import React from "react";
import excited1 from "./../images/excited1.png";
import excited2 from "./../images/excited2.png";
import excited3 from "./../images/excited3.png";
import excited4 from "./../images/excited4.png";

const home = () => {
    return (
        <div>
            <div id="homebanner" />
            <div style={{ display: "flex", width: "100%", marginLeft: "32px", marginRight: "64px" }}>
              <p style={{ fontSize: "30px", marginRight: "64px" }}>
                  <img style={{ float: "left", width: "240px", height: "150px", marginRight: "32px" }} src={excited2} alt="Missing!" />
                  <b>We are so excited that you're here!!!</b> Let's face it, having a dog is fun...but the responsibility it carries is really important. What's 
                     even more important than that? Knowing enough about what you want and need in a dog to choose the right dog for <b>you</b> to begin with. 
              </p>
            </div>
            <div style={{ display: "flex", width: "100%", marginLeft: "32px", marginRight: "64px" }}>
              <p style={{ fontSize: "30px"}}>
                  <img style={{ float: "right", width: "240px", height: "150px", marginLeft: "32px", marginRight: "64px" }} src={excited1} alt="Missing!" />
                    With such a big decision to make, where do you start? You don't have to go far - because where you start is with <b>yourself</b>. It means asking
                    yourself the right questions and taking certain aspects of your life into account: Your home, your job, your lifestyle and what you are willing to commit to.
                    These are not small details!
              </p>
            </div>
            <div style={{ display: "flex", width: "100%", marginLeft: "32px", marginRight: "64px" }}>
              <p style={{ fontSize: "30px", marginRight: "64px" }}>
                  <img style={{ float: "left", width: "240px", height: "150px", marginRight: "32px" }} src={excited3} alt="Missing!" />
                    Live in a single-bedroom basement apartment in a big city? A Great Dane is <b>NOT</b> for you. Live in an area where hunting and gunfire is commonplace?
                    A hyper-active and sound-sensitive Chihuahua won't make for a peaceful household. Do regularly visiting family members have dog allergies from excessive 
                    shedding and dander?? A Golden Retriever will leave them in tears...literally.        
              </p>
            </div>
            <div style={{ display: "flex", width: "100%", marginLeft: "32px", marginRight: "64px" }}>
              <p style={{ fontSize: "30px"}}>
                  <img style={{ float: "right", width: "240px", height: "150px", marginLeft: "32px", marginRight: "64px" }} src={excited4} alt="Missing!" />
                    Your dog will not just be a pet, or an accessory for your house. They become family, and they make your house a home through unconditional love and devotion. 
                    They don't do it for any reason other than because <b>you</b> become their world when you adopt them. Out there, somewhere...a lucky dog is waiting for you. <b><i>This 
                    is where your search begins!</i></b> 
              </p>
            </div>
        </div>
    );
};
export default home;
