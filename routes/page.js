module.exports = function(app, passport) {

  var loggedIn = passport.authenticate('bearer', {session: false,
    failureRedirect: '/home'});
  // var loggedIn = passport.authenticate('bearer', {session: false});

  app.get("/home", function(req, res) {
    console.log('hello??');
    res.render("controllerapp");
  });
  
  app.get("/partials/:name",
    function(req, res) {
      console.log('app get partials/name');
      var name = req.params.name;
      res.render('partials/' + name);
  });

  /*app.get("/chart/:project/:batch/:chartID",
    loggedIn,
    function(req, res) {
      var project = req.params.project;
      var batch = req.params.batch;
      var chartID = req.params.chartID;
      res.sendFile('data/'+project+'/'+batch+'/'+chartID+'.pdf', {root: '.'});
  });*/

  app.get("/", function(req, res) {
    console.log('app get /');
    res.redirect('/home');
  });


}
