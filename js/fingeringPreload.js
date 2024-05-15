const { contextBridge, ipcRenderer } = require('electron')

const API = {
    sendNote: (note) => ipcRenderer.send('noteFi', note),
    callNote: (backNote) => ipcRenderer.on('noteBackFi', function(event, args){
        backNote(args)
    })
}


contextBridge.exposeInMainWorld('api', API)