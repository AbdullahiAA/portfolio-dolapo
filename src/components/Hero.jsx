import "./Hero.css";

function Hero() {
   return (
      <section className="hero">
         <div className="hero__left">
            <div className="hero__info">
               <h1>Hi, I’m Dolapo</h1>

               <p>
                  I’m a product Designer with passion for buiding and designing
                  great digital products that makess people’s life easier. I ‘m
                  experinced in carrying out UX research, usability testing, and
                  brainstorming solution ideas.
               </p>

               <p>
                  When im not designing, i love reading, watching movies,
                  singing and spendig time with loved ones.
               </p>
            </div>

            <div className="hero__socials">
               <h2>Let’s connect:</h2>

               <div className="hero__socialIcons">
                  <a href="#">Icon</a>
                  <a href="#">Icon</a>
                  <a href="#">Icon</a>
               </div>
            </div>
         </div>

         <div className="hero__right">
            {/* Pluged In with CSS */}
            <div className="hero__rightImg"></div>
         </div>
      </section>
   );
}

export default Hero;
