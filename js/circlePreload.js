const { contextBridge, ipcRenderer } = require('electron')

const API = {
    sendNote: (note) => ipcRenderer.send('noteCi', note),
    callNote: (backNote) => ipcRenderer.on('noteBackCi', function(event, args){
        backNote(args)
    })
}


contextBridge.exposeInMainWorld('api', API)