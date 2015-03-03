import {getRandomIntervalInRange} from '../random';

export default function (minimumBlockSize = 50) {
    function generateCanSplitMethod () {
        return function (block) {
            return block.width >= 2 * minimumBlockSize;
        };
    }

    function generateSplitMethod () {
        return function (block) {
            var splitX = getRandomIntervalInRange(minimumBlockSize, block.width, minimumBlockSize),
                leftBlock = { 
                    x: block.x, 
                    y: block.y, 
                    width: splitX, 
                    height: block.height
                },
                rightBlock = { 
                    x: block.x + splitX, 
                    y: block.y, 
                    width: block.width - splitX, 
                    height: block.height 
                };

            return [leftBlock, rightBlock];
        };
    }

    return {
        canSplit: generateCanSplitMethod(),
        split: generateSplitMethod(),
    };
}
