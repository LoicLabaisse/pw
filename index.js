const webpush = require("web-push");



const vapidKeys = {
  publicKey:
    "BHZsjzyXclUF9RZFoyTQyybK5uZB6V40nbFCxcWEi2Ou5iCbECKMdG34ov8fcL6RT-IfSI5v8IUeXHZaNtbLYJs",
  privateKey: "CI2oWoPG0a1chEgFwNw4vdtH-ZgmjRFrPUuHqooziSQ",
};


webpush.setVapidDetails('mailto:test@code.co.uk' ,vapidKeys.publicKey,vapidKeys.privateKey)

const pushSubscription = {

}
webpush.sendNotification(pushSubscription,"test message");

