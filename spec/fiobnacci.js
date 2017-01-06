import { expect } from 'chai'
import fiobnacci from '../src/fiobnacci'

describe('fiobnacci', function(){
  context('when given an number', function(){
    it('should return a fiobnacci array', function(){
      expect(fiobnacci(5)).to.be([0, 1, 1, 2, 3])
      expect(fiobnacci(0)).to.be(undefined)
      expect(fiobnacci(1)).to.be([0])
      expect(fiobnacci(2)).to.be([0, 1])
    })
  })
})
