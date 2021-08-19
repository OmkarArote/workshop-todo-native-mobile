 
# How to implement your first React Native mobile application using NodeJS, JamStack, and Astra DB

In this workshop, you will learn how to convert the Todo web application from a [previous DataStaxDevs workshop](https://github.com/datastaxdevs/appdev-week1-todolist) into a React Native mobile and web application. We will actually be using the same database setup as before, so if you've already created it during the prior workshop, you can skip the Database setup section of this workshop.

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

Before the advent of frameworks like React Native and Flutter, if you wanted to build a responsive, native application for mobile and web, you needed to build the same application, in three differenct languaages, on three different platforms: for example, in Swift for iOS in Xcode, in Java or Kotlin for Android in Android Studio, and in JavaScript for Web in a range of IDEs. This resulted in the need to be fluent in all three platforms and languages, and building the same application three times. Since we started with a React-based web application in JavaScript, we chose to use React Native and Expo for converting the application to native, since Flutter would require converting the entire infrastructure to Dart.

This workshop utilizes Expo to build the Todo React Native App - you can read more [here](https://docs.expo.io/guides/how-expo-works/) about how Expo works. In short, Expo is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase. Using Expo allows you to create a Web app, and native Android and iOS applications from one single codebase, all using React and React Native components. You can also choose to develop using a [bare workflow in Expo](https://docs.expo.dev/bare/exploring-bare-workflow/) or [React Native](https://reactnative.dev/docs/environment-setup), but the convenience of developing using your phone as the emulator shifted the tide in favor of Expo, because it meant that workshop attendees could view their new Todo mobile application without needing to download heavy applications like Xcode and Android Studio and set up the emulators. Expo also has [Snack](https://docs.expo.dev/workflow/snack/), a playground in your browser, on which you can view code snippets in a browser-based emulator.

## Getting Started

**Developing Locally**
 
If you are developing a native application from scratch, you should be developing locally, using a physical Android or iPhone, Xcode for the iPhone simulator, Android Studio for the Android Emulator, and a Web Browser so you can view your project on all platforms as you are developing. All three platforms support hot refresh so you can see changes live as you make updates in your IDE. To develop locally, you need the Expo CLI, Watchman, Git, Node.js, an IDE of your choice ( VisualStudio) and ideally, Xcode and Android Studio. You can walk through the entire setup process [here](https://docs.expo.dev/get-started/installation/) and create a empty Expo project. 

When you are ready to test your project, you will start your project in debugging mode with the command: **expo start**. This will bring up a QR code you can scan with your phone camera to bring up the app, and give you shortcut commands to run the Android, iOS, and web applications. The simulators can be a little tricky, so they work best when you have the Android emulator running already before doing expo start --android or a if already running, whereas the iOS simulator works best when it's quit before doing expo start --ios or i if already running. Similarly, you can just pay attention to the browser tab with your IP and the port like https:://192.198.62.35/8888 and ignore the others that are launched by Netlify and Expo.

```
expo start
expo start --ios
expo start --android
```

In order to get all three platforms to connect to the Expo and Netlify servers simultaneously, you will need to hard code in your Port (8888) and IP address. This configuration is detailed in the netlify.toml file and the .env file you will create during the workshop. The end setup for the .env file will look like below:

<img width="372" alt="Screen Shot 2021-08-18 at 3 01 19 PM" src="https://user-images.githubusercontent.com/82838476/129977952-9ee54ccc-8c3b-4db2-ab57-7b8416010669.png">

**Workshop Requirements**
 
In this workshop, you will be running the app on the cloud-based IDE, GitPod, which means that you need the Expo Go application installed on your mobile device in order to view the mobile app. You will also need to have specific setup in your .env file, shown below. Additionally, you will need to start the app using **expo start --tunnel**, in which Expo CLI [starts a tunnel using ngrok](https://docs.expo.dev/guides/how-expo-works/), which allows devices outside of your LAN to access the above servers without you needing to change your firewall settings. You will run your app by entering the following in separate terminal windows.

```
netlify dev

expo start --tunnel
```
 
## Architecture

You will utilize:

- React & React Native to develop the user interface
- Expo to help us build web and mobile apps from the same JS codebase
- Node.js as our runtime environment 
- AstraDB as our free, serverless database
- astrajs/collections, which is a library called to interact with a document-oriented database
- Netlify to deploy the app across a global content delivery network (CDN)

## Differences between React and React Native

Both React and React Native are open-sourced by Facebook, and are utilized in applications like Facebook, Instagram, Discord, AirBnB, Pinterest, UberEats, Skype, and SalesForce. 

- React is a framework for building applications using JavaScript. 
- React Native is a platform that allows you to build native, cross-platform mobile apps
- React.js is a JavaScript library you use for constructing a high performing UI layer. 

React.js is central to React Native, and is built upon React’s principles and syntax, so converting from one to the other is relatively intuitive. The browser code in React is rendered through Virtual DOM, while React Native uses Native APIs to render components on mobile. React uses HTML and CSS, whereas React Native uses its own components and libraries. You can also use hot reload in React Native so you can see your application's current state while building.

Here are some examples of code differences between the two frameworks with examples:

- **HTML Tags vs. React Native Components**: React Native uses native UI components instead of HTML -- here are some examples of translations. Many of these React Native components have more event handlers that require specific calling syntax, which you can read in detail here.

**React vs. React Native:**

```
<div> vs <View>
<input> vs <TextInput>
<li> vs <FlatList>
```

- **CSS vs. StyleSheets**: Certain attributes have the same title, except React Native uses camel case instead of hyphens. Some CSS attributes do not have a corresponding equivalent in React Native, so it is best to go through the [documentation](https://reactnative.dev/docs/components-and-apis) in detail. In React, you can create one file that has all the styling for each class, but in React Native, you include it in a StyleSheet component at the end of the file (if you're not creating a styling theme for the entire app).

**CSS in React:**

```
<div className="complete"> </div>

complete: {
    text-decoration: line-through;
    font-size: 18,
    font-family: Inter_300Light,
}
```

**StyleSheet in ReactNative:**

```
<View style={styles.complete}> </View>

const styles = StyleSheet.create({
    complete: {

        textDecorationLine: 'line-through',
        fontSize: 18,
        fontFamily: 'Inter_300Light',
        flexWrap: 'wrap'
    }
  
});
```

- **Import Statements**: You will now have to specify the import of each component from react-native

```
import { SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';
```

- **Layouts, Navigation, Animation and more**: All are done differently in React Native. The [FlexBox algorithm](https://reactnative.dev/docs/flexbox) is a responsive way to arrange components, while [Navigation](https://reactnative.dev/docs/navigation#react-navigation) requires the react-native-navigation library. You can read more about the Animated API and many other available APIs [here](https://reactnative.dev/docs/animated).

## Conversion Steps

- Port over the following folders and files: src (Main code changes occur here), functions (keep the same), netlify.toml (Configure for Expo), package.json (run npm install after copying this over), .env

**src/utils/api.js**: Configure fetch path to accomodate environment variables.

Before:
```
const response = await fetch(`/.netlify/functions/getRestTodos`);
```

After: 
```
// GENERATE
const generateEndpoint = () => {
  const ipAddress = process.env.HOST;
  const port = process.env.PORT;

  // Netlify deploy
  if (process.env.IS_PROD === "true") {
    return ``;
  }
  // Running on GitPod
  else if (process.env.GITPOD === "true") {
    return ipAddress;
  }
  // Local configuration
  else { 
    return `http://${ipAddress}:${port}`;
  }
}

// Add to Create, Read, Update, and Delete API calls
const endpoint = generateEndpoint();
 ...
const response = await fetch(`${endpoint}/.netlify/functions/...RestTodo`...
```

**netlify.toml**:

Before:
```
[build]
command = "npm run build"
functions = "functions"
publish = "build"

```

After:
```
[build]
command = "expo build:web"
functions = "functions"
publish = "web-build"
targetPort = 8888
```

**.env**: Add these lines to the original .env you had

```
HOST="192.168.86.95" // Add your local IP here or GitPod url
PORT="8888"
IS_PROD="false"
GITPOD="false" // Change to true if on GitPod
```

- **Move App.js file from within src directory to root directory**: Add universal font, and add try-catch blocks for api calls to resolve unhandled promise rejection warnings.

Before:
```
const deleteRestTodo = async (id) => {
	await api.deleteRestTodo(id);
	getRestTodos();
};
```

After:
```
const deleteRestTodo = async (id) => {
	try {
		wait api.deleteRestTodo(id);
		getRestTodos();
	} catch (error) {
		console.log(error)
	}
};
```

**Additional Steps:**

- Swap HTML tags for React Native UI components, and find the appropriate properties for those components to enable functionality
- Translate CSS into StyleSheets for each component
- Install additional libraries to support Expo and React Native (Take a look at package.json)
 
 ## Packages & Libraries

Look at GitPod.yml (gets cloud workspace set up before you start the application) and package.json to see all the packages and libraries required.

**Gitpod.yml:**

```tasks:
  - name: todonativemobileapp
    before: |
      cd /workspace/todonativemobileapp
      nvm install node
      npm install
      npm install -g expo-cli (Command line interface for Expo)
      npm install -g netlify-cli (Command line interface for Netlify)
      npm install astra-setup (To create the .env file during the workshop)
      npm install whatwg-fetch
      npm install -g @expo/ngrok (For tunnels on GitPod)
      npm install @expo/ngrok@4.1.0
      npm install react-native-gesture-handler (For swipe to delete/complete gesture)
      npm install @react-native-segmented-control/segmented-control  (For filter based on completeness)
      npm install @expo-google-fonts/inter --legacy-peer-deps (For custom fonts)
      npm install babel-plugin-inline-dotenv --legacy-peer-deps (For using inline environment variables)
 ```

## Native Feature Additions

In this workshop, you will also add native features that are not present in the original web application. These include:

- [Segmented Control](https://github.com/react-native-segmented-control/segmented-control): Instead of a filter at the bottom of the list, you will learn how to create a segmented control component that allows you to filter tasks based on their status of All, Active, and Completed.
 
- [Swipe to delete and complete](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable/): In addition to being able to click the trash icon for delete and the check box for complete and incomplete, you can also swipe from the right side to expose a drawer and swipe across to the left side to delete, and from the left side to expose a drawer that swaps based on the state of the task (Complete or Incomplete). Swiping across will change its state and the item will close itself.
 
## UI Enhancements

Expo recommends the following [UI libraries](https://docs.expo.dev/guides/userinterface/) for sleek, native-looking enhancements for your application, depending on the components and functionality you require. Each library has a different set of functionality and appearance, so choose accordingly.

Other additions to the native app include: 

- [flexWrap](https://reactnative.dev/docs/flexbox#flex-wrap): Property needed to prevent horizontal and vertical overflow from a long Todo item -- **flexWrap: 'wrap'**.
- [Removing border when TextInput is selected on the web](https://github.com/callstack/react-native-paper/issues/1416): Perfect example of a platform specific bug -- on web when the input box is selected, it is highlighted in blue, so you can import Platform to specify platform-related properties.
- [Custom Fonts](https://docs.expo.dev/guides/using-custom-fonts/): Adding custom fonts from Google Fonts to allow for the same font across platforms
- [StatusBar](https://docs.expo.dev/guides/configuring-statusbar/) - possible for Android but not iOS. You can change the color behind the StatusBar on Android, but not on iOS

## Tips for Success

- **Platform-Specific Bugs**: Sometimes native behavior is different between platforms - for example, on Android, when you are typing, the current word will be underlined. As a result, it is key to keep all emulators open while developing so that you can catch platform-specific bugs as they happen. For example, because all emulators were running as the app was built, it was possible to detect that the behavior with the onChangeText event handler for the TextInput component was different on Android than on iOS and Web, and swap it out accordingly.

- **Peer Dependency Errors:** In case you are getting faulty peer dependency errors, first look at your package.json to see if you can resolve these manually, otherwise try re-running the npm command with the legacy peer dependency flag. These appear to occur becuase NPM 7 is more picky about peer dependencies than NPM 6. The legacy peer dependencies flag reverts to NPM 6 standards for peer dependencies.

```
npm install @expo-google-fonts/inter --legacy-peer-deps
```

- **Finding Additional Features**: Expo and React Native do not all all desired components included in the core set. As a result, it is frequently necessary to look for libraries that contain that functionality in the [React Native Directory](https://reactnative.directory/). For example, there isn't a Checkbox component that works on all platforms, so this directory is helpful to lookup all the options available and assess their community support, as well when they were last updated.

- **Search for Solutions**: Google, StackOverflow, blogs, and forums are the best teachers; if you're stumped on an issue, it's very probable that another developer has faced the same issue. Search for a solution using keywords and code snippets, and you should be able to find many workarounds for the problem. If all else fails, find the forum for the library you're using and post a question there.
 
