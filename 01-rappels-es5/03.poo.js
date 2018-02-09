function Personne(nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.prenom + "," + this.nom + "," + this.pseudo;
    }
};

var jules = new Personne("LEMAIRE","Jules","jules77");
var paul = new Personne("LEMAIRE","Paul","paul44");

function afficherPersonne(p){
    console.log(p.nom);
    console.log(p.prenom);
    console.log(p.pseudo);
    console.log(p.getNomComplet());
};

afficherPersonne(jules);
afficherPersonne(paul);

//---------------------------

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

//---------------------------

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE"
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

//---------------------------

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0) + this.nom.charAt(0);
};
console.log(jules.getInitiales());

//---------------------------

var robert = {
    nom : "LEPREFET",
    prenom : "Robert",
    pseudo : "robert77",
    getNomComplet : function(){
        return this.prenom + "," + this.nom + "," + this.pseudo;
    }
};
afficherPersonne(robert);

//---------------------------

function Client(nom,prenom,pseudo,numeroClient){
    Personne.call(this,nom,prenom,pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return this.numeroClient + ":" + this.nom + "," + this.prenom;
    }
};

var steve = new Client("LUCAS","steve","steve44","A01");

afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());