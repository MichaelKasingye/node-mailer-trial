import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// const email = 'pmsmaven@gmail.com';
// const pass = 'pdzkxwrcmllyksqq'; 

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: 'michaelkasingye@gmail.com',
};


// https://www.youtube.com/watch?v=t2LvPXHLrek - make app password