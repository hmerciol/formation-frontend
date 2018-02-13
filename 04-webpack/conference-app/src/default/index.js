var $ = require('jquery');
import defPage from './default.html';
export default class DefaultPage {
    render(idView){
        $("#"+idView).html(defPage);
    }
}