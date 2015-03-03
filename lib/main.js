import $ from 'jquery';
import {create} from './mondrian';
import {getWeightedColor} from './colors'
import divRenderer from './renderers/div-renderer';

$(function(){
    var $el = $('#mondrian'),
        block = {
            x: 0,
            y: 0,
            width: $el.width(),
            height: $el.height(),
            color: "#ffffff",
        },
        blocks = create(block);

    blocks.forEach(block => { block.color = getWeightedColor(); });

    divRenderer($el, blocks);
});
