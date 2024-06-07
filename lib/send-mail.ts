"use server";
import nodemailer from "nodemailer";
const NEXT_PUBLIC_SMTP_HOST = process.env.NEXT_PUBLIC_SMTP_HOST;
const NEXT_PUBLIC_SENDER_EMAIL_PASSWORD =
  process.env.NEXT_PUBLIC_SENDER_EMAIL_PASSWORD;
const NEXT_PUBLIC_RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;
const NEXT_PUBLIC_SENDER_EMAIL = process.env.NEXT_PUBLIC_SENDER_EMAIL;
const NEXT_PUBLIC_FROM_EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL;

const transporter = nodemailer.createTransport({
  host: NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: NEXT_PUBLIC_SENDER_EMAIL,
    pass: NEXT_PUBLIC_SENDER_EMAIL_PASSWORD,
  },
});

export async function sendMail({
  subject,
  text,
  html,
  sendTo,
}: {
  subject: string;
  text?: string;
  html?: string;
  sendTo?: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: NEXT_PUBLIC_FROM_EMAIL,
      to: sendTo || NEXT_PUBLIC_RECIPIENT_EMAIL,
      subject: subject,
      text: text,
      html: html || "",
    });
    console.log("Message Sent", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email", error);
  }
}
