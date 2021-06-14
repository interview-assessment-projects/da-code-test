const nodemailer = require("nodemailer");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const sendEmail = (name, emailAddr, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password
    }
  });

  let mailOptions = {
    from: "email.test.acct.jd.@gmail.com",
    to: emailAddr,
    subject: `Message receipt for ${name}`,
    text: `We received your email containing the message:

            "${message}"

           We appreciate hearing from you!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendEmail,
};
