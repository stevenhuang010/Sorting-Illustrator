import React from 'react'
import Button from './Button.js'
import Slider from  './Slider.js'
import {useState} from 'react'
import {generateHeights, shuffleArray} from '../HelperFunctions.js'
import {bubbleSort} from '../algorithms/BubbleSort.js'
import {insertionSort} from '../algorithms/InsertionSort.js'
import {selectionSort} from '../algorithms/SelectionSort.js'
import {mergeSort} from '../algorithms/MergeSort.js'
import {quickSort} from '../algorithms/QuickSort.js'
import {heapSort} from '../algorithms/HeapSort.js'
import {shellSort} from '../algorithms/ShellSort.js'
import {countingSort} from '../algorithms/CountingSort.js'
import {timeouts} from '../HelperFunctions.js'

const ControlPanel = ({pxHeightList, setPxHeightList, numBars, setNumBars}) => {
    const [sortInProgress, setSortInProgress] = useState(false);
    const [sorted, setSorted] = useState(true);
    const algorithmDictionary = {
        "Bubble Sort" : bubbleSort,
        "Insertion Sort" : insertionSort,
        "Selection Sort" : selectionSort,
        "Merge Sort" : mergeSort,
        "Quick Sort" : quickSort,
        "Heap Sort" : heapSort,
        "Shell Sort" : shellSort,
        "Counting Sort" : countingSort
    }
    
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

    const sortingAlgorithm = (name) => {
        algorithmDictionary[name](timeouts, sortInProgress, setSortInProgress, pxHeightList, updateView, finishSortStatus, sorted, setSorted);
    }

    const shuffleAnon = () => {
        shuffleArray(sortInProgress, pxHeightList, setPxHeightList, setSorted);
    }

    const changeNumBars = (event) => {
        setNumBars(parseInt(event.target.value));
        setPxHeightList(generateHeights(event.target.value));
        setSorted(true);
    }

    const endAnimation = () => {
        if (sortInProgress) {
            for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            timeouts.length = 0;
            updateView(0, 0, generateHeights(numBars));
            setSortInProgress(false);
            setSorted(true);
        }
    }
  
    return (
        <div id = "controlPanel">
            <h1>Sorting Visualizer</h1>
            <div id = "controls">
                <Button clickable = {!sortInProgress} clickFunction = {shuffleAnon} text = "Shuffle"/>
                <Button clickable = {sortInProgress} clickFunction = {endAnimation} text = "End Animation" />
                <Slider changeable = {!sortInProgress} label = "Number of Bars" min = {10} max = {100} stateVariable = {numBars} alterState = {changeNumBars}/>
                {Object.keys(algorithmDictionary).map((sortKey, index) => (
                    <Button key = {index} clickable = {!sortInProgress && !sorted} clickFunction = {() => sortingAlgorithm(sortKey)} text = {sortKey} />
                ))}
            </div>
        </div>
    )
}

export default ControlPanel
