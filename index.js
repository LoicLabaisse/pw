const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(express.json());

const vapidKeys = {
  publicKey: process.env.PROCESS_ENV_PUBLICKEY,
  privateKey: process.env.PROCESS_ENV_PRIVATEKEY,
};

webpush.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {};
webpush.sendNotification(sub, "test message");

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
