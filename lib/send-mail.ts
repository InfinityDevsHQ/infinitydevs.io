"use server";
import nodemailer from "nodemailer";
const NEXT_PUBLIC_SMTP_HOST = process.env.NEXT_PUBLIC_SMTP_HOST;
const NEXT_PUBLIC_SMTP_PASSWORD = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
const NEXT_PUBLIC_RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;
const NEXT_PUBLIC_SMTP_USERNAME = process.env.NEXT_PUBLIC_SMTP_USERNAME;
const transporter = nodemailer.createTransport({
  host: NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: NEXT_PUBLIC_SMTP_USERNAME,
    pass: NEXT_PUBLIC_SMTP_PASSWORD,
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
      to: sendTo || NEXT_PUBLIC_RECIPIENT_EMAIL,
      subject: subject,
      text: text,
      html: html || "",
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", NEXT_PUBLIC_RECIPIENT_EMAIL);
    return info;
  } catch (error) {
    console.error("Error sending email", error);
  }
}
