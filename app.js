var express=require('express'),
    app=express(),
    path=require('path'),
    bodyParser=require('body-parser');

app.set('views',path.join(__dirname,'views'));
app.engine('html',require('hogan-express'));
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
require('./router/router.js')(express,app);

app.listen(3000,function(){
  console.log('Server running on port 3000');
})
