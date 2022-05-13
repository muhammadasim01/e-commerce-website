const nodemailer = require("nodemailer");
const MailSend = async (email, link) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: false,
    port: 465,
    auth: {
      user: "muhammadasim4515@gmail.com",
      pass: "Youtube4515@@",
    },
    // tls: { rejectUnauthorized: false },
  });
  await transport.sendMail(
    {
      from: "muhammadasim4515@gmail.com",
      to: email,
      subject: "PASSWORD RESET IN MOBILE STORE APP",
      text: link,
    },
    (err, res) => {
      if (err) {
        console.log(err, "MESSEGE NOT SENT");
      } else {
        console.log(res, "MESSEGE SENT SUCCESSFULLY");
      }
    }
  );
};
module.exports = MailSend;
