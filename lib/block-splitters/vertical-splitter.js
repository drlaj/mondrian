import {getRandomIntervalInRange} from '../random';

export class VerticalSplitter {
    constructor (minimumSize = 50) {
        this.minimumSize = minimumSize;
    }

    canSplit (block) {
        return block.width > this.minimumSize;
    }

    split (block) {
        var splitX = getRandomIntervalInRange(this.minimumSize, block.width, this.minimumSize),
            blockLeftOfSplit = { 
                x: block.x, 
                y: block.y, 
                width: splitX, 
                height: block.height
            },
            blockRightOfSplit = { 
                x: block.x + splitX, 
                y: block.y, 
                width: block.width - splitX, 
                height: block.height 
            };

        return [blockLeftOfSplit, blockRightOfSplit];
    }
}
