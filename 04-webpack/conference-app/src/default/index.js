var $ = require('jquery');

export default class DefaultPage {
    render(idView){
        $("#"+idView).html("<div class='col ml-2 mt-2 mr-2'>");
        $("#"+idView).append("<div class='row justify-content-sm-center'><h1>Conférence</h1></div>");
        $("#"+idView).append("<div class='row justify-content-sm-center'><a href='#sessions-list' class='btn btn-basic' role='button'>voir les sessions</a></div>");
        $("#"+idView).append("<div class='row justify-content-sm-center'><a href='#speakers-list' class='btn btn-basic' role='button'>voir les présentateurs</a></div>");
        $("#"+idView).append("</div>");
    }
}