  
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("Hello BQA! ( ˘ ³˘)♥");
});

app.listen(port, function() {
    console.log(`Happily listening on ${port}`);
});
