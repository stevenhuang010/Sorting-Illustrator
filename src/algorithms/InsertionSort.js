export const insertionSort = (timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted) => {
    if (!sortInProgress && !sorted) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        const delay = 50;
        for (let i = 1; i < shallowCopy.length; i++) {
            let curr = shallowCopy[i];
            let j = i - 1;
            while (j >= 0 && shallowCopy[j] > curr) {
                shallowCopy[j + 1] = shallowCopy[j];
                j--;
            }
            shallowCopy[j + 1] = curr;
            updateView(delayMultiplier, delay, shallowCopy);
            delayMultiplier += 1;   

        }
        setSorted(true);
        finishSortStatus(delayMultiplier, delay);
    }
}