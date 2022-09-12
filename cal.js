const express = require("express");

const app = express();
const boderParser = require("body-parser");
app.use(boderParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res) { //SO we can add other html files using this method of post


    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    var ibm = weight / (height * height);

    res.send("Your BMI CALCULATION  = " + ibm);



})

app.listen(3000, function(req, res) {
    console.log("Port 3000 is being started ");
});