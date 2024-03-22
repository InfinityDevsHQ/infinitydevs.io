"use client";
import FormInputs from "./form-inputs";
import Timings from "./timings";
import { useState } from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Dummy function for submitting form
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid lg:grid-cols-2 gap-12 bg-indigo-900/10 border border-blue-400/30 text-zinc-300 px-6 py-4"
    >
      <Timings />
      <FormInputs formData={formData} setFormData={setFormData} />
    </form>
  );
}
