var data = require("./data/devfest-2015.js");
var tabPres = data.speakers;

exports.listerTousLesPresentateurs = function(){
  return data.speakers;
};
exports.listerToutesLesSessions = function(){
  return data.sessions;
};
exports.trouverUneSession = function (idSession){
  return data.sessions.filter((session) => session.id == idSession);
};
exports.listerTopPresentateurs = function(){
  return data.speakers.filter((speaker) => speaker.topspeaker == true);
};
