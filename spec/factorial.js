import { expect } from 'chai'
import factorial from '../src/factorial'

// describe the function
// what is suppose to do
// multiple test cases
// reference to chai library

describe('factorial', () => {
  context('when given a number', () => {
    it('should return the factorial', () => {
      expect(factorial(5)).to.equal(120)
    })
  });

  context('when given a negetive number', () =>{
    it('should retrn an undefined', () => {
      expect(factorial(-5)).to.equal(undefined)
    })
  })
});
