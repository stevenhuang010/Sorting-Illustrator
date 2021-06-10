export function generateHeights() {
    const numBars = 60;
    const heightMultiplyFactor = 10;
    let heightList = []
    for (let i = 1; i <= numBars; i++) {
      heightList.push(i * heightMultiplyFactor);
    }
    return heightList;
}

export function swapModel(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}

export function shuffleArray(sortInProgress, pxHeightList, setPxHeightList) {
  if (!sortInProgress) {
      let shallowCopy = [...pxHeightList];
      for (let i = shallowCopy.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          swapModel(i, j, shallowCopy);
      }
      setPxHeightList(shallowCopy);
  }
}
