import es6shim from 'es6-shim';
import {QuadSplitter} from './block-splitters/random-quad-splitter';
import {EvenQuadSplitter} from './block-splitters/even-quad-splitter';
import {VerticalSplitter} from './block-splitters/vertical-splitter';
import {HorizontalSplitter} from './block-splitters/horizontal-splitter';
import {getWeightedColor,getRandomColor} from './colors'

export class BlockService {
    constructor (blocks = [], splitter = new QuadSplitter()) {
        this.blocks = blocks;
        this.splitter = splitter;
    }

    canSplit () {
        return this.blocks.some(this.canSplitBlock.bind(this));
    }

    canSplitBlock (block) {
        return this.splitter.canSplit(block);
    }

    getBlocks () {
        return this.blocks;
    }

    getBlockCount () {
        return this.blocks.length;
    }

    getSplittableBlock () {
        return this.blocks.find(this.canSplitBlock.bind(this));
    }

    getSplittableBlocks() {
        return this.blocks.filter(this.canSplitBlock.bind(this));
    }

    setSplitter(splitter) {
        this.splitter = splitter;
    }

    splitBlock (block) {
        var splitBlocks = this.splitter.split(block);

        splitBlocks.forEach(block => { block.color = getWeightedColor(); });

        this.blocks.splice(this.blocks.indexOf(block), 1);
        Array.prototype.push.apply(this.blocks, splitBlocks);
    }
}
