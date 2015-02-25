import $ from 'jquery';
import {Picture} from './picture';

$(function(){
    var $el = $('#mondrian');
    var mondrian = new Picture($el);
    mondrian.generate(10);

    $('#generate').bind('click', function () {
        mondrian.initialize();
        mondrian.generate(10);
    });

});
