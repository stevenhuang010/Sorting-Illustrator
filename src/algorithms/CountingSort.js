export function countingSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted) {
    if (!sortInProgress && !sorted) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        const delay = 50;
        const maximum = Math.max.apply(Math, pxHeightList);
        const minimum = Math.min.apply(Math, pxHeightList);
        let rangeArray = [];
        let countArray = [];
        initializeArrays();
        updateCountArray();
        let cumSumArray = cumulativeSumArray(countArray);
        sortHeightList();
        setSorted(true);
        finishSortStatus(delayMultiplier, delay);
        function sortHeightList() {
            let previousIndex = 0;
            for (let i = 0; i < rangeArray.length; i++) {
                if (cumSumArray[i] - previousIndex > 0) {
                    updateHeightList(previousIndex, cumSumArray[i], rangeArray[i]);
                    previousIndex = cumSumArray[i];
                }
            }
        }

        function updateHeightList(fromIndex, toIndex, value) {
            for (let i = fromIndex; i < toIndex; i++) {
                shallowCopy[i] = value;
                updateView(delayMultiplier, delay, shallowCopy);
                delayMultiplier += 1;
            }
        }

        function initializeArrays() {
            for (let i = minimum; i <= maximum; i++) {
                rangeArray.push(i);
                countArray.push(0);
            }
        }

        function updateCountArray() {
            for (let i = 0; i < pxHeightList.length; i++) {
                countArray[pxHeightList[i] - minimum] += 1;
            }
        }

        function cumulativeSumArray(array) {
            let returnArray = [];
            let previousEntry = 0;
            for (let i = 0; i < array.length; i++) {
                let newEntry = previousEntry + array[i];
                returnArray.push(newEntry);
                previousEntry = newEntry;
            }
            return returnArray;
        }
    }
}