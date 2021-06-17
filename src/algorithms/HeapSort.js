import { swapModel } from "../HelperFunctions";

export const heapSort = (timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted) => {
    if (!sortInProgress && !sorted) {
        setSortInProgress(true);
        timeouts.length = 0;
        let delayMultiplier = 1;
        let shallowCopy = [...pxHeightList];
        const delay = 50;
        heapSortHelper(shallowCopy.length);
        setSorted(true);
        finishSortStatus(delayMultiplier, delay);
        function heapSortHelper(length) {
            for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
                buildMaxHeap(i, length);
                updateView(delayMultiplier, delay, shallowCopy);
                delayMultiplier += 1;
            }
            for (let i = length - 1; i > 0; i--) {
                swapModel(0, i, shallowCopy);
                updateView(delayMultiplier, delay, shallowCopy);
                delayMultiplier += 1;
                buildMaxHeap(0, i);
            }
        }

        function buildMaxHeap(rootIndex, length) {
            let largestIndex = rootIndex;
            let rightChildIndex = rootIndex * 2 + 2;
            let leftChildIndex = rootIndex * 2 + 1;
            if (leftChildIndex < length && shallowCopy[leftChildIndex] > shallowCopy[largestIndex]) {
                largestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && shallowCopy[rightChildIndex] > shallowCopy[largestIndex]) {
                largestIndex = rightChildIndex;
            }
            if (largestIndex !== rootIndex) {
                swapModel(largestIndex, rootIndex, shallowCopy);
                buildMaxHeap(largestIndex, length);
            }
        }
    }
}