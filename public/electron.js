const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

//https://github.com/willjw3/react-electron/blob/master/package.json
//https://github.com/codingwithjustin/react-electron/blob/main/package.json
//https://github.com/leartgjoni/electron-js-video-player/blob/master/package.json

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: '',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
}

ipcMain.on('ping', (event, arg) => {
  console.log('Main.js receveid ping from renderer.js')
})

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
