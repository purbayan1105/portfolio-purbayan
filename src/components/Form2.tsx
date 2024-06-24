import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);

    const serviceID = "service_rreqvcb";
    const templateID = "template_kl6lvye";
    const publicKey = "LPIAUQbtAUhMD22bT";

    const templateParams = {
      from_name: name,
      to_name: "Purbayan",
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Email Sent Successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="lg:mx-8 bg-blue ">
      <form className="poppins space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5  bg-blue-600 dark:bg-green-500"></div>
          <span className="text-2xl font-bold text-blue-600 dark:text-green-500 ">
            Get In Touch
          </span>
        </div>
        <Input
          placeholder="Your Full Name"
          color="primary"
          className="w-[19rem] "
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          isRequired
        />
        <Input
          placeholder="Enter Your Mail"
          color="primary"
          variant="flat"
          className="w-[19rem]"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          isRequired
        />

        <Textarea
          className="w-[19rem]"
          color="primary"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          variant="flat"
          placeholder="Enter Your Message"></Textarea>

        <Button
          type="submit"
          className="w-[19rem] font-semibold text-white"
          color="success">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form2;
