import {getRandomIntervalInRange} from '../random';

export default function (minimumBlockSize = 50) {
    function generateCanSplitMethod () {
        return function (block) {
            return block.height >= 2 * minimumBlockSize && block.width >= 2 * minimumBlockSize;
        };
    }

    function generateSplitMethod () {
        return function (block) {
            var splitX = getRandomIntervalInRange(minimumBlockSize, block.width, minimumBlockSize),
                splitY = getRandomIntervalInRange(minimumBlockSize, block.height, minimumBlockSize),
                topLeftBlock = { 
                    x: block.x, 
                    y: block.y, 
                    width: splitX, 
                    height: splitY 
                },
                topRightBlock = { 
                    x: block.x + splitX, 
                    y: block.y, 
                    width: block.width - splitX, 
                    height: splitY 
                },
                bottomLeftBlock = { 
                    x: block.x, 
                    y: block.y + splitY, 
                    width: splitX, 
                    height: block.height - splitY 
                },
                bottomRightBlock = { 
                    x: block.x + splitX, 
                    y: block.y + splitY, 
                    width: block.width - splitX, 
                    height: block.height - splitY 
                };

            return [topLeftBlock, topRightBlock, bottomLeftBlock, bottomRightBlock];
        };
    }

    return {
        canSplit: generateCanSplitMethod(),
        split: generateSplitMethod(),
    };
}
