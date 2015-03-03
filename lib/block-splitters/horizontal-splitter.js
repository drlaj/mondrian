import {getRandomIntervalInRange} from '../random';

export default function (minimumBlockSize = 50) {
    function generateCanSplitMethod () {
        return function (block) {
            return block.height >= 2 * minimumBlockSize;
        };
    }

    function generateSplitMethod () {
        return function (block) {
            var splitY = getRandomIntervalInRange(minimumBlockSize, block.height, minimumBlockSize),
                topBlock = { 
                    x: block.x, 
                    y: block.y, 
                    width: block.width, 
                    height: splitY
                },
                bottomBlock = { 
                    x: block.x, 
                    y: block.y + splitY, 
                    width: block.width, 
                    height: block.height - splitY
                };

            return [topBlock, bottomBlock];
        };
    }

    return {
        canSplit: generateCanSplitMethod(),
        split: generateSplitMethod(),
    };
}
