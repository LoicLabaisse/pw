const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config()
const PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(express.json());

const vapidKeys = {
  publicKey:
    "BHZsjzyXclUF9RZFoyTQyybK5uZB6V40nbFCxcWEi2Ou5iCbECKMdG34ov8fcL6RT-IfSI5v8IUeXHZaNtbLYJs",
  privateKey: "CI2oWoPG0a1chEgFwNw4vdtH-ZgmjRFrPUuHqooziSQ",
};


webpush.setVapidDetails('mailto:test@code.co.uk' ,vapidKeys.publicKey,vapidKeys.privateKey)

const pushSubscription = {

}
webpush.sendNotification(pushSubscription,"test message")

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
