
const express = require("express");
const app= express();
const bodyParser = require("body-parser");

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'ejs'); //we can remove above 2 lines and use just this if we save html files in view folder as .ejs files...

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/img'));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/formfile", function(req,res){
  res.sendFile(__dirname + "/views/formfile.html");
} )

app.post("/resgenfile",function(req,res){
  var q1_1_a = req.body.q1_1_a;
  // res.send(q1_1_a );
  // res.send("Submitted, Thank you!");
  res.render("resume_template1", {q1_1_a : q1_1_a});
})


app.listen(3000,function(){
  console.log("Hey");
});
