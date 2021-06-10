export function insertionSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus) {
    if (!sortInProgress) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        for (let i = 1; i < shallowCopy.length; i++) {
            let curr = shallowCopy[i];
            let j = i - 1;
            while (j >= 0 && shallowCopy[j] > curr) {
                shallowCopy[j + 1] = shallowCopy[j];
                j--;
            }
            shallowCopy[j + 1] = curr;
            updateView(delayMultiplier, 50, shallowCopy);
            delayMultiplier += 1;   

        }
        finishSortStatus(delayMultiplier, 50);
    }
}