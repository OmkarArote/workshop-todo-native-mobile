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

1. [Login or Register to AstraDB and Create Database](#1-login-or-register-to-astradb-and-create-database)
2. [Create a Security Token](#2-create-a-security-token)
3. [Deploy to Netlify](#3-deploy-to-netlify)
4. [Access your GitHub repository and Launch GitPod IDE](#4-access-your-github-repository-and-launch-gitpod-ide)
5. [Check Node and NPM versions in GitPod](#5-check-node-and-npm-versions-in-gitpod)
6. [Register for an Expo Account in GitPod](#6-register-for-an-expo-account-in-gitpod)
7. [Install Expo Mobile Application on Your Phone](#7-install-expo-mobile-application-on-your-phone)
8. [Launch the Todo app](#8-launch-the-todo-app)
9. [View Mobile App](#9-view-mobile-app)
10. [Link to and Configure Netlify](#10-link-to-and-configure-netlify)
11. [Deploy to Production](#11-deploy-to-production)

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

## 2. Create a Security Token

✅  **Step 2a:**  [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen. Use "Database Administrator" permission.

✅  **Step 2b:**  Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c...`) in your clipboard and save the CSV, this value would not be provided afterward.

**👁️ Expected output**
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/astra-create-token.gif?raw=true" />
</details>

[🏠 Back to Table of Contents](#table-of-contents)

## 3. Deploy to Netlify
- <details><summary> What does the netlify deploy button do?</summary>The Netlify deploy button will:<ul>
    <li>Create a new repository for you on Github</li>
    <li>Create a site on Netlify</li>
    <li>Link the two together.</li></ul>
</details>

- Click the button to deploy

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/datastaxdevs/workshop-todo-native-mobile)
 * <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/appdev-week2-tiktok/blob/master/tutorial/images/deploy-to-netlify.gif?raw=true" />
    </details>

This will take a few minutes.

  * Click on `Site deploy in progress` within the Netlify UI, 
    <details>
    <summary>Show me! </summary>
    <img src="https://github.com/datastaxdevs/appdev-week2-tiktok/blob/master/tutorial/images/deploy-1.png" />
    </details>

  * Click the top deploy link to see the build process.
    <details>
    <summary>Show me! </summary>
    <img src="https://github.com/datastaxdevs/appdev-week2-tiktok/blob/master/tutorial/images/deploy-2.png" />
    </details>

  * Wait until the build complete `Netlify Build Complete`,  **When you see Pushing to repository** you're ready to move on.
    <details>
    <summary>Show me! </summary>
    <img src="https://github.com/datastaxdevs/appdev-week2-tiktok/blob/master/tutorial/images/deploy-3.png" />
    </details>

  * Scroll up to the top and click on the site name (it'll be after {yourlogin}'s Team next to the Netlify button).
    <details>
    <summary>Show me! </summary>
    <img src="https://github.com/datastaxdevs/appdev-week2-tiktok/blob/master/tutorial/images/deploy-4.png" />
    </details>
    
[🏠 Back to Table of Contents](#table-of-contents)

**Part 2: Launch the Native Application**

## 4. Access your GitHub repository and Launch GitPod IDE

✅  **Step 4a:**
  * Click on the `GitHub` in `Deploys from GitHub` to get back to your new repository.  Scroll to where you were in the README.
    <img src="https://github.com/datastaxdevs/appdev-week3-graphql/blob/main/tutorial/images/deploy-5.png?raw=true" />

✅  **Step 4b:**
- Click the button to launch the GitPod IDE from **YOUR** repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

#### WAIT! Before moving on ensure you are working out of YOUR repository, not the datastaxdevs repository.
* From your GitPod terminal execute the following command
```
git remote -v
```

If you are still using the `datastaxdevs` repo please ensure to follow the previous step, [step3](#3-deploy-to-netlify) to get to your repo.

ℹ️ _It may take 3-5 minutes for GitPod to fully initialize._

> (_Note_: if the Gitpod button does not work, for example you are using Safari, don't despair!
> You can manually build the URL you need and open it in a new tab like this: `https://gitpod.io/#<YOUR REPO FULL URL>`,
> pasting in it the full address of **your** GitHub repository. For example,
> `https://gitpod.io/#https://github.com/JohnSmith/workshop-todo-native-mobile`, assuming your are "JohnSmith"
> on Github and your repo is "workshop-todo-native-mobile").

- Check out the **.gitpod.yml** file to see the environment setup. We've installed the Expo CLI, the Netlify CLI, and updated Node and NPM for you already.

## 5. Check Node and NPM versions in GitPod

✅  **Step 5a:**
You will need node 15 and npm 7 or later.

```bash
npm -v
```

```bash
node -v
```

If either are not updated, run the following commands respectively.

```bash
nvm install node
```

```bash
npm install
```

✅  **Step 5b:**
- Create split terminals

**Click on the double-panel icon:**

<img width="567" alt="Screen Shot 2021-08-17 at 2 06 09 PM" src="https://user-images.githubusercontent.com/82838476/129800660-d3381bc7-4ed0-45c7-b547-18e3f7ea6248.png">

**End Result:**

<img width="567" alt="Screen Shot 2021-08-17 at 2 06 26 PM" src="https://user-images.githubusercontent.com/82838476/129800644-f09bd58e-c8e8-4a33-b58e-d3d9d017ecaf.png">

## 6. Register for an Expo Account in GitPod

If you don't have an account:

```bash
expo register
```

Open https://expo.dev/signup in a new tab.

If you already have an account:

```bash
expo login
```

Double check that you are logged in.

```bash
expo whoami 
```

You should see:
<img width="498" alt="Screen Shot 2021-08-24 at 12 13 06" src="https://user-images.githubusercontent.com/82838476/130650964-56d83149-36e7-45d4-a711-45641e55f2e0.png">

## 7. Install Expo Mobile Application on Your Phone

Download the Expo App from the Android Play Store or iOS App Store.

**Android:**
<img width="45%" alt="PlayStore" src="https://user-images.githubusercontent.com/82838476/130651174-ed432081-811f-48f9-a161-1175c64a8680.jpg">

**iOS:**
<img width="45%" alt="AppStore" src="https://user-images.githubusercontent.com/82838476/130651399-649bdc12-5fd4-4760-81a7-5871846091e4.png">

## 8. Launch the Todo app

✅  **Step 8a:** Retrieve application token to securely connect to the database

Use the token you previously generated. If you no longer have the token and did not download a .csv, you can generate a new token using [the instructions above](#2-create-a-security-token)

✅  **Step 8b:** Configure Environment Variables and Install Dependencies

1. Set up your Astra Environment

In the repository directory run the following command  to set up your Astra environment.  Note that this does require Node 15 and NPM 7 to work.  You can install a node version manager like `nvm` or `n` to use multiple versions on your system.

```bash
npm exec astra-setup todos_native_workshop_db todos
```

- You will be asked to: **Please paste the Database Admin Token here** so copy over the Token you saved earlier, and hit enter. It will start with AstraCSAstraCS:cvdPRONUrUUT:...

<img width="738" alt="Screen Shot 2021-08-24 at 12 17 57" src="https://user-images.githubusercontent.com/82838476/130652258-5a8a5da0-b2a4-4acf-9d1c-3b3a98a97d6a.png">

✅  **Step 8c:** Add Host URL to .env

Get workspace URL:

```bash
bash hostURL.sh
```

Final output should look like the below:

<img width="452" alt="Screen Shot 2021-08-17 at 9 13 21 PM" src="https://user-images.githubusercontent.com/82838476/129835879-135a30f4-b3bc-4ca5-889b-4483176d77f3.png">

You can see the output of the .env file by running ```cat .env```.

✅  **Step 8d:** Start Netlify and Expo
  * Run the application (Ignore the QR code generated here)
 
  ```
  netlify dev ; gp preview $(gp url 8888)
  ```
  
  If this doesn't open in the right port (for example, 19003) - swap the port number to 8888. You will get the right url by running:
  ```
  gp url 8888
  ```
  
  In a new terminal window: (or have a split terminal)
  
  ```
  expo start --tunnel
  ```
  
  Enter 'y' for yes when asked too use another port. Port 19000 is being used for the web app launched with netlify dev, that starts the web app with expo start --web (This opens when you run netlify dev.)
  
  <img width="495" alt="Screen Shot 2021-08-08 at 11 44 25 PM" src="https://user-images.githubusercontent.com/82838476/128941524-db4b7c9a-d21f-41e8-bc6d-729b189d6325.png">
  
  **Note:** if you get a message saying that Tunnel is reverting to LAN because of ngrok - Press **y** to continue.
  
  <img width="605" alt="Tunnel ngrok update" src="https://user-images.githubusercontent.com/82838476/129105648-8c0e9c26-5ca4-42a5-a305-673c0d2b1789.png">
 
✅  **Step 8e:** Launch your app in the web browser
  
Open your web application at the URL specified in the HOST line above in a new tab in your browser.

**Web Application in Chrome:**

<img width="1680" alt="WebBrowserTodoApp" src="https://user-images.githubusercontent.com/82838476/129105493-4668143d-a923-437c-b19d-809fa7c55066.png">

✅  **Step 8f:** Launch your app on your mobile device

**Scan the QR code** with your phone camera to open your application in the Expo App! You may need to resize the terminal to make the QR code render properly. You can also scan the QR code from within the Expo Go app.

Scanning in the Expo Go App:
<img width="45%" alt="WebBrowserTodoApp" src="https://user-images.githubusercontent.com/82838476/130652900-fbdf3874-b014-445d-ba9b-c3a2996defef.jpg">

## 9. View Mobile App

✅  **Step 9a:** Launch your app on your mobile device

Add some items to your Todo list (type in the 'What needs to be done?' input and hit enter)! These get stored in Astra DB.

See examples of what your finished product should look like:

**Mobile App on Android:**

<img width="422" alt="AndroidTodoApp" src="https://user-images.githubusercontent.com/82838476/129105380-1b2f4ec5-c4d4-414a-bc8d-907d19bcf7d0.png">

**Mobile App on iOS:**

<img width="437" alt="iPhoneTodoApp" src="https://user-images.githubusercontent.com/82838476/129105390-6c91eba2-7f20-438d-a6d0-2914ce727257.png">

✅  **Step 9b:** See your Todos in Astra DB.

- Navigate to the Dashboard in Astra DB and click on the todos_native_workshop_db. 
<img width="45%" alt="Screen Shot 2021-08-24 at 9 49 13 AM" src="https://user-images.githubusercontent.com/82838476/130657937-b25aed15-c14a-4e88-b065-b930c475c998.png">

- Then click on the CQL tab.
<img width="45%" alt="Screen Shot 2021-08-24 at 9 49 28 AM" src="https://user-images.githubusercontent.com/82838476/130657954-32d9840b-2fff-4783-b171-7ca013cd8062.png">

Finally, run the following commands: 
<img width="45%" alt="Screen Shot 2021-08-24 at 12 33 32" src="https://user-images.githubusercontent.com/82838476/130656955-253b9857-7200-4414-a309-b6acff53cbc8.png">

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
  
  * Update the environment variables in your .env file - (See generateEndpoint function in api.js to see why we do this).

Before:
  ```
  IS_PROD="false"
  GITPOD="true"
  ```

After:
  ```
  IS_PROD="true"
  GITPOD="false"
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

### 11. Deploy to Production
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
  
  [🏠 Back to Table of Contents](#table-of-contents)

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


