### Create Functions

Create a function, which returns an array of functions. Each function returns their index in the array.  Here is an example:

```
var arrayOfFunctions = createFunctions(5); // create an array, containing 5 functions

arrayOfFunctions[0](); // must return 0
arrayOfFunctions[3](); // must return 3
arrayOfFunctions[arrayOfFunctions.length - 1 ](); // must return 4
```

Apply concepts such as Closure and Scope to this problem.  Please add comments if you struggle with the problem, this will help us assign partial credit!

**NOTE: YOU MAY NOT USE THE ES6 KEYWORD 'LET' IN THIS PROBLEM. FOR FULL CREDIT, YOU MUST COMPLETE THIS PROBLEM USING ONLY ES5**