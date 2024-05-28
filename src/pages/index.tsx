import Academic from "@/components/Academic";
import Cards from "@/components/Cards";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import WorkE from "@/components/WorkE";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Academic />
      <WorkE />
      <Hobbies />
      <Form />
      <Footer />
    </>
  );
};

export default index;
