//imports
var service = require('./service');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//fonctions d'affichage
function afficherPresentateur(pres){
    console.log(pres.firstname+" "+pres.lastname+" à "+pres.company);
}

function afficherSession(sess){
    console.log('Titre : '+sess.title+" (identifiant : "+sess.id+")");
    console.log('Salle : '+sess.confRoom+" en "+sess.hour);
}

function afficherTousLesPresentateurs(){
    console.log('La liste des présentateurs :');
    service.listerTousLesPresentateurs().forEach(afficherPresentateur);
    menuConsole();
};

function afficherTopPresentateurs(){
    console.log('Le top des présentateurs :');
    service.listerTopPresentateurs().forEach(afficherPresentateur);
    menuConsole();
};

function afficherToutesLesSessions(){
    console.log('La liste des conférences :');
    service.listerToutesLesSessions().forEach(afficherSession);
    menuConsole();
};

function afficherUneSession(){
    rl.question('Quelle session ? ', function(choixSession){
        var sess = service.trouverUneSession(choixSession);
        afficherSession(sess);
        console.log("Description : "+sess.desc);
        console.log("Orateur(s) : "+sess.speakers)
        menuConsole();
    });
};

function quitter(){
    rl.close();
}

//actions du menu
var menu = { 1 : afficherTousLesPresentateurs
    , 2 : afficherTopPresentateurs
    , 3 : afficherToutesLesSessions
    , 4 : afficherUneSession
    , 5 : quitter
};

//menu console
function menuConsole(){
    console.log('*** Application Conférence ***');
    console.log('1. Liste de tous les présentateurs');
    console.log('2. Top présentateurs');
    console.log('3. Liste des sessions');
    console.log('4. Détail d\'une session');
    console.log('5. Quitter');

    rl.question('Choisissez une action : ', function(choixMenu){
        var action = menu[choixMenu];
        action();
    });
};

menuConsole();