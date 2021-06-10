import { swapModel } from "../HelperFunctions";

export function quickSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted) {
    if (!sortInProgress) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        quickSortHelper(0, shallowCopy.length - 1);
        setSorted(true);
        finishSortStatus(delayMultiplier, 10);
        function quickSortHelper(left, right) {
            if (left < right) {
                let partition_index = partition(left, right);
                quickSortHelper(left, partition_index - 1);
                quickSortHelper(partition_index + 1, right);
            }
        }

        function partition(left, right) {
            let pivot = shallowCopy[right];
            let startIndex = left - 1;
            for (let j = left; j < right; j++) {
                if (shallowCopy[j] <= pivot) {
                    startIndex++;
                    swapModel(startIndex, j, shallowCopy);
                    updateView(delayMultiplier, 10, shallowCopy);
                    delayMultiplier += 1;
                }
            }
            startIndex++;
            swapModel(startIndex, right, shallowCopy);
            updateView(delayMultiplier, 10, shallowCopy);
            delayMultiplier += 1;
            return startIndex;
        }
    }
}