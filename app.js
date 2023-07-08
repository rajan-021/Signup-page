const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }

            }
        ]
    };
    const jsonData = JSON.stringify(data);

    // const url = "https://us21.admin.mailchimp.com/lists/56baa1b1ed";                  fault issssssssssss hereeeeeeeeeeeeee
    const url="https://us21-5359c64314-0efba929d5@inbound.mailchimp.com";

    const options = {
        method: "POST",
        auth: "rajanmaurya1:909de5191bf675b13be486d8462ba6eb-us21"
    }

    const request = https.request(url, option, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();

});


app.listen(3000, function () {
    console.log("server is running on port 3000");
});

// 909de5191bf675b13be486d8462ba6eb-us21

// 56baa1b1ed