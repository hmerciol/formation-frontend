var $ = require('jquery');
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SessionFile {
    render(idView,idSession){
        talk.findOneSession(idSession)
        .then(session => {
            $("#"+idView).html(
                "<h1>"+session.title+"</h1>");
            $("#"+idView).append("<p>En salle : "+session.confRoom+"</p>");
            $("#"+idView).append("<p>Description : "+session.desc+"</p>");
        });
    }
}