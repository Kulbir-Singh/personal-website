const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

export default function sendEmail(req, res) {
  const msg = {
    to: "kulbir2406@gmail.com", // Change to your recipient
    from: "test@example.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail.send(msg);

  res.status(200).json({ status: "ok" });
}
