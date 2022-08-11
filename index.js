const express=require('express');
const app=express();

const port=4000;
const Datee=require("./middleware/date")
const d=app.use(Datee)
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.listen(port,err=> err?console.log(err):
console.log((`server is running , port open your browser at http://localhost :${port}`))

)
 app.set('view engine', 'pug');
 app.set('views','./public');

// app.get('/', function(req, res){
//     res.send("home page")
//  });
 
app.get('/', function(req, res){
   res.render('homepage');
});
app.get('/homepage', function(req, res){
   res.render('homepage');
});
app.get('/contactus', function(req, res){
   res.render('contactus');
});
app.get('/ourservices', function(req, res){
   res.render('ourservices');
});