const describe = (desc, fn) => {
    console.log("Test: ")
    console.log(desc)
    fn()
    console.log("")
}
  
const it = (msg, fn) => describe('  ' + msg, fn)

const expect = (actualValue) => ({
  toBe: (expectedValue) => {
    if (actualValue === expectedValue) {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue)
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log(Array.isArray(actualValue))
      console.log("expectedValue: " + expectedValue)
      console.log(Array.isArray(expectedValue))
      console.log('fail')
      return false
    }
  },
  isTrue: () => {
    if (actualValue === true) {
      console.log("actualValue: " + actualValue)
      
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log('fail')
      return false
    }
  },
  isFalse: () => {
    if (actualValue === false) {
      console.log("actualValue: " + actualValue)
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log('fail')
      return false
    }
  }
})
 
