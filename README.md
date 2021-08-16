# Todo List Native Application
Build a To-Do List Native App, created for a DataStax workshop, using React Native, JavaScript, Node.js, and DataStax AstraDB.

**Part 1: Create the Database**

<!--- STARTEXCLUDE --->
# Todo List + AstraDB + Cassandra 📒
*20 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/todo-astra-jamstack-netlify#prerequisites)*

This is an example React Native To-Do application using a [DataStax AstraDB](https://dtsx.io/appdev-7-7) free tier database.
<!--- ENDEXCLUDE --->

**Mobile App on Android:**

<img width="422" alt="AndroidTodoApp" src="https://user-images.githubusercontent.com/82838476/129105380-1b2f4ec5-c4d4-414a-bc8d-907d19bcf7d0.png">

**Mobile App on iOS:**

<img width="437" alt="iPhoneTodoApp" src="https://user-images.githubusercontent.com/82838476/129105390-6c91eba2-7f20-438d-a6d0-2914ce727257.png">

**Web Application in Chrome:**

<img width="1680" alt="WebBrowserTodoApp" src="https://user-images.githubusercontent.com/82838476/129105493-4668143d-a923-437c-b19d-809fa7c55066.png">

## 🎯 Objectives
* Create a "from scratch" **React Native ** app using Expo
* Learn about **React Native** components and how they are used to dynamically update the DOM with new information
* Learn how **state** and **props** changes are used
* Learn how to use Swagger to interact with the database using a **REST** API 
* Leverage Netlify and DataStax AstraDB
* Learn how to convert a React web app to a React Native mobile and web app

## ℹ️ Frequently asked questions ℹ️ 

- *Can I run the workshop on my computer?*
> There is nothing preventing you from running the workshop on your own machine.
> If you do so, you will need
> * git installed on your local system
> * [node 15 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
> * [Expo CLI, Watchman, Xcode, Android Studio, and an iPhone or Android](https://docs.expo.dev/get-started/installation/)
>
> You will have to adapt commands and paths based on your environment and install the dependencies by yourself. **We won't provide support** to keep on track with schedule. However, we will do our best to give you the info you need to be successful.

- *What other prerequisites are there?*
> * You will need a GitHub account and an Expo account
> * You will also need an Astra DB account, but we'll work through that in the exercises
> * Use **Chrome** or **Firefox** for the best experience. Other browsers are great, but don't work well with the GitPod integration we use a bit later.

- *Do I need to pay for anything for this workshop?*
> * **No.** All tools and services we provide here are FREE.

- *Will I get a certificate if I attend this workshop?*
> Attending the session is not enough. You need to complete the homework detailed below and you will get a nice badge.

**NEED TO UPDATE THE BELOW LINKS**
## Materials for the Session

It doesn't matter if you join our workshop live or you prefer to do at your own pace, we have you covered. In this repository, you'll find everything you need for this workshop:

- [Slide deck](./slides.pdf)
- [Discord chat](https://bit.ly/cassandra-workshop)
- [Questions and Answers](https://community.datastax.com/)
  
# Let's start!

## Table of contents

1. [Login or Register to AstraDB and create database](#1-login-or-register-to-astradb-and-create-database)
2. [Create a security token](#2-create-a-security-token)
3. [Create a table with REST API using Swagger](#3-create-a-table-with-rest-api-using-swagger)
4. [Insert data in the Table with the REST API using Swagger](#4-insert-data-in-the-table-with-the-rest-api-using-swagger)
5. [Retrieving values](#5-retrieving-values)
6. [Launch GitPod IDE](#6-launch-gitpod-ide)
7. [Check Node & NPM versions in GitPod](#7-check-node-&-NPM-versions-in-GitPod)
8. [Register for an Expo Account](#8-register-for-an-expo-account)
9. [Install Expo mobile application on your phone](#9-install-expo-mobile-application-on-your-phone)
10. [Launch the To-Do app](#10-launch-the-to-do-app)
11. [View Finished Products](#11-view-finished-product)

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
|**database name**| `todos_workshop_db` |
|**keypace**| `todos` |
|**Cloud Provider**| *Use the one you like, click a cloud provider logo,  pick an Area in the list and finally pick a region.* |

_You can technically use whatever you want and update the code to reflect the keyspace. This is really to get you on a happy path for the first run._

You will see your new database `pending` in the Dashboard.

![image](https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/db-pending.png?raw=true)

The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

[🏠 Back to Table of Contents](#table-of-contents)

## 2. Create a security token

✅  **Step 2a:**  [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen. Use "Database Administrator" permission.

✅  **Step 2b:**  Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`) in your clipboard and save the CSV, this value would not be provided afterward.

**👁️ Expected output**
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-graphql-netflix/blob/main/tutorial/images/astra-create-token.gif?raw=true" />
</details>

[🏠 Back to Table of Contents](#table-of-contents)

## 3. Create a table with REST API using Swagger

✅  **Step 3a:** Open **Swagger** by 
1. Click on your active database
2. Click `Connect` TAB
3. Click `REST API`
4. Click link to your Swagger endpoint.

*As shown on the picture below.*
![image](https://user-images.githubusercontent.com/23346205/124656913-d28b1b00-de6f-11eb-9712-e7629f5b8867.png?raw=true)

✅  **Step 3b:** Navigate to the **create a table** section

1. Once **Swagger** is launched, scroll down and navigate to the **schemas** section

![image](https://user-images.githubusercontent.com/23346205/124658644-ffd8c880-de71-11eb-8064-c26a2979b66f.png?raw=true)

2. Then, within the **schemas** section, navigate to **Create a table** and click on it to open the section. 
- Take particular note of the REST URI **/api/rest/v2/schemas/keyspaces/{keyspaceName}/tables**. 
- Also, take note that this is using a **POST** command.

![image](https://user-images.githubusercontent.com/23346205/124658990-71187b80-de72-11eb-8d25-01e6c6216aa5.png?raw=true)

3. Click the "Try it out" button

![image](https://user-images.githubusercontent.com/23346205/124659185-ae7d0900-de72-11eb-9108-1595c3306bb3.png?raw=true)

✅  **Step 3c:** Create table **restfromreadme_by_id**

1. Enter your **Astra token _(X-Cassandra-Token)_**
2. Enter the **keyspaceName** `todos`

![image](https://github.com/datastaxdevs/appdev-week1-todolist/blob/main/images/3c2_create-table.png?raw=true)

3. Finally, copy the create table statement using the code below into the **body** field
```json
{
  "name": "restfromreadme_by_id",
  "ifNotExists": true,
  "columnDefinitions": [
    {
      "name": "id",
      "typeDefinition": "uuid",
      "static": false
    },
    {
      "name": "text",
      "typeDefinition": "text",
      "static": false
    },
    {
      "name": "key",
      "typeDefinition": "text",
      "static": false
    },
        {
          "name": "completed",
          "typeDefinition": "boolean"
        }
  ],
  "primaryKey": {
    "partitionKey": [
      "id"
    ]
  }
}
```

4. And click **execute** to apply the command and create the table

![image](https://user-images.githubusercontent.com/23346205/124660673-84c4e180-de74-11eb-89a9-55dfb017bb8f.png?raw=true)

You should see a **201** response telling you it correctly created the "restfromreadme_by_id" table.

Again, take a note of the Request URL that was used to create the table. This comes into play later when we take a look at the code in `astraRestClient.js` used to create our TODO application table.

![image](https://user-images.githubusercontent.com/23346205/124663337-f05c7e00-de77-11eb-8daa-856d15f0d223.png?raw=true)

[🏠 Back to Table of Contents](#table-of-contents)

## 4. Insert data in the Table with the REST API using Swagger
Now that we have a table to use, let's insert a row of data into the table, again using REST to do so.

✅  **Step 4a:** Navigate to **Add row** section

1. Scroll down and navigate to the **data** section
2. Then find **Add row** and click it to open the section
  - Also take note this is using a **POST** command.
3. Click **Try it out** just like we did previously

![image](https://user-images.githubusercontent.com/23346205/124664268-2fd79a00-de79-11eb-8902-1d6636e986fb.png?raw=true)

✅  **Step 4b:** Fill in values and add a row

1. Add your Astra token
2. Add the keyspaceName `todos`
3. Add the tableName `restfromreadme_by_id`. Note, this is the table we created in the earlier step

![image](https://github.com/datastaxdevs/appdev-week1-todolist/blob/main/images/4b3_insert-row.png?raw=true)

4. Copy the following JSON into the **body**

```json
{"id":"57dbd260-d905-11eb-b985-c522859819b9","completed":false,"text":"TODO FROM README","key":"none"}
```

5. Click **Execute**. You should see code **201** in the response telling you it was a success and displaying the id of the row you just created.

[🏠 Back to Table of Contents](#table-of-contents)

## 5. Retrieving values
Finally, now that we created a table and inserted a row of data let's **GET** the data back out.

✅  **Step 5a:** Navigate to **Retrieve all rows** section

1. Scroll up within the **data** section
2. Then find **Retrieve all rows** and click it to open the section
  - Take note this is using a **GET** command.
3. Click **Try it out** just like we did previously

![image](https://user-images.githubusercontent.com/23346205/124666300-d6bd3580-de7b-11eb-8bf6-aeeb0487962b.png?raw=true)

✅  **Step 5b:** Execute the command to display the data

1. Enter your **Astra token _(X-Cassandra-Token)_**
2. Enter the **keyspaceName** `todos`
3. Enter the **tableName** `restfromreadme_by_id`

![image](https://github.com/datastaxdevs/appdev-week1-todolist/blob/main/images/5b3_retrieve-rows.png?raw=true)

4. Click **Execute**
5. View the end result data that should be exactly what we created in the previous step

![image](https://user-images.githubusercontent.com/23346205/124666847-9d38fa00-de7c-11eb-8673-84f421ff9282.png?raw=true)

[🏠 Back to Table of Contents](#table-of-contents)

**Part 2: Launch the Native Application**

## 6. Launch GitPod IDE
- Click the button to launch the GitPod IDE.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

- Check out the **.gitpod.yml** file to see the environment setup. We've installed the Expo CLI, the Netlify CLI, and updated Node and NPM for you already.

## 7. Check Node & NPM versions in GitPod
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

## 8. Register for an Expo Account in GitPod

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

## 9. Install Expo mobile application on your phone

Download the Expo App from the Android Play Store or iOS App Store.

## 10. Launch the To-Do app

✅  **Step 10a:** Retrieve application token to securely connect to the database

Use the token you previously generated. If you no longer have the token and did not download a .csv, you can generate a new token using [the instructions above](#2-create-a-security-token)

✅  **Step 10b:** Configure Environment Variables and Install Dependencies

1. Set up your Astra Environment

In the repository directory run the following command  to set up your Astra environment.  Note that this does require Node 15 and NPM 7 to work.  You can install a node version manager like `nvm` or `n` to use multiple versions on your system.

```bash
npm exec astra-setup todos_workshop_db todos
```

✅  **Step 10c:** Add Host URL to .env

Get workspace URL:

```bash
gp url 8888
```

Take the output of the previous command and replace line 6 in your .env file:

Example:

```
HOST="https://8888-pink-jasmine-vdeak5gt.ws-us13.gitpod.io"
```

✅  **Step 10d:** Add PORT, IS_PROD, and GITPOD environment variables to .env

```
PORT="8888"
IS_PROD="false"
GITPOD="true"
```

Final output should look like the below:

<img width="494" alt="Screen Shot 2021-08-11 at 11 40 00 AM" src="https://user-images.githubusercontent.com/82838476/129084846-a623d530-c97f-4e29-b55a-07394c090369.png">

✅  **Step 10d:** Start Netlify and Expo
  * Run the application (Ignore the QR code generated here)
 
  ```
  netlify dev
  ```
  
  In a new terminal window: (or have a split terminal)
  
  ```
  expo start --tunnel
  ```
  
  Enter 'y' for yes when asked too use another port. Port 19000 is being used for the web app launched with netlify dev, that starts the web app with expo start --web (This opens when you start do netlify dev.)
  
  <img width="495" alt="Screen Shot 2021-08-08 at 11 44 25 PM" src="https://user-images.githubusercontent.com/82838476/128941524-db4b7c9a-d21f-41e8-bc6d-729b189d6325.png">
  
  **Note:** if you get a message saying that Tunnel is reverting to LAN because of ngrok - Press **y** to continue.
  
  <img width="605" alt="Tunnel ngrok update" src="https://user-images.githubusercontent.com/82838476/129105648-8c0e9c26-5ca4-42a5-a305-673c0d2b1789.png">
 
✅  **Step 10e:** Launch your app in the web browser
  
Open your web application at the URL specified in the HOST line above in a new tab in your browser.

**Web Application in Chrome:**

<img width="1680" alt="WebBrowserTodoApp" src="https://user-images.githubusercontent.com/82838476/129105493-4668143d-a923-437c-b19d-809fa7c55066.png">

✅  **Step 10f:** Launch your app on your mobile device

**Scan the QR code** with your phone camera to open your application in the Expo App!

The QR code in the terminal will look like this:

<img width="542" alt="QRImage" src="https://user-images.githubusercontent.com/82838476/127718324-1f7b5f78-8048-4d55-8fe8-5d1141eea26e.png">

## 11. View Mobile App

See examples of what your finished product should look like:

**Mobile App on Android:**

<img width="422" alt="AndroidTodoApp" src="https://user-images.githubusercontent.com/82838476/129105380-1b2f4ec5-c4d4-414a-bc8d-907d19bcf7d0.png">

**Mobile App on iOS:**

<img width="437" alt="iPhoneTodoApp" src="https://user-images.githubusercontent.com/82838476/129105390-6c91eba2-7f20-438d-a6d0-2914ce727257.png">

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


