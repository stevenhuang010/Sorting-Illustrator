import {swapModel} from '../HelperFunctions.js'

export const bubbleSort = (timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted) => {
    if (!sortInProgress && !sorted) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        const delay = 10;
        for (let i = 0; i < shallowCopy.length; i++) {
            for (let j = i + 1; j < shallowCopy.length; j++) {
                if (shallowCopy[i] > shallowCopy[j]) {
                    swapModel(i, j, shallowCopy);
                    updateView(delayMultiplier, delay, shallowCopy);
                    delayMultiplier += 1;   
                }
            }
        }
        setSorted(true);
        finishSortStatus(delayMultiplier, delay);
    }
}