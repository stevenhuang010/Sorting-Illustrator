import React from 'react'
import Button from './Button.js'
import {useState} from 'react'
import {generateHeights, shuffleArray, updateView, finishSortStatus} from '../HelperFunctions.js'
import {bubbleSort} from '../algorithms/BubbleSort.js'
import {insertionSort} from '../algorithms/InsertionSort.js'
import {selectionSort} from '../algorithms/SelectionSort.js'
import {mergeSort} from '../algorithms/MergeSort.js'
import {quickSort} from '../algorithms/QuickSort.js'
import {heapSort} from '../algorithms/HeapSort.js'

let timeouts = [];
const ControlPanel = ({pxHeightList, setPxHeightList}) => {
    const [sortInProgress, setSortInProgress] = useState(false);
    const [sorted, setSorted] = useState(true);

    const updateView = (delayMultiplier, inherentDelayFactor, array) => {
        timeouts.push(setTimeout((array) => {
            setPxHeightList(array);
        }, inherentDelayFactor * delayMultiplier, [...array]));
    }

    const finishSortStatus = (delayMultiplier, inherentDelayFactor) => {
        timeouts.push(setTimeout(() => {
            setSortInProgress(false);
        }, inherentDelayFactor * delayMultiplier));
    }

    const shuffleAnon = () => {
        shuffleArray(sortInProgress, pxHeightList, setPxHeightList, setSorted);
    }

    const bubbleSortAnon = () => {
        bubbleSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted);
    }

    const insertionSortAnon = () => {
        insertionSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted);
    }

    const selectionSortAnon = () => {
        selectionSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted);
    }

    const mergeSortAnon = () => {
        mergeSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted);
    }

    const quickSortAnon = () => {
        quickSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted);
    }

    const heapSortAnon = () => {
        heapSort(timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, setSorted);
    }

    const endAnimation = () => {
        if (sortInProgress) {
            for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            timeouts.length = 0;
            //update view
            updateView(0, 0, generateHeights());
            setSortInProgress(false);
            setSorted(true);
        }
    }
  
    return (
        <div id = "controlPanel">
            <h1>Sorting Visualizer</h1>
            <div id = "buttonControls">
                <Button clickable = {!sortInProgress} clickFunction = {shuffleAnon} text = "Shuffle"/>
                <Button clickable = {sortInProgress} clickFunction = {endAnimation} text = "End Animation" />
                <Button clickable = {!sortInProgress && !sorted} clickFunction = {bubbleSortAnon} text = "Bubble Sort" />
                <Button clickable = {!sortInProgress && !sorted} clickFunction = {insertionSortAnon} text = "Insertion Sort" />
                <Button clickable = {!sortInProgress && !sorted} clickFunction = {selectionSortAnon} text = "Selection Sort" />
                <Button clickable = {!sortInProgress && !sorted} clickFunction = {mergeSortAnon} text = "Merge Sort" />
                <Button clickable = {!sortInProgress && !sorted} clickFunction = {quickSortAnon} text = "Quick Sort" /> 
                <Button clickable = {!sortInProgress && !sorted} clickFunction = {heapSortAnon} text = "Heap Sort" /> 
            </div>
        </div>
    )
}

export default ControlPanel
