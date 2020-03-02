const describe = (desc, fn) => {
    console.log(desc)
    fn()
}
  
const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (actualValue) => ({
  toBe: (expectedValue) => {
    if (actualValue === expectedValue) {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue)
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue)
      console.log('fail')
      return false
    }
  }
})

const expect = (actualValue) => matchers(actualValue)

function adder(a, b) {
    return a + b 
    }


const expectedValue = {
  isTrue: function() {
    if (!expectedValue) {
        throw new Error("Test failed" + expectedValue + "is not truthy");
    } else {
      return expectedValue
    }
  },
  isFalse: function (expectedValue) {
    if (expectedValue) {
        throw new Error("Test failed" + expectedValue + "is not truthy");
    } else {
    } 
  },
};
  

//   example syntax
//   describe('adder', () => {
//     it('adds two numbers', () => {
//       const result = adder(1, 2)
//       expect(result).toBe(3)
//     })
//   })
  
