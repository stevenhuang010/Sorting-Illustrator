export function quickSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus) {
    if (!sortInProgress) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        quickSortHelper();
        finishSortStatus(delayMultiplier, 10);
        function quickSortHelper() {
            
        }
    }
}