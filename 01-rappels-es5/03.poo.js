function Personne(nom,prenom,pseudo){
  this.nom=nom;
  this.prenom=prenom;
  this.pseudo=pseudo;
  Personne.prototype.age =  "Non renseigne";
  this.getNomComplet = function(){
    return(this.nom+" "+this.prenom+" "+this.pseudo);
  }
  this.getInitiales = function(){
    return (this.nom.charAt(0)+this.prenom.charAt(0));
  }
}

function afficherPersonne(pers){
  console.log(pers.getNomComplet());
}
var jules = new Personne("LEMAIRE","jules","jules77");
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

var paul = new Personne("LEMAIRE","PAUL","paul44");
console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());

console.log("**********");
afficherPersonne(jules);
console.log("**********");

jules["pseudo"]="jule44";
console.log(jules.getNomComplet());
console.log(jules.age);
jules["age"]=30;
console.log(jules.age);
console.log(jules.getInitiales());


var robert = {nom:"LEPREFET",
prenom:"Robert",
pseudo:"robert77",
getNomComplet:function(){
  return(this.nom+" "+this.prenom+" "+this.pseudo);
}
}
afficherPersonne(robert);

function Client(nom,prenom,pseudo,num,pers){
  Personne (Personne.call(this,nom,prenom,pseudo));
  this.numeroClient=num;
  this.getInfos = function(){
    return (this.numeroClient+" "+this.nom +" "+this.prenom);
  }
}
steve = new Client("LUCAS","steve","steve44","A01");
console.log(steve.getInfos());
