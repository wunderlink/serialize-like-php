
var tape = require('tape')
var deepEqual = require('deep-equal')

var ser = require('../index.js')


var testObject = { 
  foo: 'bar',
  toes: 10, 
  hands: [
    'left',
    'right'
  ]
}

var testString = 'a:3:{s:3:"foo";s:3:"bar";s:4:"toes";i:10;s:5:"hands";a:2:{i:0;s:4:"left";i:1;s:5:"right";}}'

tape('Serialize', function(t){

  var serialized = ser.serialize( testObject )
  t.equal( serialized, testString, 'Should serialize' )

  var unserialized = ser.unserialize( serialized )
  var isEqual = deepEqual( unserialized, testObject )
  t.ok( isEqual, 'Should unserialize' )
  t.end()

})

tape('Unserialize', function(t){

  var unserialized = ser.unserialize( testString )
  var isEqual = deepEqual( unserialized, testObject )
  t.ok( isEqual, 'Should unserialize' )

  var serialized = ser.serialize( unserialized )
  t.equal( serialized, testString, 'Should serialize' )
  t.end()

})

