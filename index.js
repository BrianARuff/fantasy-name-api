var express = require('express');
var cors = require("cors");
var fantasyName = require("./fantasyName");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", function (req, res) {
    var name = new fantasyName().getName(5);
    res.json({ name: name });
});
app.listen(3000, function () {
    console.log("App running on port " + (3000));
});
//# sourceMappingURL=index.js.map