 
# How to implement your first React Native mobile application using NodeJS, JamStack, and Astra DB

In this workshop, you will learn how to convert the Todo web application from a [previous DataStaxDevs workshop](https://github.com/datastaxdevs/appdev-week1-todolist) into a Native mobile and web application. We will actually be using the same database setup as before, so if you've already created it during the prior workshop, you can skip the Database setup section of this workshop.

Previously, the web application looked like the following:

<img width="1276" alt="68747470733a2f2f6d6f6e6f736e61702e636f6d2f696d6167652f4676307950417a6e62654e4a443376596c51667a744d4536796f677a4654" src="https://user-images.githubusercontent.com/82838476/129938665-3d3c1841-7ac6-4279-866f-165f69dd2de2.png">

After this workshop, you will have an Todo native application that can run on Android, iOS, and Web. See the below images for the final product.

**Mobile App on Android:**

<img width="422" alt="AndroidToDoApp" src="https://user-images.githubusercontent.com/82838476/129105380-1b2f4ec5-c4d4-414a-bc8d-907d19bcf7d0.png">

**Mobile App on iOS:**

<img width="437" alt="iPhoneToDoApp" src="https://user-images.githubusercontent.com/82838476/129105390-6c91eba2-7f20-438d-a6d0-2914ce727257.png">

**Web Application in Chrome:**

<img width="1680" alt="WebBrowserToDoApp" src="https://user-images.githubusercontent.com/82838476/129105493-4668143d-a923-437c-b19d-809fa7c55066.png">

## Selecting the React Native Framework

Before the advent of frameworks like React Native and Flutter, if you wanted to build a responsive, native application for mobile and web, you needed to create the same application, in three differenct languaages, on three different platforms: for example, in Swift for iOS in Xcode, in Java or Kotlin for Android in Android Studio, and in JavaScript for Web in a range of IDEs. This resulted in the need to be fluent in all three platforms and languages, and building the same application three times. Since we started with a React-based web application in JavaScript, it made sense to select React Native and Expo for converting the application to native, since Flutter would require converting the entire infrastructure to Dart.

I used Expo to build my Todo React Native App - you can read more [here](https://docs.expo.io/guides/how-expo-works/) about how Expo works. In short, Expo is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase. Using Expo allows you to create a Web app, and native Android and iOS applications from one single codebase, all using React and React Native components. You can also choose to develop using a [bare workflow in Expo](https://docs.expo.dev/bare/exploring-bare-workflow/) or [React Native](https://reactnative.dev/docs/environment-setup), but the convenience of developing using your phone as the emulator shifted the tide in favor of Expo, because it meant that workshop attendees could view their new Todo mobile application without needing to download heavy applications like Xcode and Android Studio and set up the emulators.

**Developing Locally**
 
If you are developing a native application from scratch, you should be developing locally, using a physical Android or iPhone, Xcode for the iPhone simulator, Android Studio for the Android Emulator, and a Web Browser so you can view your project on all platforms as you are developing. All three platforms support hot refresh so you can see changes live as you make updates in your IDE. 

Hard code in your IP to get all three platforms to work simulataneously
 
For the purposes of this workship, we are running the app on the cloud-based IDE, GitPod, which means that you need the Expo Go application installed on your mobile device. We have en Tunnel: Expo CLI also spawns a tunnel process, which allows devices outside of your LAN to access the above servers without you needing to change your firewall settings. If you want to learn more, see ngrok.

 
**Architecture**

- React & React Native to develop the user interface
- Expo to help us build web and moobile apps from the same JS codebase
- Node.js as our runtime environment 
- AstraDB as our free, serverless database
- astrajs/collections, which is a library called to interact with a document-oriented database
- Netlify to deploy the app across a global content delivery network (CDN)

**Getting Started**

- Port over files: src, functions, netlify.toml, package.json, .env

## Differences between React and React Native

React Native is an entire platform that enables you to build native, cross-platform mobile apps, while React is a JavaScript library you use for constructing a high performing UI layer. The browser code in React is rendered through Virtual DOM, while React Native uses Native APIs to render components on mobile. Here are some broad differences betweene the two frameworks:

- CSS vs. StyleSheets: Certain attributes have the same title, except React Native uses camel case instead of hyphens. Some CSS attributes do not have a corresponding equivalent in React Native, so it is best to go through the po. In React, you can create one 

**StyleSheet in ReactNative:**

```
complete: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontFamily: 'Inter_300Light',
    flexWrap: 'wrap'
},
```

**CSS in React:**

```
complete: {
    text-decoration: line-through;
    font-size: 18,
    font-family: Inter_300Light,
}
```

- HTML Tags vs. React Native Components

 
 ## Packages & Libraries

Look at GitPod.yml and package.json to see all the packages and libraries required,

Gitpod.yml
 
 - npm install -g expo-cli
 - npm install -g netlify-cli
 - npm install astra-setup
 - npm install whatwg-fetch
 - npm install -g @expo/ngrok
 - npm install react-native-ui-lib --legacy-peer-deps
 - npm install react-native-gesture-handler react-native-reanimated
 - npm install @react-native-segmented-control/segmented-control
 - npm install @expo-google-fonts/inter --legacy-peer-deps
 - npm install babel-plugin-inline-dotenv --legacy-peer-deps

Package.json
 
## Tips and Tricks
 
- Peer Dependency Errors: --legacy-peer-deps
 
## Native Features

- Segmented Control: https://github.com/react-native-segmented-control/segmented-control
 
- Swipe to delete and complete: https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable/

Sometimes behavior is different between platforms - for example, on Android, when you are typing, the current word will be underlined. Similarly, when I was testing edge cases like very long Todo items that overflow the box size, once I set on Web the item wraps, and 
 
## UI Enhancements

Expo recommends the following UI libraries for easy enhancements for your application, depending on the components and functionality you require. Each library has a different 
 
- FlexWrap: needed to prevent horizontal overflow from a long Todo item
- Removing border around selected TextInput on web: https://github.com/callstack/react-native-paper/issues/1416
- Font: https://docs.expo.dev/guides/using-custom-fonts/
- StatusBar - possible for Android but not iOS: https://docs.expo.dev/guides/configuring-statusbar/
 
If you are interested in creating a Progressive Web App (PWA), you can read more here https://blog.expo.dev/create-and-deploy-web-apps-and-pwas-with-expo-a286cc35d83c about how easy Expo makes creating
 