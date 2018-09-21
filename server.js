// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
const nodemailer = require('nodemailer');


var app = express();
var PORT = process.env.PORT || 3000;

// Setup the app with body-parser and a static folder
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

// Routes ====== Simple index route
app.get("/", function (req, res) {
  res.send(index.html);
});

// Handle form submission,
app.post("/contactData", function (req, res) {
  console.log(req.body);

  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ryantuckerdev@gmail.com',
           pass: 'mbagwell1'
       }
   });

   const mailOptions = {
    from: 'noreply@aspiremanagement.com', // sender address
    to: email, // list of receivers
    subject: 'New Website Inquiry', // Subject line
    html: `<p> Name: ${name} <br>
              Email: ${email} <br>
              Subject: ${subject} <br>
              Message: ${message} <br></p>`// plain text body
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

 

});

// Listen on port 3000
app.listen(PORT, function () {
  console.log("App up");
});
