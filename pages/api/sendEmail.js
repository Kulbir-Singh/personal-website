const mailjet = require("node-mailjet").connect(
  "****************************1234",
  "****************************abcd"
);

export default function sendEmail(req, res) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: {
      from: "kulbir2406@gmail.com",
      to: "kulbir2406@gmail.com",
      subject: "Greetings from Mailjet.",
      text: "My first Mailjet email",
      html: "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
    },
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
}

SG.sm1PM2S - Q36UIpcAWmKe0g.u6B6KIyOU - gFYxBDkAUE9xH5Vp0Q5GMHnoT9T5VGRFA;
