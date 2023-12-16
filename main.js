const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () =>{
    const win = new BrowserWindow({
        width: 800,
        minWidth: 800,
        minHeight: 600,
        height: 600,
        icon: path.join("./icons/Dinamic.png"),
        frame: true,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#11011f',
            symbolColor: '#610094',
            height: 5
        },
        webPreferences: {
            nodeIntegration: true
        },
    })
    win.loadFile('./index.html');
    win.setTitle('Sound lab')
    win.setMenuBarVisibility(false)
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());
