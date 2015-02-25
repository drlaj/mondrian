import $ from 'jquery';
import {BlockService} from './block-service';
import {QuadSplitter} from './block-splitters/random-quad-splitter';
import {EvenQuadSplitter} from './block-splitters/even-quad-splitter';
import {VerticalSplitter} from './block-splitters/vertical-splitter';
import {HorizontalSplitter} from './block-splitters/horizontal-splitter';
import divRenderer from './renderers/div-renderer';

export class Picture {
    constructor ($el) {
        this.$el = $el;
        this.initialize();
        this.addMouseListeners();
    }

    initialize () {
        var initialBlock = { 
                x: 0, 
                y: 0, 
                width: this.$el.width(), 
                height: this.$el.height(), 
                color: "#ffffff"
            },
            startingBlocks = [initialBlock];

        this.blockService = new BlockService(startingBlocks);
    }

    addMouseListeners () {
        this.$el.on('click', '.block', function (event) {
            var index = $(event.target).data('id');
            this.mondrianize(this.blockService.blocks[index]);
            this.draw();
        }.bind(this));

        this.$el.on('mouseenter', '.block', function (event) {
            let $block = $(event.target),
                index = $block.data('id'),
                block = this.blockService.blocks[index],
                color = this.blockService.canSplitBlock(block) ? "#00ff00" : "#ff0000";
                
            $block.data('originalBorderColor', $block.css('borderColor'));
            $block.css('borderColor', color);
        }.bind(this));

        this.$el.on('mouseleave', '.block', function (event) {
            let originalBorderColor = $(event.target).data('originalBorderColor');
            $(event.target).css('borderColor', originalBorderColor);
        }.bind(this));

        // TODO: remove redundancy spanning 51:75 via function (element, type, size)
        $('#vertical').bind('click', function () {
            var splitter = new VerticalSplitter(50);
            this.blockService.setSplitter(splitter);
        }.bind(this));

        $('#horizontal').bind('click', function () {
            var splitter = new HorizontalSplitter(50);
            this.blockService.setSplitter(splitter);
        }.bind(this));

        $('#random-quad').bind('click', function () {
            var splitter = new QuadSplitter(50);
            this.blockService.setSplitter(splitter);
        }.bind(this));

        $('#even-quad').bind('click', function () {
            var splitter = new EvenQuadSplitter(50);
            this.blockService.setSplitter(splitter);
        }.bind(this));

        $('#generate').bind('click', function () {
            this.initialize();
            this.generate(10);
        }.bind(this));
    }

    generate (numberOfBlocks) {
        while (this.blockService.getBlockCount() < numberOfBlocks && this.blockService.canSplit()) {
            this.mondrianize(this.blockService.getSplittableBlock());
        }
        this.draw();
    }

    mondrianize (block) {
        if (this.blockService.canSplitBlock(block)) {
            this.blockService.splitBlock(block);
        }
    } 

    draw () {
        divRenderer(this.$el, this.blockService.getBlocks());
    }
}
