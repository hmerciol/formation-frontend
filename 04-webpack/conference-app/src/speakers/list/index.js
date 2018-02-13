var $ = require('jquery');
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SpeakerList {
    render(idView){
        $("#"+idView).html(
            "La liste des présentateurs :<ul id='speaker-list'></ul>");
        talk.findAllSpeakers()
        .then(speakers => {
            speakers.forEach(speaker => {
                $("#speaker-list").append(
                    "<li>"+speaker.lastname.toUpperCase()
                    +" "+speaker.firstname+"</li>");
            });
        });
    }
}