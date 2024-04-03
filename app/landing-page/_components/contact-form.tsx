"use client";
import React from "react";
import FormInputs from "./form-inputs";
import Timings from "./timings";
import useContactUs from "$/stores/us-contact-us";

export default function ContactForm() {
  const { formData } = useContactUs();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch("api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid lg:grid-cols-2 gap-12 bg-indigo-900/10 border border-blue-400/30 text-zinc-300 px-6 py-4"
    >
      <Timings />
      <FormInputs />
    </form>
  );
}
