"use client";
import React, { useState } from "react";
import FormInputs from "./form-inputs";
import Timings from "./timings";
import useContactUs from "$/stores/us-contact-us";
import Spinner from "$/components/Spinner";

export default function ContactForm() {
  const { formData } = useContactUs();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid grid-cols-2 gap-12 bg-indigo-900/10 border border-blue-400/30 text-zinc-300 px-6 py-4"
    >
      <Timings />
      {loading ? (
        <Spinner className="col-span-2 lg:col-span-1" />
      ) : (
        <FormInputs className="col-span-2 lg:col-span-1" />
      )}
    </form>
  );
}
