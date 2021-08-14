 



Using Expo allows you to create a Web app, and native Android and iOS applications from one single codebase, all using React and React Native components. You can also choose to not build using Expo


I used Expo to build my React Native App - you can read more here https://docs.expo.io/guides/how-expo-works/ about how Expo works. set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

If you are interested in creating a Progressive Web App (PWA), you can read more here https://blog.expo.dev/create-and-deploy-web-apps-and-pwas-with-expo-a286cc35d83c about how easy Expo makes creating

Tunnel: Expo CLI also spawns a tunnel process, which allows devices outside of your LAN to access the above servers without you needing to change your firewall settings. If you want to learn more, see ngrok.


 
 Market Problem
 
 Solution
 
**Architecture**

- React & React Native to develop the user interface
- Expo to help us build web and moobile apps from the same JS codebase
- Node.js as our runtime environment 
- AstraDB as our free, serverless database
- astrajs/collections, which is a library called to interact with a document-oriented database
- Netlify to deploy the app across a global content delivery network (CDN)

 
 GitPod.yml
 
 npm install -g expo-cli
      npm install -g netlify-cli
      npm install astra-setup
      npm install whatwg-fetch
      npm install -g @expo/ngrok
      npm install react-native-ui-lib --legacy-peer-deps
      npm install react-native-gesture-handler react-native-reanimated
      npm install @react-native-segmented-control/segmented-control
      npm install @expo-google-fonts/inter --legacy-peer-deps
      npm install babel-plugin-inline-dotenv --legacy-peer-deps
 
 Tips and Tricks:
 - 
 - Peer Dependency Errors: --legacy-peer-deps
 
 
 
 Tunnel
 - Necessary for GitPod / cloud-based testing
 
 
 
 Segmented Control
 https://github.com/react-native-segmented-control/segmented-control
 
**Native Gestures**
 
 - Swipe to delete and Complete: https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable/
 
**UI Enhancements**
 
 - FlexWrap
 - Removing border around selected TextInput on web: https://github.com/callstack/react-native-paper/issues/1416
 - Font: 
 - StatusBar - possible for Android but not iOS
 
 
 
