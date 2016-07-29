var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');


//middleware
app.use(bodyParser.json());
app.use(middleware.addHeaders);

//testing middleware
app.use(function(req, res, next) {
  console.log('hello');
  next();
});

//endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:id', mainCtrl.getHobbiesType);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobbies);
app.post('/occupations', mainCtrl.addOccupation);

app.get('/skills', mainCtrl.getSkills);
app.get('/skills/:name', mainCtrl.getSkillWithName);

app.post('/skills', middleware.generateId, mainCtrl.addSkill);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);




var port = 3000;
app.listen(port, function() {
  console.log('listening on port: ', port);

});
