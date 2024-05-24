"use serer";
import nodemailer from "nodemailer";
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;
const NEXT_PUBLIC_USERNAME = process.env.NEXT_PUBLIC_USERNAME;
const NEXT_PUBLIC_PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
const NEXT_PUBLIC_RECEIVER = process.env.NEXT_PUBLIC_RECEIVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: NEXT_PUBLIC_HOST,
  port: 587,
  secure: true,
  auth: {
    user: NEXT_PUBLIC_USERNAME,
    pass: NEXT_PUBLIC_PASSWORD,
  },
});

export async function sendSubscriberData({
  email,
  subject,
  text,
  html,
}: {
  email: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      NEXT_PUBLIC_USERNAME,
      NEXT_PUBLIC_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: NEXT_PUBLIC_RECEIVER,
    subject: subject,
    text: text,
    html: html ? html : "",
  });
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", NEXT_PUBLIC_RECEIVER);
  return info;
}
