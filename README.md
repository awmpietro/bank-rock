# Bank Rock
Test project for 4cadia foundation

[![](https://img.shields.io/badge/dependencies-docker-blue.svg)]()

[![](https://img.shields.io/badge/node-%3E%3D12-green.svg)]()
[![](https://img.shields.io/badge/express-4-important.svg)]()
[![](./server/test/badge.svg)]()

[![](https://img.shields.io/badge/react-16.14.0-lightgrey.svg)]()
[![](https://img.shields.io/badge/redux-4-9cf.svg)]()
[![](https://img.shields.io/badge/redux--saga-1-ff69b4.svg)]()

[![](https://img.shields.io/badge/postgres-11.9-informational.svg)]()
[![](https://img.shields.io/badge/redis-latest-yellowgreen.svg)]()

## Dependency:
Bank Rock requires [Docker](https://docs.docker.com/docker-for-mac/install/) (Created on Docker desktop community for MacOS - Engine: 10.03.8, Compose: 1.25.4)

## How to Run:

```sh
git clone https://github.com/awmpietro/bank-rock.git
cd bank-rock
docker-compose up
```

After building, You can access the app on `http://localhost:5000`. server will run on `http://localhost:8080`
Credentials for login (populated register):
```sh
email: johndoe@test.com
password: 1234
```

## The project
The project is made by 4 services:
* [server] - Built on top of Node
* [client] - Built on top of React
* [postgres] - relational database
* [redis] - Memory database

### server, postgres and redis
**server** is the backend API of the application. Is built on top of **Node** and **Express** framework. 
It uses **express-session** for handling user sessions when authenticated.
#### architecture
```sh
/routes //where routes/endpoints are defined
/controllers //where logic for the routes is implemented
/config // Configuration files, contain database connection data
/database // Migrations and seeders needed for run the app
/middlewares // Midlewares that runs before the controllers like check if user is authenticated
/models // Models maps the database relations
/test //Tests for the app
/coverage //Shows the tests coverage for the app, in a nice HTML format.
```
**redis** memory database is used only for storing and maintening the user sessions, running in port 6379.

**postgres** relational database is where all the app's data lives in, running in port 5432

### client
**client** is the app interface/front-end. Is a **SPA** built on top of **React**. For creating a acceptable (but yet poor!) interface it uses Bootstrap framework.
client uses **Redux** for managing the state of the application and also **redux-saga** as an alternative to redux-thunk for working with async data and manage it's side-efffects.
#### architecture
All relevant code is inside **src** folder
```sh
/components // Reusable components throughout the app
/layouts // Components for creating the layout shared throughout the app
/lib // lib contains code for some logig external to components like validations
/pages // the main pages/routes of the app
/store // where all logic made by redux and sagas resides, tottaly portable for a react-native app, for example
/styles // additional css styles for the app
App.js // Where all routes are defined
index.js //Entry point where the store is created

```

## What could be improved
* Write code in Typescript. Since i'm not still that expert in Typescript, i chose to code in Javascript for the sake of brevity for the test;
* Tests: I wrote a few tests on server, it could cover more. On client i wrote no tests as i am still learning strategies of testing in React;
* More functionalities

## What i think are the stronger points:
* Architecture of the project
* Easy to run in Docker
* Using Redux and Saga in client
* Scalability of both server and client is very easy

