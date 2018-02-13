var $ = require('jquery');
export default class TalkService {
    findAllSpeakers() {   
        return $.get("http://localhost:3000/speakers");
    }
    findAllSessions() {   
        return $.get("http://localhost:3000/sessions");
    }
}