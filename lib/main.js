import $ from 'jquery';
import {Picture} from './picture';

$(function(){
    var $el = $('#mondrian');
    var mondrian = new Picture($el);
    mondrian.generate(10);
});
