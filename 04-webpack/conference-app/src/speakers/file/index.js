var $ = require('jquery');
import speak from './speaker.html';
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SpeakerFile {
    render(idView,idSpeaker){
        $("#"+idView).html(speak);
        talk.findOneSpeaker(idSpeaker)
        .then(speaker => {
            $("#speakName").append(speaker.lastname.toUpperCase()
                +" "+speaker.firstname);
            $("#speakDesc").append(speaker.about);
        });
    }
}