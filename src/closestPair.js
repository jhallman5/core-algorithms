export default function closestPair(array) {
  let currerntObject = {distance: 99};
  for ( let i = 0; i < array.length; i++ ) {
    let pair1 = array[i]
    for (let j = i + 1; j < array.length; j++) {
      let pair2 = array[j]
      let axisX = Math.abs(pair1[0] - pair2[0])
      let axisY = Math.abs(pair1[1] - pair2[1])
      let pair = [pair1, pair2]
      let distance = axisX + axisY
      if (distance < currerntObject.distance) {
        currerntObject = {pair: [pair1, pair2], distance: distance }
      }
    }
  }
  return currerntObject
}

closestPair([
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
])
