const describe = (desc, fn) => {
    console.log(desc)
    fn()
}
  
const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (asssertion) => {
    if (exp === assertion) {
    console.log('pass')
    return true
    } else {
    console.log('fail')
    return false
    }
  }
})

const expect = (exp) => matchers(exp)

function adder(a, b) {
    return a + b 
    }
const assertion = {
  isTrue: function(assertion) {
    if (!assertion) {
        throw new Error("Assertion failed" + assertion + "is not truthy");
    }
  },
  isFalse: function (assertion) {
    if (assertion) {
        throw new Error("Assertion failed" + assertion + "is not truthy");
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
  
