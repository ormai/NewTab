NewTab is a customized browser starting page.

[zombieFox](https://github.com/zombieFox)'s [nightTab](https://github.com/zombieFox/nightTab) browser extension inspired me to make my very own browser starting page.

# Setup

### Firefox 
To use a local html file as the firefox `new tab` page, follow this [article](https://peterries.net/blog/firefox-set-file-as-home/).

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
    var newTabURL = "file:///home/mario/dev/NewTab/index.html";
    AboutNewTab.newTabURL = newTabURL;
  } catch(e){Cu.reportError(e);} // report errors in the Browser Console
```



### Chromium
From the broswer [extensions page](chrome//extensions), turn on the **Developer mode**; a bunch of new buttons will pop out. click **Load unpacked** and select the `NewTab` directory. 

# Things to do

- [ ] Reduce the page loading time by:
  - compressing the images;
  - implementing [TradingView](https://www.tradingview.com/) widgets with the TradingView api;
- [ ] in the future, the quote tile will display a random quote from a selection.
- [ ] manually fix the misalignment of diffrent sized tiles.
