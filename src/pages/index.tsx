import Academic from "@/components/Academic";
import Announcement from "@/components/Announcement";
import Cards from "@/components/Cards";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import MyskillArray from "@/components/MyskillArray";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import WorkE from "@/components/WorkE";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MyskillArray />
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
