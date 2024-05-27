"use server";
import nodemailer from "nodemailer";
import { toast } from "sonner";

const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;
const NEXT_PUBLIC_USERNAME = process.env.NEXT_PUBLIC_USERNAME;
const NEXT_PUBLIC_PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
const NEXT_PUBLIC_RECEIVER = process.env.NEXT_PUBLIC_RECEIVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: NEXT_PUBLIC_HOST,
  port: 465,
  secure: true,
  auth: {
    user: NEXT_PUBLIC_USERNAME,
    pass: NEXT_PUBLIC_PASSWORD,
  },
});

export async function sendMail({
  email,
  subject,
  text,
  html,
  sendTo,
}: {
  email: string;
  subject: string;
  text?: string;
  html?: string;
  sendTo?: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: email,
      to: sendTo || NEXT_PUBLIC_RECEIVER,
      subject: subject,
      text: text,
      html: html || "",
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", NEXT_PUBLIC_RECEIVER);
    return info;
  } catch (error) {
    console.error("Error sending email", error);
  }
}
