var express= require("express");
var app= express();
     app.get("/",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
     app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: Ravi Tambade</li>"
            +"<li>Director: Shubhangi Tambade</li>"
            +"<li>Subject Matter Expert: Rohit Gore</li>"
            + "</ol>"
    );
});
app.get("/login",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});
