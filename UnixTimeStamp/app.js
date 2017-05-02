var express= require("express"),
    app= express(),
    moment = require("moment"),
    bodyParser= require("body-parser");

    moment().format();
    
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));


//Set The home page
app.get('/',function(req,res){
    res.render('index');
});

//Check for the user input 
app.get('/:id',function(req, res){
    var timeChecker=moment.unix(req.params.id.toString());
    var inputInIso=moment(req.params.id.toString(),moment.ISO_8601);
    if(timeChecker.isValid()){
        res.send('Unix timestamp is '+timeChecker.isValid()+': '+timeChecker.format('MM-DD-YY'));
        
    }
    else if(inputInIso.isValid()) {
        res.send('Regular timestamp is '+inputInIso.isValid()+': '+moment.unix(inputInIso));
    }
    else{
        res.send('null');
        console.log(timeChecker.isValid()+" :" +inputInIso.isValid());
    }
         
   
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log('The server is running');
});