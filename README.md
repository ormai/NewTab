![](screenshots/NewTab-v1.0.png)

[zombieFox](https://github.com/zombieFox)'s [nightTab](https://github.com/zombieFox/nightTab) browser extension inspired me to make my very own new tab page.

# Setup

### Firefox 
To use a local html file as the firefox NewTab page, follow [this article](https://peterries.net/blog/firefox-set-file-as-home/).

### LibreWolf
`/usr/lib/librewolf/defaults/pref/local-settings.js` should look like this:
```js
//Specifies the .cfg filename (path cannot be changed)
pref("general.config.filename", "librewolf.cfg");

//Allows .cfg file to be stored in plain text without obfuscation
pref("general.config.obscure_value", 0);

pref("general.config.sandbox_enabled", false);
```

In `/usr/lib/librewolf/librewolf.cfg` add the following:
```js
// NewTab
var {classes:Cc,interfaces:Ci,utils:Cu} = Components;
  try {
    Cu.import("resource:///modules/AboutNewTab.jsm");
    var newTabURL = "file:///home/[user]/[some-directory]/[NewTab-directory]/index.html";
    AboutNewTab.newTabURL = newTabURL;
  } catch(e){Cu.reportError(e);} // report errors in the Browser Console
```
Replace `file:///home/[user]/[some-directory]/[NewTab-directory]/index.html` with the path to your html file.

For example mine is `file:///home/mario/dev/NewTab/index.html`.


### Chromium
From the broswer extensions page turn on the **Developer mode**. Then click **Load unpacked** and select the extension directory, in this case `NewTab`. 

# Things to do

- [ ] Reduce the page loading time by:
  - compressing the images;
  - implementing [TradingView](https://www.tradingview.com/) widgets with the TradingView api;
- [ ] in the future, the quote tile will display a random quote from a selection.
- [ ] manually fix the misalignment of diffrent sized tiles.
