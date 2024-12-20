import Academic from "@/components/Academic";
import Announcement from "@/components/Announcement";
import Cards from "@/components/Cards";
import Certificate from "@/components/Certificate";
import Cms from "@/components/Cms";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import FrontendSkills from "@/components/FrontendSkills";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import MyskillArray from "@/components/MyskillArray";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Semifooter from "@/components/Semi-footer";
import Socials from "@/components/Socials";
import WorkE from "@/components/WorkE";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <MyskillArray />
      <Projects />
      <Cms />
      <FrontendSkills />
      <Academic />
      <Certificate />
      <WorkE />
      <Hobbies />
      <Form />
      <Semifooter />
      <Footer />
    </>
  );
};

export default index;
