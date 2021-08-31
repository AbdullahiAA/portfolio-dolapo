import About from "../components/About";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import SkillSet from "../components/SkillSet";

function Home() {
   return (
      <div>
         {/* Header */}
         <Header />

         {/* Hero Section */}
         <Hero />

         {/* About Section */}
         <About />

         {/* Skill Set Section */}
         <SkillSet />

         {/* Recent Work Section */}
         <RecentWork />

         {/* Experiences Section */}
         <Experiences />

         {/* Footer */}
         <Footer />
      </div>
   );
}

export default Home;
