const express=require("express");
const nodemailer= require("nodemailer");
const multiparty= require("multiparty");
const cors = require('cors');
require("dotenv").config();

const app=express();
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 5000;

const transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
})


// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  app.post("/send", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
      console.log(data);
      const mail = {
        sender: `${data.name} <${data.email}>`,
        to: process.env.EMAIL, // receiver email,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong.");
        } else {
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
    });
  });


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
});