const nodemailer = require("nodemailer");
const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = "shubhamrakhecha5@gmail.com";
const RECEIVER_EMAIL = "deepakrakhecha32@gmail.com";

const CC = [];
const BCC = [];

const EMAIL_SUBJECT = "hi bro";
const EMAIL_BODY_HTML = "<h1>party</h1>";

const options = {
  from: SENDER_EMAIL,
  to: RECEIVER_EMAIL,
  cc: CC,
  bcc: BCC,
  subject: EMAIL_SUBJECT,
  html: EMAIL_BODY_HTML,
};

const Transporter = nodemailer.createTransport({
  host: HOST_SERVICE,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: "shubhamrakhecha5@gmail.com",
    pass: "xsmtpsib-4703c4f52c2cc28c1639754ba6b218dc5340f2525d541e6c8698e82ae494abd4-F2HnGd4wMUWDyrCv",
  },
});

module.exports = { options, Transporter };
