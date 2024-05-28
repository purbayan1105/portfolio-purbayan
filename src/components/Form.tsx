import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";
import { Github, Linkedin } from "lucide-react";
import { FaGithub, FaGoogleDrive, FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import Form2 from "./Form2";
import Link from "next/link";

const Form = () => {
  return (
    <>
      <div
        id="contacts"
        className="grid grid-cols-1 md:grid-cols-2 mt-24 md::mx-24 pb-10 mx-8">
        <Form2 />
        <div className="space-y-5 lg:pl-16 mt-8 md:mt-0">
          <div className="text-3xl font-normal poppins">Contact Me</div>
          <div>
            <span className="text-green-500">Phone Number: </span>
            <span>9123309893</span>
          </div>
          <div>
            <span className="text-green-500">Email: </span>
            <span>purbayan.kol@gmail.com</span>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <span className="text-green-500">Socials: </span>
              <span>
                <Link
                  href="https://www.linkedin.com/in/purbayan-ghosh-a01b37194/"
                  target="_blank">
                  <FaLinkedin />
                </Link>
              </span>
              <span>
                <Link
                  href="https://github.com/purbayan1105/uberui-project"
                  target="_blank">
                  <FaGithub />
                </Link>
              </span>
              <span>
                <Link
                  href="https://drive.google.com/drive/u/1/folders/1AGxTsZI0X7DdtaX2uy5Ua7ZU-XIyaJJo"
                  target="_blank">
                  <FaGoogleDrive />
                </Link>
              </span>
              <span>
                <Link href="https://x.com/11_purbayan" target="_blank">
                  <ImTwitter />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
