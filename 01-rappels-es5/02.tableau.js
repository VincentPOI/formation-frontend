var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

function afficher(element){
  console.log(element);
}
villes.forEach(afficher);

var containsA = function(element){
  return element.includes("a");
}
var containsTiret = function(element){
  return element.includes("-");
}
var villesSansTiretSansEspace = function(element){
  return !(element.includes("-") ||  element.includes(" "));
}
console.log(villes.every(containsA));
console.log(villes.some(containsTiret));
villes.filter(villesSansTiretSansEspace).forEach(afficher);

var lastLetterS = function(element){
  return element.includes("s",element.length-1);
}
var toUpper = function(element){
  return element.toUpperCase();
}
villes.filter(lastLetterS).map(toUpper).forEach(afficher);
