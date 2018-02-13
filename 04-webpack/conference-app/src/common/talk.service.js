var $ = require('jquery');
export default class TalkService {
    constructor(){}
    findAllSpeakers() {   
        return $.get("http://localhost:3000/speakers");
    }
}