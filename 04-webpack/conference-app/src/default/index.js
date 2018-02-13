var $ = require('jquery');

export default class DefaultPage {
    render(idView){
        $("#"+idView).html("<h1>Conférence</h1>");
        $("#"+idView).append("<div class='row'><a href='#sessions-list' role='button'>voir les sessions</a></div>");
        $("#"+idView).append("<div class='row'><a href='#speakers-list' role='button'>voir les présentateurs</a></div>");
    }
}