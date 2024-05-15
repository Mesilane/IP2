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
        show: false
    })
    win.loadFile('./html/index.html');
    win.setTitle('Sound lab')
    win.setMenuBarVisibility(false)
    win.once('ready-to-show', ()=>{
    win.show()
    })
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());

let wind = []


ipcMain.on('message', function(event, args){
    wind.unshift(new BrowserWindow({
        width: 1200,
        height: 900,
        autoHideMenuBar: true,
        parent: win,
        titleBarStyle: 'hidden',
        minWidth: 1200,
        minHeight: 900,
        titleBarOverlay: {
            color: '#01080C',
            symbolColor: '#5C8374',
            height: 31,
        },
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:true,
            preload: path.join(__dirname, `./js/${args}Preload.js`),
        },
        parent: win,
        modal: true,
        show: false,
    }))
    wind[0].setAlwaysOnTop(true, 'screen')
    wind[0].loadFile(`./html/${args}.html`)
    wind[0].once('ready-to-show', ()=>{
        wind[0].show()
    })
    if (args == 'notes'){
        ipcMain.on('note', function(event, args){
            wind[0].webContents.send('noteBack', slib.notesInScale(args[0], args[1]))
    })}
    if (args == 'chords'){
        ipcMain.on('noteCH', function(event, args){
            wind[0].webContents.send('noteBackCH', slib.chordsInScale(args[0], args[1]))
    })}
    if (args == 'circle'){
        ipcMain.on('noteCi', function(event, args){
            wind[0].webContents.send('noteBackCi', slib.circleOfFifths(args[0], args[1]))
    })}
    if (args == 'fingering'){
        ipcMain.on('noteFi', function(event, args){
            wind[0].webContents.send('noteBackFi', slib.getChordShape(args))
    })}
})


