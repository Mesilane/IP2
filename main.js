const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

let win = undefined

const createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        minWidth: 1200,
        minHeight: 800,
        height: 600,
        icon: path.join("./icons/mainIcon.png"),
        frame: true,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#040D12',
            symbolColor: '#5C8374',
            height: 31
        },
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:true,
            nodeIntegration:true,
            preload: path.join(__dirname, './preload.js')
        },
    })
    win.loadFile('./html/index.html');
    win.setTitle('Sound lab')
    win.setMenuBarVisibility(false)
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());

let wind = []


ipcMain.on('message', function(event, args){
    wind.unshift(new BrowserWindow({
        width: 400,
        height: 470,
        autoHideMenuBar: true,
        parent: win
    }))
    wind[0].loadFile(`./html/${args}.html`)
})