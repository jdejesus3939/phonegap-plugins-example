phonegap-plugins-example
========================

Implementing phonegap plugins example


I am just implementing each phonegap API with their each methods in one HTML file. I also make a tiny adjustment toward the given example from reference.

As for now, I only develop on Android platform.

All code sources are taken from reference. Reference: http://phonegap.com/

PS: This implementation is not using phonegap WebViews. In the future, I will implement these example within phonegap WebViews.

Known Bugs:
* Hardware back button - maintaining history (1/7/14). I disabled hardware back button on every other pages but not on the main page. I am depending on back link that targetting on index.html.
* Hardware back button - exiting app (1/7/14). What I wanted is whenever user in the index.html page and pressing hardware back button, the app should exit properly. What I have now is pressing back button in the main page, it exits the app, but then gives out error console. I am still figuring out how to handle exit app properly.
* Screen orientation (1/7/14). When I change the orientation from portrait to landscape (or otherwise) and I am in the any other page but not index.html (like, accelerometer.html or camera.html), then application is just rebuilt and showed index.html again. It does not maintain the page where I were left off before the screen orientation was changed.

Fixed Bugs:
* Hardware back button - maintaining history - Fixed (1/8/14). I enabled hardware back button on every page. The browsing history in maintained by adding event listener to "backbutton" event and calling backHistory() method from app.js.


Development Environment:
* Eclipse IDE Version: Juno Service Release 2 Build id: 20130225-0426
* Java : 1.6
* Emulator : Android 4.3 API 18
* Handheld Device : Android 2.3.6 API 10
