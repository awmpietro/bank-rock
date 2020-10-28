# Bank Rock

This is a project for educational purposes. Bank Rock is a prototype app for a Open Banking project

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

- [server] - Built on top of Node
- [client] - Built on top of React
- [postgres] - relational database
- [redis] - Memory database

### server, postgres and redis

**server** is the backend API of the application. Is built on top of **Node** and **Express** framework.
It uses **express-session** for handling user sessions when authenticated.
**redis** memory database is used only for storing and maintening the user sessions, running in port 6379.
**postgres** relational database is where all the app's data lives in, running in port 5432

### client

**client** is the app interface/front-end. Is a **SPA** built on top of **React**. For creating a acceptable (but yet poor!) interface it uses Bootstrap framework.
client uses **Redux** for managing the state of the application and also **redux-saga** as an alternative to redux-thunk for working with async data and manage it's side-efffects.

## TODO

- Write code in Typescript. Since i'm not still that expert in Typescript, i chose to code in Javascript for the sake of brevity for the test;
- Tests: I wrote a few tests on server, it could cover more. On client i wrote no tests as i am still learning strategies of testing in React;
- More functionalities
