import {BlockService} from './block-service';
import randomQuadSplitter from './block-splitters/random-quad-splitter';
import horizontalSplitter from './block-splitters/horizontal-splitter';
import verticalSplitter from './block-splitters/vertical-splitter';

export function create (block, numberOfBlocks = 10, smallestAllowedBlockSize = 20) {
    var splitter = verticalSplitter(smallestAllowedBlockSize),
        blockService = new BlockService([block], splitter);

    while (blockService.getBlockCount() < numberOfBlocks && blockService.canSplit()) {
        blockService.split();
    }

    return blockService.getBlocks();
}
