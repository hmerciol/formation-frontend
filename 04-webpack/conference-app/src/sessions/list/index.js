var $ = require('jquery');
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SessionList {
    render(idView){
        $("#"+idView).html("La liste des sessions :<ul id='session-list'></ul>");
        talk.findAllSessions()
        .then(sessions => {
            sessions.forEach(session => {
                $("#session-list").append(
                    "<li>"+session.id+" "+session.title
                    +" en salle "+session.confRoom
                    +" (<a href=#sessions-file?"+session.id+">détail</a>)</li>");
            });
        });
    }
}