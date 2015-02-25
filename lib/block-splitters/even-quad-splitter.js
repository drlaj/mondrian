import {getRandomIntervalInRange} from '../random';

export class EvenQuadSplitter {
    constructor (minimumSize = 50) {
        this.minimumSize = minimumSize;
    }

    canSplit (block) {
        return block.height >= 2 * this.minimumSize && block.width >= 2 * this.minimumSize;
    }

    split (block) {
        var splitX = block.width / 2,
            splitY = block.height / 2,
            block1 = { 
                x: block.x, 
                y: block.y, 
                width: splitX, 
                height: splitY 
            },
            block2 = { 
                x: block.x + splitX, 
                y: block.y, 
                width: block.width - splitX, 
                height: splitY 
            },
            block3 = { 
                x: block.x, 
                y: block.y + splitY, 
                width: splitX, 
                height: block.height - splitY 
            },
            block4 = { 
                x: block.x + splitX, 
                y: block.y + splitY, 
                width: block.width - splitX, 
                height: block.height - splitY 
            };

        return [block1, block2, block3, block4];
    }
}