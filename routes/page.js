var mongoose = require('mongoose');
var async = require('async');
var Contact = mongoose.model('Contact');

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.render("controllerapp");
  });
  
  app.get("/partials/:name",
    function(req, res) {
      var name = req.params.name;
      res.render('partials/' + name);
  });

  app.post("/api/send_contact",
    function(req,res) {
      console.log('new message: ' + req.body.name + ' ' + req.body.email + ' ' + req.body.message);
      Contact.newMessage(req.body.name, req.body.email, req.body.message, function(err, user) {
        if (err) {
          res.json({'error': 'problem submitting message'});
        } else {
          res.json('success');
        } 
      });
    }
  );

  app.get("/", function(req, res) {
    console.log('app get /');
    res.redirect('/home');
  });


}
