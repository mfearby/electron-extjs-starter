const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const extDir = (process.argv[process.argv.length - 1] === 'plain') ? 'client' : 'client_built';

// Print some debugging information if running from within Visual Studio Code
if (process.env.VSCODE_PID) {
  console.log('extDir: ' + extDir);
}

// Set up the fake web server
const server = require('./server/server')();

function createWindow () {
  mainWindow = new BrowserWindow({width: 1280, height: 720});
  mainWindow.loadURL(`file://${__dirname}/${extDir}/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed, except for Mac users
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// Handle plain IPC call from the browser window
// ipcMain.on('asdf', (event, data) => {
//   console.log('data: ' + data);
// });