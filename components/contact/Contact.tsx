"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import { RiMailSendFill } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

function Contact(): any {
  const [name, setName]: any = useState("");
  const [subject, setSubject]: any = useState("");
  const [message, setMessage]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [successMessage, setSuccessMessage]: any = useState("");
  const [errorMessage, setErrorMessage]: any = useState("");

  const handleSubmit = (e: any): any => {
    e.preventDefault();

    // Send email using emailjs-com library
    // Replace the placeholders with your own email service details
    emailjs
      .send(
        "service_wjegzfb",
        "template_viocs3k",
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        "skRifsIxEeTdBBSMR"
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error: any) => {
          setErrorMessage(
            "There was an issue sending your message. Please try again later."
          );
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:w-[80%] w-full text-center md:m-auto mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start md:items-center gap-2 px-0 max-w-[700px] md:m-auto"
      >
        <Input
          type="text"
          className="rounded"
          placeholder="Name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          className="rounded"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          className="rounded"
          placeholder="Subject"
          value={subject}
          onChange={(e: any) => setSubject(e.target.value)}
          required
        />
        <Textarea
          placeholder="Message"
          className="rounded"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          required
        />
        <div className="text-start flex gap-2 flex-col md:flex-row ">
          <Button
            type="submit"
            className="rounded shadow-lg hover:shadow-2xl bg-sky-500 text-neutral-100  flex items-center justify-center w-max px-5 gap-2 hover:bg-sky-600 hover:scale-105 ease-in-out transition iconanim"
          >
            Envoyer <RiMailSendFill />
          </Button>
          <Button className="border shadow-lg hover:shadow-2xl border-neutral-950 text-neutral-950   hover:scale-105 transition  rounded">
            <a
              href="https://dlkdigitalagency.com"
              target="_blank"
              className="flex gap-2 items-center"
            >
              Visiter notre site <BsArrowRightShort />
            </a>
          </Button>
        </div>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
export default Contact;
