### Reverse Strings and Arrays

#### 6 Points

The `reverseStringsAndArrays` function accepts an array as an argument and returns an array in reverse order. In addition, all nested arrays should also be reversed, e.g.

```js

reverseStringsAndArrays([1,2,3,4]) // ==> returns [4,3,2,1]
reverseStringsAndArrays([[1,2], [3,4]]) // returns [[4,3], [2,1]]
```

If there is a string present, the string should be reversed, e.g.

```js

reverseStringsAndArrays(['one']) // ==> returns ['eno']
reverseStringsAndArrays([10,'twenty', 30, 'forty']) // ==> returns ['ytrof', 30, 'ytnewt', 10]
reverseStringAndArrays([10,[20,'thirty', [40, 50, 60, 'seventy'], 80], 90]) 
// ==> returns [90, [80, ['ytneves', 60, 50, 40], 'ytriht', 20], 10]

```

If an object is present and it has a property that is either a string or an array, the values should be reveresed (including nested arrays and strings), e.g.

```js

reverseStringsAndArrays([{property:'value'}]) // ==> returns [{property: 'eulav'}]
reverseStringsAndArrays([1,2,{property:'value'},3,4]) // ==> returns [4,3,{property: 'eulav'},2,1]
reverseStringsAndArrays([{key: [1,2,3]}]) // ==> returns [{key: [3,2,1]}]
reverseStringsAndArrays([{nestedArrays: [[1,2], [3,4] ]} ]) // ==> returns [{nestedArrays: [[4,3], [2,1]] }]
reverseStringsAndArrays([100, 200, {property: [[1,2], [3,4] ]}, 300, 400]) // ==> returns [400, 300, {property: [[4,3], [2,1]] }, 200, 100]
reverseStringsAndArrays([1, {property: [['two', 3], 'four' ]}, 'five']) // ==> returns ['evif', {property: ['ruof', [3, 'owt']]}, 1 ]

```

Overall, any string or array needs to be reversed.
