import express from "express";
import fs from "fs";
import cors from "cors";
var PORT = process.env.PORT || 5000;
var app = express();
app.use(cors());
app.get("/", function(req, res) {
    fs.readFile("./data/phones.json", "utf-8", function(err, data) {
        if (err != null) {
            res.sendStatus(404);
        }
        res.send(JSON.parse(data));
    });
});
app.listen(PORT);
