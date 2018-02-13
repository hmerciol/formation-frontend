import TalkService from "./common/talk.service";

alert('Conférence App démarré !');

const talk = new TalkService();
talk.findAllSpeakers().then(speakers => {
    speakers.forEach(speaker => {
        console.log(speaker.firstname);
    });
})