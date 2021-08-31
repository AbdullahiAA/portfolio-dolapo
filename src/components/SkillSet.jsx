import "./SkillSet.css";

import browserIcon from "../icons/browser.svg";
import computerIcon from "../icons/computer.svg";
import wireframeIcon from "../icons/wireframe.svg";
import cellphoneIcon from "../icons/cellphone.svg";
import UIDesignIcon from "../icons/ui-design.svg";
import qualitativeIcon from "../icons/qualitative-research.svg";

function SkillSet() {
   return (
      <section className="skillSet">
         <div className="skillSet__intro">
            <h2 className="sectionTitle">Skill Set</h2>
            <p>My awesome expertise</p>
         </div>

         <div className="skillSet__container">
            <div className="skillSet__Item">
               <img
                  src={qualitativeIcon}
                  alt="Skill Set Icon"
                  aria-hidden="true"
               />
               <h5>UX Research</h5>
               <p>
                  We can carry out detailed user research for both qualitative
                  and quantitative methods
               </p>
            </div>

            <div className="skillSet__Item">
               <img
                  src={UIDesignIcon}
                  alt="Skill Set Icon"
                  aria-hidden="true"
               />
               <h5>UI/UX Design</h5>
               <p>
                  When it comes to how a product will look and the overall
                  experience, we are great at providing the best.
               </p>
            </div>

            <div className="skillSet__Item">
               <img
                  src={cellphoneIcon}
                  alt="Skill Set Icon"
                  aria-hidden="true"
               />
               <h5>Mobile App Design</h5>
               <p>
                  Our experience cut across different mobile interfaces. You can
                  trust us with your project.
               </p>
            </div>

            <div className="skillSet__Item">
               <img src={browserIcon} alt="Skill Set Icon" aria-hidden="true" />
               <h5>Website Design</h5>
               <p>
                  Having to think about how you can attract customers to your
                  websites can sometime be annoyiing. But we can achieve all
                  that for you.
               </p>
            </div>

            <div className="skillSet__Item">
               <img
                  src={computerIcon}
                  alt="Skill Set Icon"
                  aria-hidden="true"
               />
               <h5>Graphic Design</h5>
               <p>
                  With combination of graphic design experience, we can deliver
                  amazing designs for you.
               </p>
            </div>

            <div className="skillSet__Item">
               <img
                  src={wireframeIcon}
                  alt="Skill Set Icon"
                  aria-hidden="true"
               />
               <h5>Wireframing & Prototyping</h5>
               <p>
                  Let’s give you a general sketch about how your project will
                  look before the final launch.
               </p>
            </div>
         </div>
      </section>
   );
}

export default SkillSet;
