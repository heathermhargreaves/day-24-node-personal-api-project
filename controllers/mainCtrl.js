var data = require('../models/data.js');
var skills = require('../models/skills');
var secrets = require('../models/secrets');

module.exports = {
  getName: function(req, res, next) {
    res.json({'name': data.name});
  },

  getLocation: function(req, res, next) {
    res.json({'location': data.location});
  },

  getOccupations: function(req, res, next) {
    res.json({'occupations': data.occupations});
  },

  getLatestOccupation: function(req, res, next) {
    res.json({'latestOccupation': data.occupation[0]});
  },

  getHobbies: function(req, res, next) {
    res.json({'hobbies': data.hobbies});
  },

  getHobbiesType: function(req, res, next) {
    var type = req.params.id;
    var results = data.hobbies.filter(function(hobby) {
      return hobby.type === type;
    });
    res.json({'hobbies': results});
  },

  changeName: function(req, res, next) {
    data.name = req.body.name;
    res.json({'name': data.name});
  },

  changeLocation: function(req, res, next) {
    data.location = req.body.location;
    res.jsaon({'location': data.location});
  },

  addHobbies: function(req, res, next) {
    data.hobbies.push({'name': req.body.name, 'type': req.body.type});
    res.json({'hobbies': data.hobbies});
  },

  addOccupation: function(req, res, next) {
    data.occupations.push(req.body.name);
    res.json({'occupations': data.occupations});
  },

  getSkills: function(req, res, next) {
      var exp = req.query.experience;
      var results = skills.filter(function(skill) {
        return skill.name === name;
      });
      res.json(results);
  },

  addSkill: function(req, res, next) {
    skills.push({'id': req.body.id, 'name': req.body.name, 'experience': req.body.experience});
  },

  getSecrets: function (req, res, next) {
    res.json(secrets);
  }




};
