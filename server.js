const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const url =
  "mongodb+srv://nkayprod:homebraiding123@cluster0.ow8gu2q.mongodb.net/form";
mongoose.connect(url);

//create a data schema

const noteSchema = {
  name: String,
  email: String,
  date: String,
  time: String,
  text: String,
};

const Note = mongoose.model("Note", noteSchema);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/results", (req, res) => {
  Note.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/dateResult", (req, res) => {
  Note.findById("62ddb885549200362bcf53e6")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const output = `
    <p>New contact request</p>
    <h3>Contact Details:</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Date: ${req.body.date}</li>
        <li>Time: ${req.body.time}</li>
       
    </ul>
    <h3>Message</h3>
    <p>${req.body.text}</p>
    `;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "nkayproductions@outlook.com",
      pass: "Dragonlord123.",
    },
  });

  const options = {
    from: "nkayproductions@outlook.com",
    to: "nikboiplays@gmail.com",
    subject: "New Customer",
    text: "Hi",
    html: output,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent: " + info.response);
  });

  let newNote = new Note({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    text: req.body.text,
  });
  newNote.save();
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
