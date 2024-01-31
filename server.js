const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// serve static files.  It’s safer to use the absolute path of the directory that you want to serve.


app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    return res.send(`Welcome To My Express.js Server`);
});

app.get("/about", (req, res) => {
    return res.send(
        `I am Mubashar Nuru-Deen and I am a student of ReDi,Learning Web Development and my Project is going to be about Luxury Apartments for rent.`
    );
});

// go example route http://localhost:3000/greet?name=John&lastName=Smith
app.get("/greet", (req, res) => {
    const { name, lastName } = req.query;

    if (name && lastName) {
        res.send(`Hello ${name} ${lastName}`);
    } else
        res.status(422).send(
            "Please provide valid name and lastName parameters"
        );
});

app.listen(port, () => {
    console.log(`Express.js sever is running at http://localhost:${port}`);
});