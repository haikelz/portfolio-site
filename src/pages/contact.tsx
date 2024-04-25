import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/utils/constants";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

export default function Contact() {
  const [isSuccessSendmessage, setIsSuccessSendmessage] =
    useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  useTitle("Contact - Haikel");

  async function sendmessage(): Promise<void> {
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement | string,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSuccessSendmessage(true);
    } catch (err: any) {
      throw new Error("Failed to send message!");
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendmessage();
  }

  return (
    <>
      <Layout>
        <Heading as="h1">Contact</Heading>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full space-y-6 mt-6"
        >
          <div className="flex w-full justify-center flex-col items-start">
            <label htmlFor="guest-email">
              <Paragraph className="text-sm font-semibold">Email</Paragraph>
            </label>
            <Input
              name="guest-email"
              placeholder="Your Email...."
              className="mt-1 w-full"
              type="email"
              required
            />
          </div>
          <div className="flex w-full justify-center flex-col items-start">
            <label htmlFor="message">
              <Paragraph className="text-sm font-semibold">Message</Paragraph>
            </label>
            <Textarea
              name="message"
              placeholder="Your Message...."
              className="mt-1 w-full h-44"
              required
            />
          </div>
          <Button type="submit" className="font-bold">
            Submit!
          </Button>
        </form>
      </Layout>
      {isSuccessSendmessage ? (
        <div className="flex justify-center items-center w-full fixed top-0 backdrop-blur-md min-h-screen z-50">
          <div className="rounded-lg px-6 py-4 dark:bg-neutral-900 flex justify-center items-center flex-col text-center">
            <Heading as="h3" className="font-bold">
              Success send message!
            </Heading>
            <Button
              onClick={() => setIsSuccessSendmessage(false)}
              className="font-bold mt-3 w-24"
            >
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
