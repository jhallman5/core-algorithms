import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci', function(){
  context('when given an number', function(){
    it('should return a fibonacci array', function(){
      expect(fibonacci(5)).to.eql([0, 1, 1, 2, 3])
      expect(fibonacci(0)).to.eql(undefined)
      expect(fibonacci(1)).to.eql([0])
      expect(fibonacci(2)).to.eql([0, 1])
    })
  })
})
