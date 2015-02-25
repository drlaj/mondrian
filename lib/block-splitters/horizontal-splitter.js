import {getRandomIntervalInRange} from '../random';

export class HorizontalSplitter {
    constructor (minimumSize = 50) {
        this.minimumSize = minimumSize;
    }

    canSplit (block) {
        return block.height > this.minimumSize;
    }

    split (block) {
        var splitY = getRandomIntervalInRange(this.minimumSize, block.height, this.minimumSize),
            blockAboveSplit = { 
                x: block.x, 
                y: block.y, 
                width: block.width, 
                height: splitY
            },
            blockBelowSplit = { 
                x: block.x, 
                y: block.y + splitY, 
                width: block.width, 
                height: block.height - splitY
            };

        return [blockAboveSplit, blockBelowSplit];
    }
}
