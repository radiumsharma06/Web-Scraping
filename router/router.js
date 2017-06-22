module.exports=function(express,app){

  var router=express.Router();
      //execute=require('../micro');

  router.get('/',function(req,res,next){
    res.send('Welcome to login application');
  });

  router.get('/register',function(req,res){
      res.render('start',{name:"user"});
  });

  router.post('/register',function(req,res){
     var user={
       email:req.body.username,
       password:req.body.pass
     }
     require('../micro')(user);
     res.render('index')
  });

  app.use('/',router);

}
