
Lodash Cheat Sheet
---


Loops ||   
---|---
`_.times(5, function(){  });` | for(var i = 0; i < 5; i++) 
`_.map(Array, 'objA.name');` | Map 
`_.each(ArrayOrObj, function() {});`|For each

Arrays || 
---|---
`_.times(6, _.partial(_.uniqueId, 'widget_'));` | Create 6 Unique IDs starting with widget_
`_.sample(ArrayObj, [n]);` | Pick n elements from ArrayObj
`_.concat(ArrayObj, 2, 3, 4);` | Concat elements into ArrayObj
`_.join(['a', 'b', 'c'], '~');`| Create strings from array
`_.last([1, 2, 3]);` | Get the last element from array
`_.head([1, 2, 3]);` | Get the first element from array
`_.pull(ArrayObj, 'a', 'c');` | Remove elements 'a' and 'c' from array
`_.sortBy(ArrayObj, ['user', 'age']);` | Sort ArrayObj by user and age.

Objects || 
---|---
`var objB = _.cloneDeep(objA);` | Clone Object
`_.assign(objA, objB);` | Extend Object
`objA = _.omit(objA, ['propA', 'propB']); `| Remove propertys propA and propB from objA
`var objB = objA.pick(['car', 'age']);` | Create object objB from objA choosing certain keys

Math || 
---|---
`_.max(Array);`|Get the max value from Array
`_.min(Array);`|Get the min value from Array
`_.round(objA, precision);`|Round objA to precision
`_.sum(Array);`|Sum elements from Array

Misc || 
---|---
`_.random(15, 20);` | Random Numbers
`_.isArray([1, 2, 3]);`| Check if object is array
`_.isElement(objA);`| Check if objA is a DOM element
`_.isEmpty(objA);`| Check if objA is empty
`_.isFunction(objA);`| Check if objA is a function
`_.isNil(objA);`|Check if objA is null or undefined
`_.isNumber(objA);`|Check if objA is a number
`_.isObject(objA);`|Check if objA is a object
`_.toString(objA);`|Convert objA to string.


