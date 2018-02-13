var $ = require('jquery');
export default class TalkService {
    findAllSpeakers(){   
        return $.get("http://localhost:3000/speakers");
    }
    findAllSessions(){   
        return $.get("http://localhost:3000/sessions");
    }
    findOneSpeaker(idSpeaker){
        return $.get("http://localhost:3000/speakers/"+idSpeaker);
    }
    findOneSession(idSession){
        return $.get("http://localhost:3000/sessions/"+idSession);
    }
}