var express = require('express');
var exphbs  = require('express-handlebars');
var port = 8000;
var app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.get("/", (req,res)=>{
    res.render("home");
});


app.listen(port, ()=>{
    console.log(`server listen at port number ${port}`)
}) 