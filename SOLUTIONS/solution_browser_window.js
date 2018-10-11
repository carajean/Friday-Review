function BrowserWindow(
    accountName,
    windowName,
    tabs = [{
        tabURL: 'defaultHomePage.com'
    }]
) {
    this.accountName = accountName;
    this.windowName = windowName;
    this.tabs = tabs;
}

BrowserWindow.prototype.joinWindows = function (secondWindow) {
    this.tabs = [...this.tabs, ...secondWindow.tabs];
};


BrowserWindow.prototype.newTab = function (tabURL) {
    const tab = {
        tabURL
    };
    this.tabs.push(tab);
};

BrowserWindow.prototype.closeTab = function (index) {
    const amountToSplice = index === 0 ? 1 : index;
    const tabsUpToIndex = [...this.tabs.slice(0, index)];
    const tabsAfterIndex = [...this.tabs.slice(index + 1)];

    this.tabs = [...tabsUpToIndex, ...tabsAfterIndex]


    if (this.tabs.length === 0) {
        this.tabs.push({
            tabURL: 'defaultHomePage.com'
        });
    }

};

/*
BrowserWindow.prototype.closeTab = function(num) {
  this.tabs.splice(num, 1);
  if (this.tabs.length < 1) this.tabs =[{ tabURL: 'defaultHomePage.com' }];
};
*/