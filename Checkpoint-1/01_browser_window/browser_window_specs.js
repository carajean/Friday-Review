/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('BrowserWindow', () => {
  let chromeWindow;
  let firefoxWindow;
  beforeEach(() => {
    chromeWindow = new BrowserWindow('Robert Brown', 'Email');
    firefoxWindow = new BrowserWindow('Abigale Miller', 'Social Media', [
      { tabURL: 'twitter.com' },
    ]);
  });

  it('the Window function dynamically sets properties on the window instance ', () => {
    expect(firefoxWindow.accountName).toBe('Abigale Miller');
    expect(firefoxWindow.windowName).toBe('Social Media');
    expect(firefoxWindow.tabs).toEqual([{ tabURL: 'twitter.com' }]);
  });

  it('the Window function sets adds a default tab if the tabs argument is omitted', () => {
    expect(chromeWindow.accountName).toBe('Robert Brown');
    expect(chromeWindow.windowName).toBe('Email');
    expect(chromeWindow.tabs).toEqual([{ tabURL: 'defaultHomePage.com' }]);
  });

  it('has a joinWindows method on its prototype that merges the argument window into the Window the method is called on', () => {
    const chromeWindowTwo = new BrowserWindow('Jillian Smith', 'Random', [
      { tabURL: 'youtube.com' },
      { tabURL: 'netflix.com' },
    ]);

    const mergedChromeWindow = chromeWindow.joinWindows(chromeWindowTwo);
    expect(chromeWindow.tabs.length).toBe(3);
    expect(chromeWindow.tabs).toEqual([
      { tabURL: 'defaultHomePage.com' },
      { tabURL: 'youtube.com' },
      { tabURL: 'netflix.com' },
    ]);
  });

  it("has a newTab method on its prototype that creates a new tab and adds it to the window's tabs array", () => {
    firefoxWindow.newTab('instagram.com');

    expect(firefoxWindow.tabs.length).toBe(2);
    expect(firefoxWindow.tabs).toEqual([
      { tabURL: 'twitter.com' },
      { tabURL: 'instagram.com' },
    ]);

    chromeWindow.newTab('gmail.com');

    expect(chromeWindow.tabs.length).toBe(2);
    expect(chromeWindow.tabs).toEqual([
      { tabURL: 'defaultHomePage.com' },
      { tabURL: 'gmail.com' },
    ]);
  });

  it('has a closeTab method that accepts an index position and removes (closes) the tab at that index position', () => {
    const randomWindow = new BrowserWindow('Carlos Smith', 'random', [
      { tabURL: 'youtube.com' },
      { tabURL: 'netflix.com' },
      { tabURL: 'twitter.com' },
      { tabURL: 'gmail.com' },
    ]);
    randomWindow.closeTab(1);

    expect(randomWindow.tabs).toEqual([
      { tabURL: 'youtube.com' },
      { tabURL: 'twitter.com' },
      { tabURL: 'gmail.com' },
    ]);

    randomWindow.closeTab(2);

    expect(randomWindow.tabs).toEqual([
      { tabURL: 'youtube.com' },
      { tabURL: 'twitter.com' },
    ]);

    firefoxWindow.closeTab(0);

    expect(firefoxWindow.tabs).toEqual([{ tabURL: 'defaultHomePage.com' }]);
  });
});
