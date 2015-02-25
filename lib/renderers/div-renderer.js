import $ from 'jquery';

export default function ($el, blocks) {
    $el.empty();

    blocks.forEach(function (block, index) {
        let $block = $('<div></div>')
            .css({
                background: block.color,
                height: block.height,
                left: block.x,
                top: block.y,
                width: block.width
            })
            .addClass('block')
            .data('id', index);

        $el.append($block);
    });
};
