// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

module.exports = function(app) {
// page where users can search for media -- search.html
app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
});

// list route loads list.html
app.get("/list", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
});

// index route loads start.html
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/start.html"));
});
}
