

var ser = require('../index.js')

var serialized = 'a:3:{s:7:"test123";i:1;s:6:"payday";i:3;s:7:"asdf123";i:2;}'

var unserialized = ser.unserialize(serialized)

console.log(unserialized)


var testObject = {
  foo: 'bar',
  toes: 10,
  hands: [
    'left',
    'right'
  ]
}


var serObj = ser.serialize( testObject )

console.log(serObj)
