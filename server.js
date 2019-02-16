var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
    id: 1,
    name: "Bob",
    email: "bob@bob.com",
    phone: "555-555-5555"
  },
  {
    id: 2,
    name: "Jake",
    email: "jake@bob.com",
    phone: "333-333-3333"
  },
  {
    id: 3,
    name: "Joe",
    email: "joe@bob.com",
    phone: "222-222-2222"
  }
];

var waitlist = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "views/reserve.html"));
});


app.get("/api/currentreservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/reserve", function(req, res) {
  var newTableInfo = req.body;

  if (reservations.length < 5) {
    reservations.push(newTableInfo);
  } else {
    waitlist.push(newTableInfo);
  }
});

app.listen(PORT, function() {
});
