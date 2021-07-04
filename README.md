# Mockserver Lite

A minimal local server built with Express and Browsersync

## Why local server?

When developing applications, we often deal with data that is served by 3rd parties such as API or image files. It is imperative for us to be considerate enough to only make necessary calls to the server.

We can host any of the resource on our local machine not only to conserve the request to the server, it also reduces the traffic and delays of the data transmission.

## Usage

### Install dependencies

```sh
# install node dependency
npm install

# install browsersync
npm i -g browser-sync
```

### Folder structure

```
root
├───api
├───node_modules
├───src
└───static
```

- api: Stores .json file that contains data
- static: Stores any files: html, css, images, whatever
- src: Server files

### Hosting static files ONLY

```sh
npm run static
```

This will run the static file server with browsersync at localhost port 3000. The API is **NOT** activated.

### Hosting static files and API endpoints

#### Using Node.js

```sh
npm run serve

# serve in development mode
npm run dev
```

Usually, the files in the src folder only acts as the entry point for the server and might not need to deal with them for hosting purposes.

However, you may edit to suits your use case by running the server in development mode which will spin up a nodemon listener for the server.

#### Using Deno (New)

```sh
# With Node.js/npm installed in computer
npm run serve:deno

# Without Node.js/npm installed
deno run --allow-net --allow-read --unstable src/server.ts
```

The server used in Deno is called [abc](https://deno.land/x/abc@v1.3.3), which is similar to express in Node.

##### Todos:

- [ ] Add automatic refresh with Denon
- [ ] Convert json loading into Promise

### Accessing data examples

- Static files: After providing `my-img.jpg` in `/static` folder, the file can be accessed via `http://localhost:****/my-img.jpg`
- API: After providing data `sample.json` in `/api` folder, the data can be accessed via `http://localhost:****/sample`

### Delete files

```sh
# Remove all files in api folder only
npm run clear:api

# Remove all files in static folder only
npm run clear:static

# Remove all files in both static and api folder
npm run clear:both
```

The commands are used to clean up the residual files used in the previous projects to give it a fresh start. A prompt will ask for your confirmation upon activating the commands to remove files respectively.
