var data = require("./data/devfest-2015.js");
var tabPres = data.speakers;

exports.listerTousLesPresentateurs = function(){
  var tbody = data.speakers.map(function(speaker) {
  return (speaker.id+" : "+ speaker.firstname+" "+speaker.lastname);
  }).join("\n")
  return tbody;
};
exports.listerToutesLesSessions = function(){

  var tbody = data.sessions.map(function(session) {
  return (session.id+" : "+ session.title+" "+session.confRoom);
  }).join("\n")
  return tbody;
};
exports.trouverUneSession = function (idSession){
  session = data.sessions.find((s) => s.id == idSession);
  return (session.id+" : " +session.title+" "+session.confRoom);
};
exports.listerTopPresentateurs = function(){
  var tbody = data.speakers.filter((speaker) => speaker.topspeaker == true).map(function(speaker) {
  return (speaker.id+" : "+ speaker.firstname+" "+speaker.lastname);
  }).join("\n")
  return tbody;
};
