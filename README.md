## React-native-webview memory leak issue

This is an example project that reproduces a memory leak in the react-native-webview latest version upgrade (13.0.0).

### Steps to Run

1. Clone this repo
2. Run `yarn` to install dependencies
3. cd into `ios` folder and run `pod install`
4. Run `yarn ios` to run the app on iOS simulator

### Steps to Reproduce the Memory Leak

1. After the app is running, navigate between the tabs.
2. after a few times, the app will crash.

### Suspected Cause

I am no Obj-C developer, so I am not sure what exactly causing the memory leak, but I have tested multiple versions of this package, and I saw that after updating to 13.0.0, the memory leak started to happen.
I suspect its #2930 PR that caused it, but I am not sure.
