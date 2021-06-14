import './App.css';
import ControlPanel from './components/ControlPanel.js'
import Histogram from './components/Histogram.js'
import {useState} from 'react'
import {generateHeights} from './HelperFunctions.js'

function App() {
  const [numBars, setNumBars] = useState(55);
  const [pxHeightList, setPxHeightList] = useState(generateHeights(numBars));
  
  return (
    <div className = "App">
      <ControlPanel pxHeightList = {pxHeightList} setPxHeightList = {setPxHeightList} numBars = {numBars} setNumBars = {setNumBars}/>
      <Histogram pxHeightList = {pxHeightList} />
    </div>
  );
}

export default App;
