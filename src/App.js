import './App.css';
import ControlPanel from './components/ControlPanel.js'
import Histogram from './components/Histogram.js'
import {useState} from 'react'
import {generateHeights} from './HelperFunctions.js'

function App() {
  const [pxHeightList, setPxHeightList] = useState(generateHeights());

  return (
    <div className = "App">
      <ControlPanel pxHeightList = {pxHeightList} setPxHeightList = {setPxHeightList}/>
      <Histogram pxHeightList = {pxHeightList} />
    </div>
  );
}

export default App;
