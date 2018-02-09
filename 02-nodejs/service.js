var data = require('./data/devfest-2015');

exports.listerTousLesPresentateurs = function(){
    return data.speakers;
};

exports.listerToutesLesSessions = function(){
    return data.sessions;
};

exports.trouverUneSession = function(idSession){
    return data.sessions.find(function(session){
        return session.id == idSession;
    })
};

exports.listerTopPresentateurs = function(){
    return data.speakers.filter(function(speaker){
        return speaker.topspeaker;
    })
};

