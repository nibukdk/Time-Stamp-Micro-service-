var express= require("express"),
    app= express(),
    moment = require("moment");
    moment().format();
    

app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index');
});
app.get('/:id',function(req, res){
    res.send('afjkabfjba');
    console.log(req.body);
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log('The server is running');
});