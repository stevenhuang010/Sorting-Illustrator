export function shellSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted) {
    if (!sortInProgress && !sorted) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        const delay = 20;
        for (let gap = Math.floor(shallowCopy.length / 2); gap >= 1; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < shallowCopy.length; i++) {
                let currRightElement = shallowCopy[i];
                let j = i;
                for (j; j >= gap && shallowCopy[j - gap] > currRightElement; j -= gap) {
                    shallowCopy[j] = shallowCopy[j - gap];
                }
                shallowCopy[j] = currRightElement;
                updateView(delayMultiplier, delay, shallowCopy);
                delayMultiplier += 1;   
            }
        }
        setSorted(true);
        finishSortStatus(delayMultiplier, delay);
    }
}