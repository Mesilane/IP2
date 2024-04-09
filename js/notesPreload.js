const { contextBridge, ipcRenderer } = require('electron')

const API = {
    sendNote: (note) => ipcRenderer.send('note', note),
    callNote: (backNote) => ipcRenderer.on('noteBack', function(event, args){
        backNote(args)
    })
}


contextBridge.exposeInMainWorld('api', API)