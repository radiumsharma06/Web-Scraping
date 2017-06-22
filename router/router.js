module.exports=function(express,app){

  var router=express.Router();
  
  router.get('/',function(req,res){
      res.render('start',{name:"user"});
  });

  router.post('/',function(req,res){
     var user={
       email:req.body.username,
       password:req.body.pass
     }
     require('../micro')(user);
     res.render('index')
  });

  app.use('/',router);

}
