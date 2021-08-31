import "./About.css";
import aboutImg from "../images/about-img.png";

function About() {
   return (
      <section className="about">
         <div className="about__left">
            <div className="about__img">
               <img src={aboutImg} alt="Dolapo's Profile" />
            </div>
         </div>
         <div className="about__right">
            <div className="about__topSection">
               <h2 className="sectionTitle">About</h2>
            </div>

            <p>
               During the global lock down was when I discovered my passion for
               designs, although from elementary school, I have little
               experience with crafts. Having a background in Geology and
               transitioning into a new career was quite challenging but my zeal
               kept me going. I started learning on my own for about 3 months
               until I had an internship opportunity with Codetutors and Giz for
               the role graphic and product design intern.
            </p>
            <p>
               Thus, my journey so far has been super-duper amazing. It was a
               priviledge to be thought by one of the best in tech industry.
               Currently, I just concluded a four (4) month internship with
               Zuri*I4G as a UI/UX designer. For me learning is never ending and
               ever ready to leverage this skill set to offer value to the world
               at large.
            </p>

            <button className="about__downloadBtn">Download CV (Pdf)</button>
         </div>
      </section>
   );
}

export default About;
