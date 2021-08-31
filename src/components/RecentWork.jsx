import "./RecentWork.css";
import worldCitizenImg from "../images/worldcitizen.png";
import HNGRedesignImg from "../images/hng.png";

import ArrowRight from "../icons/arrow-right.svg";

function RecentWork() {
   return (
      <section className="RecentWork">
         <div className="RecentWork__sectionTop">
            <h2 className="sectionTitle">Recent Work</h2>

            <div className="RecentWork__filterContainer">
               <span className="active">Work</span>
               <span>Ongoing Projects</span>
            </div>
         </div>

         <div className="RecentWork__itemsContainer">
            <div className="RecentWork__item">
               <div className="RecentWork__itemTop">
                  <img src={worldCitizenImg} alt="RecentWork Image" />
               </div>
               <div className="RecentWork__itemBottom">
                  <p className="RecentWork__highlights">
                     UX Research, Wireframes, Hi FIdelity, Usability Testing
                  </p>
                  <h5 className="RecentWork__title">World Citizen</h5>
                  <h4 className="RecentWork__descr">
                     An Online Cothes Donation App
                  </h4>

                  <div className="RecentWork__link">
                     <a href="#">
                        View Case Study{" "}
                        <img src={ArrowRight} alt="Icon" aria-hidden="true" />
                     </a>
                  </div>
               </div>
            </div>

            <div className="RecentWork__item">
               <div className="RecentWork__itemTop">
                  <img src={HNGRedesignImg} alt="RecentWork Image" />
               </div>
               <div className="RecentWork__itemBottom">
                  <p className="RecentWork__highlights">UI/UX Design</p>
                  <h5 className="RecentWork__title">HNG Re-Design</h5>
                  <h4 className="RecentWork__descr">A Website Re-design</h4>

                  <div className="RecentWork__link">
                     <a href="#">
                        View Redesign{" "}
                        <img src={ArrowRight} alt="Icon" aria-hidden="true" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default RecentWork;
