import About from "../components/About";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import SkillSet from "../components/SkillSet";

function Home() {
   return (
      <div className="home">
         <Header />
         <Hero />
         <About />
         <SkillSet />
         <RecentWork />
         <Experiences />
         <Footer />
      </div>
   );
}

export default Home;
