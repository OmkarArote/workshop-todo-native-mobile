<!--- STARTEXCLUDE --->
# React Native Todo List + Astra DB + Netlify 📒
*40 minutes, Beginner/Intermediate*

In this workshop, you will learn how to convert the Todo web application from a previous [DataStaxDevs workshop](https://github.com/datastaxdevs/appdev-week1-todolist) into a React Native mobile and web application. We will actually be using the same database setup as before, so if you've already created it during the prior workshop, you can skip the Database setup section of this workshop.

This is an example React Native Todo application using a [DataStax AstraDB](https://dtsx.io/appdev-7-7) free tier database.
<!--- ENDEXCLUDE --->

**Mobile App on Android:**

<img width="422" alt="AndroidTodoApp" src="https://user-images.githubusercontent.com/82838476/129105380-1b2f4ec5-c4d4-414a-bc8d-907d19bcf7d0.png">

**Mobile App on iOS:**

<img width="437" alt="iPhoneTodoApp" src="https://user-images.githubusercontent.com/82838476/129105390-6c91eba2-7f20-438d-a6d0-2914ce727257.png">

**Web Application in Chrome:**

<img width="1680" alt="WebBrowserTodoApp" src="https://user-images.githubusercontent.com/82838476/129105493-4668143d-a923-437c-b19d-809fa7c55066.png">

## 🎯 Objectives
* Implement a **React Native** Todo app using Expo
* Learn about **React Native** components and how they are used to dynamically update the DOM with new information
* Learn how to convert a React web app to a **React Native** mobile and web app
* Learn how **state** and **props** changes are used
* Leverage Netlify and DataStax AstraDB

## ℹ️ Frequently asked questions ℹ️ 
- *Are there any prerequites?*
> * You will need a [GitHub account](https://github.com/)
> * You will need to [download Expo Go](https://expo.dev/client) on your mobile phone (if you wish to do that part)

- *What other prerequisites are there?*
> * You will also need an Astra DB account, but we'll work through that in the exercises
> * Use **Chrome** or **Firefox** for the best experience. Other browsers are great, but don't work well with the GitPod integration we use a bit later.

- *Can I run the workshop on my computer?*
> There is nothing preventing you from running the workshop on your own machine.
> If you do so, you will need
> * git installed on your local system
> * [node 15 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
> * [Expo CLI, Watchman, Xcode, Android Studio, and an iPhone or Android](https://docs.expo.dev/get-started/installation/)
>
> You will have to adapt commands and paths based on your environment and install the dependencies by yourself. **We won't provide support** to keep on track with schedule. However, we will do our best to give you the info you need to be successful.

- *Do I need to pay for anything for this workshop?*
> * **No.** All tools and services we provide here are FREE.

- *Will I get a certificate if I attend this workshop?*
> Attending the session is not enough. You need to complete the homework detailed below and you will get a nice badge.

## Materials for the Session

It doesn't matter if you join our workshop live or you prefer to do at your own pace, we have you covered. In this repository, you'll find everything you need for this workshop:

- [Slide deck](./slides.pdf)
- [Discord chat](https://bit.ly/cassandra-workshop)
- [Questions and Answers](https://community.datastax.com/)
  
# Let's start!

## Table of contents

1. [Login or Register to AstraDB and create database](#1-login-or-register-to-astradb-and-create-database)
2. [Deploy to Netlify](#2-deploy-to-netlify)
3. [Create a security token](#3-create-a-security-token)
4. [Launch GitPod IDE](#4-launch-gitpod-ide)
5. [Check Node and NPM versions in GitPod](#5-check-node-and-npm-versions-in-gitpod)
6. [Register for an Expo Account in GitPod](#6-register-for-an-expo-account-in-gitpod)
7. [Install Expo mobile application on your phone](#7-install-expo-mobile-application-on-your-phone)
8. [Launch the Todo app](#8-launch-the-todo-app)
9. [View Mobile App](#9-view-mobile-app)
10. [Link to and Configure Netlify](#10-link-to-and-configure-netlify)
11. [Deploy to production](#11-deploy-to-production)

**Part 1: Create the Database**

## 1. Login or Register to AstraDB and create database
**`ASTRADB`** is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. No credit card required, $25.00 USD credit every month, roughly 5M writes, 30M reads, 40GB storage monthly - sufficient to run small production workloads.  

### ✅ Step 1a: Click the button to login or register with Datastax. You can use your `Github`, `Google` accounts or register with an `email`.

_Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character_

<a href="https://dtsx.io/appdev-7-7"><img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/img/create_astra_db.png?raw=true" /></a>
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-spring-stargate/raw/main/images/tutorials/astra-create-db.gif?raw=true" />
</details>

**Use the following values when creating the database**
|Field| Value|
|---|---|
|**database name**| `todos_native_workshop_db` |
|**keypace**| `todos` |
|**Cloud Provider**| *Use the one you like, click a cloud provider logo,  pick an Area in the list and finally pick a region.* |

_You can technically use whatever you want and update the code to reflect the keyspace. This is really to get you on a happy path for the first run._

You will see your new database `pending` in the Dashboard.

![image](https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/db-pending.png?raw=true)

The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

[🏠 Back to Table of Contents](#table-of-contents)

## 2. Deploy to Netlify
- <details><summary> What does the netlify deploy button do?</summary>The Netlify deploy button will:<ul>
    <li>Create a new repository for you on Github</li>
    <li>Create a site on Netlify</li>
    <li>Link the two together.</li></ul>
</details>

- Click the button to deploy

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/datastaxdevs/workshop-todo-native-mobile)
 * <details><summary>Show me!</summary>
    <img src="tutorial/images/deploy-to-netlify.gif?raw=true" />
    </details>

This will take a few minutes.

  * Click on `Site deploy in progress` within the Netlify UI, 
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-1.png" />
    </details>

  * Click the top deploy link to see the build process.
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-2.png" />
    </details>

  * Wait until the build complete `Netlify Build Complete`,  **When you see Pushing to repository** you're ready to move on.
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-3.png" />
    </details>

  * Scroll up to the top and click on the site name (it'll be after {yourlogin}'s Team next to the Netlify button).
    <details>
    <summary>Show me! </summary>
    <img src="tutorial/images/deploy-4.png" />
    </details>
    
[🏠 Back to Table of Contents](#table-of-contents)

## 3. Create a security token

✅  **Step 3a:**  [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen. Use "Database Administrator" permission.

✅  **Step 3b:**  Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`) in your clipboard and save the CSV, this value would not be provided afterward.

**👁️ Expected output**
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/astra-create-token.gif?raw=true" />
</details>

[🏠 Back to Table of Contents](#table-of-contents)

**Part 2: Launch the Native Application**

## 4. Launch GitPod IDE

✅  **Step 4a:**
- Click the button to launch the GitPod IDE.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

- Check out the **.gitpod.yml** file to see the environment setup. We've installed the Expo CLI, the Netlify CLI, and updated Node and NPM for you already.

✅  **Step 4b:**
- Create split terminals

**Click on the double-panel icon:**

<img width="567" alt="Screen Shot 2021-08-17 at 2 06 09 PM" src="https://user-images.githubusercontent.com/82838476/129800660-d3381bc7-4ed0-45c7-b547-18e3f7ea6248.png">

**End Result:**

<img width="567" alt="Screen Shot 2021-08-17 at 2 06 26 PM" src="https://user-images.githubusercontent.com/82838476/129800644-f09bd58e-c8e8-4a33-b58e-d3d9d017ecaf.png">

## 5. Check Node and NPM versions in GitPod
You will need node 15 and npm 7 or later.

```bash
npm -v
```

```bash
node -v
```

If either are not updated, run the following commands respectively.

```bash
npm install
```

```bash
nvm install node
```

## 6. Register for an Expo Account in GitPod

If you don't have an account:

```bash
expo register
```

If you already have an account:

```bash
expo login
```

Double check that you are logged in.

```bash
expo whoami 
```

## 7. Install Expo mobile application on your phone

Download the Expo App from the Android Play Store or iOS App Store.

## 8. Launch the Todo app

✅  **Step 8a:** Retrieve application token to securely connect to the database

Use the token you previously generated. If you no longer have the token and did not download a .csv, you can generate a new token using [the instructions above](#2-create-a-security-token)

✅  **Step 8b:** Configure Environment Variables and Install Dependencies

1. Set up your Astra Environment

In the repository directory run the following command  to set up your Astra environment.  Note that this does require Node 15 and NPM 7 to work.  You can install a node version manager like `nvm` or `n` to use multiple versions on your system.

```bash
npm exec astra-setup todos_native_workshop_db todos
```

- You will be asked to: **Please paste the Database Admin Token here** so copy over the Token you saved earlier.

<img width="325" alt="129834750-287322eb-c4bb-4656-ad60-8b4e0acfd0d4" src="https://user-images.githubusercontent.com/82838476/129835623-cd05c0c2-8a07-48ad-a450-945e1f885b42.png">

✅  **Step 8c:** Add Host URL to .env

Get workspace URL:

```bash
bash hostURL.sh
```

Final output should look like the below:

<img width="452" alt="Screen Shot 2021-08-17 at 9 13 21 PM" src="https://user-images.githubusercontent.com/82838476/129835879-135a30f4-b3bc-4ca5-889b-4483176d77f3.png">

✅  **Step 8e:** Start Netlify and Expo
  * Run the application (Ignore the QR code generated here)
 
  ```
  netlify dev ; gp preview $(gp url 8888)
  ```
  
  In a new terminal window: (or have a split terminal)
  
  ```
  expo start --tunnel
  ```
  
  Enter 'y' for yes when asked too use another port. Port 19000 is being used for the web app launched with netlify dev, that starts the web app with expo start --web (This opens when you start do netlify dev.)
  
  <img width="495" alt="Screen Shot 2021-08-08 at 11 44 25 PM" src="https://user-images.githubusercontent.com/82838476/128941524-db4b7c9a-d21f-41e8-bc6d-729b189d6325.png">
  
  **Note:** if you get a message saying that Tunnel is reverting to LAN because of ngrok - Press **y** to continue.
  
  <img width="605" alt="Tunnel ngrok update" src="https://user-images.githubusercontent.com/82838476/129105648-8c0e9c26-5ca4-42a5-a305-673c0d2b1789.png">
 
✅  **Step 8f:** Launch your app in the web browser
  
Open your web application at the URL specified in the HOST line above in a new tab in your browser.

**Web Application in Chrome:**

<img width="1680" alt="WebBrowserTodoApp" src="https://user-images.githubusercontent.com/82838476/129105493-4668143d-a923-437c-b19d-809fa7c55066.png">

✅  **Step 8g:** Launch your app on your mobile device

**Scan the QR code** with your phone camera to open your application in the Expo App!

The QR code in the terminal will look like this:

<img width="542" alt="QRImage" src="https://user-images.githubusercontent.com/82838476/127718324-1f7b5f78-8048-4d55-8fe8-5d1141eea26e.png">

## 9. View Mobile App

See examples of what your finished product should look like:

**Mobile App on Android:**

<img width="422" alt="AndroidTodoApp" src="https://user-images.githubusercontent.com/82838476/129105380-1b2f4ec5-c4d4-414a-bc8d-907d19bcf7d0.png">

**Mobile App on iOS:**

<img width="437" alt="iPhoneTodoApp" src="https://user-images.githubusercontent.com/82838476/129105390-6c91eba2-7f20-438d-a6d0-2914ce727257.png">

[🏠 Back to Table of Contents](#table-of-contents)

## 10. Link to and Configure Netlify
Execute each of the commands below to link your code to your Netlify deployment.
  * First thing, we'll need to **STOP** the `netlify dev` command we issued a moment ago. In the terminal where you executed the netlify command issue a `CTRL-C` (control key + the C key) in order to stop the process.
  * Then continue with the following commands
  * This will pop up a browser to authenticate with netlify
  ```
  netlify login
  ```
  _Note, when using GitPod the preview pane will not display this properly. You must click the "open in a new window" button in the very top right of the preview pane._

  * This will link your workspace to the associated site
  ```
  netlify link
  ```

  * This will take the .env file created by astra-setup and upload it to netlify
  ```
  netlify env:import .env
  ```

<!--
  * Will be used to allow you to execute `netlify open`
  ```
  netlify sites:list
  ```
-->

### 11. Deploy to production
Now that you've hooked everything up, time to deploy to production.

  * Run
  ```
  netlify build
  ```

  * Then run
  ```
  netlify deploy --prod
  ```

  * Then finally run
  ```
  netlify open:site
  ```
  
  You've deployed your app to Netlify!

# Need a refresher on React Basics?
<details><summary>Take me to the React stuff</summary>
  We've created a separate repo going over the Basics of React. To get there, click the link below.
  
  [GOTO React-Basics](https://github.com/datastaxdevs/react-basics)
  
  When you're done, just click on the "Back to Main" breadcrumb to come back here.
</details>

### Things to Note:
 - The contents of this repo are based on [Jake's port](https://github.com/tjake/todo-astra-react-serverless/) of the [TodoMVC code](https://github.com/tastejs/todomvc/tree/master/examples/react) originally written by [Pete Hunt](https://github.com/petehunt).
 - The example is modified from https://github.com/huksley/todo-react-ssr-serverless.
<!--- ENDEXCLUDE --->


