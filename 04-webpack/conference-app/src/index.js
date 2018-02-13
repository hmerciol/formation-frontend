import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./layout/index";
import DefaultPage from "./default/index";
import SpeakerList from "./speakers/list/index";
import SpeakerFile from "./speakers/file/index";
import SessionList from "./sessions/list/index";
import SessionFile from "./sessions/file/index";

const layout = new Layout();
const defPage = new DefaultPage();
const spList = new SpeakerList();
const spFile = new SpeakerFile();
const seList = new SessionList();
const seFile = new SessionFile();

layout.render();

var router = () => {
    if (location.hash == '#speakers-list') {
        spList.render("main-view");
    } else if (location.hash.startsWith('#speakers-file')) {
        spFile.render("main-view",location.hash.substring(location.hash.lastIndexOf('?')+1));
    } else if (location.hash == '#sessions-list') {
        seList.render("main-view");
    } else if (location.hash.startsWith('#sessions-file')) {
        seFile.render("main-view",location.hash.substring(location.hash.lastIndexOf('?')+1));
    } else {
        defPage.render("main-view");
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});