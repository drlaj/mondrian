import es6shim from 'es6-shim';
import randomQuadSplitter from './block-splitters/random-quad-splitter';

export class BlockService {
    constructor (blocks = [], splitter = randomQuadSplitter(50)) {
        this.blocks = blocks;
        this.splitter = splitter;
    }

    canSplit () {
        return this.blocks.some(block => this.canSplitBlock(block));
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
        return this.blocks.find(block => this.canSplitBlock(block));
    }

    split () {
        var block = this.getSplittableBlock(),
            blocks = this.splitBlock(block);

        this.removeBlock(block);
        this.addBlocks(blocks);
    }

    splitBlock (block) {
        return this.splitter.split(block);
    }

    removeBlock (block) {
        this.blocks.splice(this.blocks.indexOf(block), 1);
    }

    addBlocks (blocks) {
        Array.prototype.push.apply(this.blocks, blocks);
    }
}
