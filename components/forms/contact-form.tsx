"use client";
import { Loader, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import Timings from "../landing-page/_components/timings";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "$/lib/send-mail";
import { toast } from "sonner";
const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be 3 characters long." }),
  email: z.string().email({ message: "Please Enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});
export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
    } catch (error) {}
    const res = await sendMail({
      email: values.email,
      subject: "New Contact Us Form Submission",
      text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
    });
    if (res?.messageId) toast.success("Message Sent Successfully");
    if (!res?.messageId) toast.error("Failed To send Message");
  }

  return (
    <Form {...form}>
      <form
        className="grid lg:grid-cols-2 gap-12 bg-indigo-900/10 border rounded-3xl border-blue-400/30 text-zinc-300 px-6 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Timings />
        <div className="uppercase flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Name</label>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="flex flex-col gap-4">
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="flex flex-col gap-4">
                    <Input
                      placeholder="someone@domain.com"
                      {...field}
                      className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Message</label>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="flex flex-col gap-4">
                    <Textarea
                      placeholder="Type your message"
                      {...field}
                      className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            aria-label="form-submit button"
            className="bg-blue-900/40 flex items-center gap-2 px-4 py-2 self-start common-border rounded-full"
          >
            SUBMIT
            {isLoading ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              <Send className="rotate-45" size={20} />
            )}
          </button>
        </div>
      </form>
    </Form>
  );
}
