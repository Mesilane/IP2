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
            color: '#01080C',
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
        width: 1000,
        height: 800,
        autoHideMenuBar: true,
        parent: win,
        titleBarStyle: 'hidden',
        minWidth: 1000,
        minHeight: 800,
        titleBarOverlay: {
            color: '#01080C',
            symbolColor: '#5C8374',
            height: 31,
            
        }
    }))
    wind[0].loadFile(`./html/${args}.html`)
})