var $ = require('jquery');
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SpeakerFile {
    render(idView,idSpeaker){
        talk.findOneSpeaker(idSpeaker)
        .then(speaker => {
            $("#"+idView).html(
                "<h1>"+speaker.lastname.toUpperCase()+" "
                +speaker.firstname+"</h1>");
            $("#"+idView).append("<p>"+speaker.about+"</p>");
        });
    }
}