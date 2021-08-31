import "./Experiences.css";

function Experiences() {
   return (
      <section className="experiences">
         <div className="experiences__topSection">
            <h2 className="sectionTitle">Experiences</h2>
         </div>

         <div className="experiences__box">
            <div className="experiences__item">
               <p className="experiences__itemDate">Mar - June 2020</p>
               <h5 className="experiences__itemTitle">
                  UI/UX Designer - <span>Internship</span>
               </h5>
               <h4 className="experiences__itemRole">Codetutor*Giz</h4>
               <p className="experiences__itemDescr">
                  Conducting UX research on potential products and features.
                  Designing plugins for already existing website for cutomer
                  satisfaction.
               </p>
            </div>
            <div className="experiences__item">
               <p className="experiences__itemDate">April - July 2021</p>
               <h5 className="experiences__itemTitle">
                  UI/UX Designer - <span>Internship</span>
               </h5>
               <h4 className="experiences__itemRole">Zuri*I4G</h4>
               <p className="experiences__itemDescr">
                  Gather and evaluate user pain points in relation to user
                  satisfaction. Illustrate Design ideas using storyboards and
                  process flows.
               </p>
            </div>
         </div>
      </section>
   );
}

export default Experiences;
