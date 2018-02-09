var readline = require('readline');
var service = require("./service.js")
var exit = false;
var menu = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var option = {
  '1':service.listerTousLesPresentateurs,
  '2':service.listerTopPresentateurs,
  '3':service.listerToutesLesSessions,
  '4':service.trouverUneSession
}

showMain();
function showMain() {
  console.log(
    '*** Application Conférence ***\n' +
    '1. Liste de tous les présentateurs\n' +
    '2. Top présentateurs\n' +
    '3. Liste des sessions\n' +
    '4. Détail d une session\n' +
    '5. exit menu');

    menu.question("choisir un menu :",function(answer){
      var doShowMain = true;


      if(answer==4){
        doShowMain = false;
        menu.question("choisir une session : ",function(rep){
          console.log(option[4](rep));
          showMain();
        })
      }else{
        console.log(option[answer]());
      }
      if(doShowMain) {
        showMain();
      }
    });
  }
