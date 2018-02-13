var $ = require('jquery');
import speakList from './speakers.html';
import TalkService from "../../common/talk.service";
const talk = new TalkService();

export default class SpeakerList {
    render(idView){
        $("#"+idView).html(speakList);
        talk.findAllSpeakers()
        .then(speakers => {
            speakers.forEach(speaker => {
                $("#speaker-list").append(
                    "<li>"+speaker.lastname.toUpperCase()+" "
                    +speaker.firstname+" <a href='#speakers-file?"
                    +speaker.id+"'>Détails</a></li>");
            });
        });
    }
}