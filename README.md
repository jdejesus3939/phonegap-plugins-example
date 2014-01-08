phonegap-plugins-example
========================

Implementing phonegap plugins example


I am just implementing each phonegap API with their each methods in one HTML file. I also make a tiny adjustment toward the given example from reference.

As for now, I only develop on Android platform.

All code sources are taken from reference. Reference: http://phonegap.com/

PS: This implementation is not using phonegap WebViews. In the future, I will implement these example within phonegap WebViews.

Known Bugs:
* Hardware back button is buggy. I disabled hardware back button on every other pages but not on the main page. What I wanted is whenever user in the main page and pressing hardware back button, the app should exit properly. What I have now is pressing back button in the main page, it exits the app, but then gives out error console. I am still figuring out how to handle exit app properly.


Development Environment:
* Eclipse IDE Version: Juno Service Release 2 Build id: 20130225-0426
* Java : 1.6
* Emulator : Android 4.3 API 18
* Handheld Device : Android 2.3.6 API 10
