import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./layout/index";
import DefaultPage from "./default/index";
import SpeakerList from "./speakers/list/index";
import SessionList from "./sessions/list/index";

const layout = new Layout();
const defPage = new DefaultPage();
const spList = new SpeakerList();
const seList = new SessionList();

layout.render();

var router = () => {
    if (location.hash == '#speakers-list') {
        spList.render("main-view");
    } else if (location.hash == '#sessions-list') {
        seList.render("main-view");
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