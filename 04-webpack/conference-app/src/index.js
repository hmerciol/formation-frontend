//import TalkService from "./common/talk.service";
import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";

alert('Conférence App démarré !');

/*
const talk = new TalkService();
talk.findAllSpeakers().then(speakers => {
    speakers.forEach(speaker => {
        console.log(speaker.firstname);
    });
});
*/

const layout = new Layout();
layout.render();

const sList = new SpeakerList();
sList.render("main-view");