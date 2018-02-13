var $ = require('jquery');
import sess from './session.html';
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SessionFile {
    render(idView,idSession){
        $("#"+idView).html(sess);
        talk.findOneSession(idSession)
        .then(session => {
            $("#sessTitle").append(session.title);
            $("#sessRoom").append(session.confRoom);
            $("#sessDesc").append(session.desc);

            Promise.all(session.speakers.map(id => talk.findOneSpeaker(id)))
            .then(sessSpeakers => {
                sessSpeakers.forEach(speaker => {
                    $("#sessSpeaker").append("<li>"+speaker.lastname.toUpperCase()+" "
                    +speaker.firstname+" <a href='#speakers-file?"
                    +speaker.id+"'>Détails</a></li>");
                });
            });
        });
    }
}