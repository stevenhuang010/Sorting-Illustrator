import {swapModel} from '../HelperFunctions.js'

export function bubbleSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus) {
    if (!sortInProgress) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        for (let i = 0; i < shallowCopy.length; i++) {
            for (let j = i + 1; j < shallowCopy.length; j++) {
                if (shallowCopy[i] > shallowCopy[j]) {
                    swapModel(i, j, shallowCopy);
                    updateView(delayMultiplier, 10, shallowCopy);
                    delayMultiplier += 1;   
                }
            }
        }
        finishSortStatus(delayMultiplier, 10);
    }
}