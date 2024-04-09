const {app, BrowserWindow, ipcMain} = require('electron')
const { arch } = require('os')
const path = require('path')
const slib = require('slib')

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
        minHeight: 900,
        titleBarOverlay: {
            color: '#01080C',
            symbolColor: '#5C8374',
            height: 31,
        },
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:true,
            preload: path.join(__dirname, `./js/${args}Preload.js`)
        }
    }))
    wind[0].loadFile(`./html/${args}.html`)
    if (args == 'notes'){
        ipcMain.on('note', function(event, args){
            wind[0].webContents.send('noteBack', slib.notesInScale(args[0], args[1]))
    })}
    if (args == 'chords'){
        ipcMain.on('noteCH', function(event, args){
            wind[0].webContents.send('noteBackCH', slib.chordsInScale(args[0], args[1]))
    })}
}
)


