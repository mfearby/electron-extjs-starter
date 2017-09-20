# electron-extjs-starter

The Electron Ext JS Starter project template is based on this [Sencha guide](https://www.sencha.com/blog/creating-installable-desktop-applications-with-ext-js-and-electron/) and has been modified so that you don't need to build your Ext JS application every time you want to test it in Electron. It makes use of the [electron-routes](https://github.com/MarshallOfSound/electron-routes) package (as a substitute for a full web server, which is [a good idea for security reasons](https://blog.samuelattard.com/using-express-inside-electron/)) and demonstrates paginating an array of data in a grid.

## Pre-requisites
- Sencha Ext JS 6.2.0 [GPL v3 version](https://www.sencha.com/legal/GPL/) or the [30 day trial version](https://www.sencha.com/products/extjs/#overview)
- [Sencha Cmd](https://www.sencha.com/products/sencha-cmd/) 6.5.1+ build tool (requires Java)
- [Node.js](https://nodejs.org/) 6.11+

## Quick Start

```
$ git clone https://github.com/mfearby/electron-extjs-starter.git
$ cd electron-extjs-starter
```

Create a ``client/ext`` folder and extract a copy of the Ext JS framework into it (as per the pre-requisites above).

```
$ cd client
$ sencha app build development
$ cd ..
$ npm install
$ npm run plain
```

After cloning the repository you should ``npm run plain`` because the default ``npm start`` loads the production version of the Ext JS app, which you won't have built yet. The development build also recreates the bootstrap files.

## Building the Ext JS app

The production (minified) version of the app is generated and copied to the ``client_build`` folder.

### Mac/Linux
```
$ chmod 755 buildext.sh
$ ./buildext.sh
$ npm start
```

### Windows
```
$ ./buildext
$ npm start
```

## Packaging the Electron app with Ext JS

The package script calls the existing build script (above) to minify the Ext JS app then calls the [Electron Packager](https://github.com/electron-userland/electron-packager) script to bundle everything together with Electron for distribution (in the ``dist`` folder).

### Mac/Linux
```
$ chmod 755 package.sh
$ ./package.sh
```

### Windows
```
$ ./package
```

## Author
Marc Fearby
- [marcfearby.com](http://marcfearby.com)
- [@marcfearby](https://twitter.com/MarcFearby)
