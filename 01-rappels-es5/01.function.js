console.log("01 - Fonctions");

//---------------------------

nombre1 = 10;
nombre2 = 20;

function additionner(nb1,nb2){
    return nb1 + nb2;
};

resultat1 = additionner(nombre1,nombre2);

console.log("resultat1 == "+resultat1);

//---------------------------

somme = additionner;
resultat2 = somme(nombre1,nombre2);

console.log("resultat2 == "+resultat2);

//---------------------------

multiplication = function(nb1,nb2){
    return nb1 * nb2;
}

resultat3 = multiplication(nombre1,nombre2);

console.log("resultat3 == "+resultat3);

//---------------------------

afficherOperation = function(nomOperation,operation,nb1,nb2){
    var res = operation(nb1,nb2);
    console.log("<"+nomOperation+"> [ nb1 == <"+nb1+"> nb2 == <"+nb2+"> ] == <"+res+">");
};

afficherOperation("Somme",somme,20,40);

afficherOperation("Soustraction",function(nb1,nb2){return nb1-nb2},15,5);

//---------------------------