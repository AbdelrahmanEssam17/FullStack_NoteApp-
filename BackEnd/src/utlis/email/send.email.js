import nodemailer from "nodemailer";

export const sendEmail = async ({
  to = [],
  cc = [],
  bcc = [],
  subject = "hello",
  text = "",
  html = "",
  attachments = [],
} = {}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"NoteApp" <${process.env.EMAIL}>`,
      to,
      cc,
      bcc,
      subject,
      text,
      html,
      attachments,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.log("Email error:", error);
    throw error;
  }
};
