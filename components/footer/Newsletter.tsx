"use client";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail]: any = React.useState("");
  const [successMessage, setSuccessMessage]: any = React.useState("");
  const [errorMessage, setErrorMessage]: any = React.useState("");
  const handleSubmit = (e: any): any => {
    e.preventDefault();

    emailjs
      .send(
        "service_wjegzfb",
        "template_viocs3k",
        {
            email: email,
            subject: "Inscription à la newsletter",
        },
        "skRifsIxEeTdBBSMR"
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");

          setEmail("");
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
    <Card className="w-[350px]  bg-neutral-100  border-neutral-300">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardDescription className="text-xs text-neutral-600 dark:text-neutral-400">
            Reste informé(e) des dernières actualités et promotions !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-1">
            <div className="flex flex-col">
              <Input
                type="email"
                placeholder="Entrez votre email"
                className="rounded"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            type="submit"
            className=" hover:scale-105 transition-all shadow-lg hover:shadow-2xl hover:bg-neutral-950 bg-neutral-900 text-neutral-100 rounded "
          >
            S'inscrire
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
