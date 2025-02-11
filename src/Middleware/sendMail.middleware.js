import nodemailer from "nodemailer";
import path from "path";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "codingninjas2k16@gmail.com",
    pass: "slwvvlczduktvhdj",
  },
});
export const sendConfirmationMail = async (userEmail) => {
  const message = {
    from: "codingninjas2k16@gmail.com",
    to: userEmail,
    subject: "Job Application Received",
    text: "Congratulations your response has been successfully recieved from the Team Easily ",
    html : { path: 'src/public/emailWithPDF.html' }
  };
  transporter.sendMail(message, (err, res) => {
    if (err) {
      console.log(err);
    } else {
    }
  });
};