const express = require("express");
const app = express();
const scheduler = require("node-cron");

const { options, Transporter } = require("./services/email");

const PORT = 4000;

scheduler.schedule("* * * * * ", () => {
  console.log("scheduler is running");

  Transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sended with=", info);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is live now on http://localhost:${PORT}`);
});
