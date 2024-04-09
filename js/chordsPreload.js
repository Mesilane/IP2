const { contextBridge, ipcRenderer } = require('electron')

const API = {
    sendNote: (note) => ipcRenderer.send('noteCH', note),
    callNote: (backNote) => ipcRenderer.on('noteBackCH', function(event, args){
        backNote(args)
    })
}


contextBridge.exposeInMainWorld('api', API)