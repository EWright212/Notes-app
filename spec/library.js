const describe = (description, fn) => {
    console.log("Test: ")
    console.log(description)
    fn()
    console.log("")
}
  
const it = (msg, fn) => describe('  ' + msg, fn)

const expect = (actualValue) => ({
  toBe: (expectedValue) => {
    if (actualValue === expectedValue) {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue)
      console.log('%c    passed','color: #00ff00')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue) 
      console.log('%c    failed','color: #ff0000')  
      return false
    }
  },
  isTrue: () => {
    if (actualValue === true) {
      console.log("actualValue: " + actualValue)
      console.log('%c    passed','color: #00ff00')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log('%c    failed','color: #ff0000') 
      return false
    }
  },
  isFalse: () => {
    if (actualValue === false) {
      console.log("actualValue: " + actualValue)
      console.log('%c    passed','color: #00ff00')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log('%c    failed','color: #ff0000') 
      return false
    }
  }
})
 
