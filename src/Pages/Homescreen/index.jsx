import HeroSection from "../HeroSection";
import MySkills from "../MySkills"
import AboutMe from "../AboutMe";
import MyProjects from "../MyProjects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home () {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyProjects />
            <ContactMe />
            <Footer />
        </>
    );
}
