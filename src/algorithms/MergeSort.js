export const mergeSort = (timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted) => {
    if (!sortInProgress && !sorted) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        const delay = 10;
        mergeSortHelper(0, shallowCopy.length - 1);
        setSorted(true);
        finishSortStatus(delayMultiplier, delay);
        function mergeSortHelper(left, right) {
            if (left < right) {
                let center = Math.floor((left + right) / 2);
                mergeSortHelper(left, center);
                mergeSortHelper(center + 1, right);
                merge(left, center, right);
            }
        }
    
        function merge(left, center, right) {
            let leftList = [];
            let rightList = [];
            for (let i = left; i <= center; i++) {
                leftList.push(shallowCopy[i]);
            }
            for (let i = center + 1; i <= right; i++) {
                rightList.push(shallowCopy[i]);
            }
            for (let i = left; i <= right; i++) {
                if (leftList.length === 0) {
                    shallowCopy[i] = rightList[0];
                    rightList = rightList.splice(1);
                } else if (rightList.length === 0 || leftList[0] < rightList[0]) {
                    shallowCopy[i] = leftList[0];
                    leftList = leftList.splice(1);
                } else {
                    shallowCopy[i] = rightList[0];
                    rightList = rightList.splice(1);
                }
                updateView(delayMultiplier, delay, shallowCopy);
                delayMultiplier += 1;
            }
        }
    }
}