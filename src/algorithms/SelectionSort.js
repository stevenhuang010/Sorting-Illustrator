import {swapModel} from '../HelperFunctions.js'

export function selectionSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus) {
    if (!sortInProgress) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        for (let i = 0; i < shallowCopy.length; i++) {
            let currMin = shallowCopy[i];
            let minIndex = i;
            for (let j = i + 1; j < shallowCopy.length; j++) {
                if (currMin > shallowCopy[j]) {
                    currMin = shallowCopy[j];
                    minIndex = j;
                }
            }
            swapModel(i, minIndex, shallowCopy);
            updateView(delayMultiplier, 100, shallowCopy);
            delayMultiplier += 1;

            
        }
        finishSortStatus(delayMultiplier, 100);
    }
}