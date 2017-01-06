import { expect } from 'chai'
import closestPair from '../src/closestPair'


describe('closestPair', function(){
  context('takes a nessted array', function(){
    it('should return an object of two keys, pari and distance. The closest two elements of the given nested array', function() {
      expect(closestPair([
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
      ])).to.eql({pair: [[-1, 0], [-2, 0]], distance: 1})
    })
  })
})

//   context('', function(){
//     it('should return the distance between the closest two elements', function(){
//       expect(closestPair()).to.be()
//     })
//   })
// })
