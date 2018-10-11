### Browser Window 

#### 8.00 Points

Create a constructor function named `BrowserWindow` that returns an instance (object) that represents a window from a web browser.
The instance created from the `BrowserWindow` function should contain the following properties:

  - `accountName` - the account name
  - `windowName` - the name of the window such as the category of tabs
  - `tabs` - this is an optional argument and contains an array of objects. If the argument is not passed to the function, the property
  should be initialized with the array `[{tabURL: 'defaultHomePage.com}]`

In addition to the properties attached to the instance, the following methods should be accessible via the prototype chain:

  - `joinWindow` - accepts a browser window instance as an argument and merges the windows tabs into the tabs property
  of the window `joinWindow` is called on.
  - `newTab` - creates a new tab object and adds it to the browser window's tabs array
  - `closeTab` - accepts a number argument that represents the index position in the array of tabs to remove






