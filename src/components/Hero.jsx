import "./Hero.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
                  <a
                     href="https://www.linkedin.com/in/god-spromise-joseph-719207128"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="LinkedIn"
                  >
                     <LinkedInIcon />
                  </a>
                  <a
                     href="https://www.facebook.com/profile.php?id=100071972744926"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Facebook"
                  >
                     <FacebookIcon />
                  </a>
                  <a
                     href="https://www.instagram.com/invites/contact/?i=b7818iz6gv0n&utm_content=mkdt808"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Instagram"
                  >
                     <InstagramIcon />
                  </a>
                  <a
                     href="https://twitter.com/joseph_dolapo?s=08"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Twitter"
                  >
                     <TwitterIcon />
                  </a>
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
