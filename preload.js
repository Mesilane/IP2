const { contextBridge, ipcRenderer } = require('electron')

const API = {
    sendMsg: (msg) => ipcRenderer.send('message', msg),
}


contextBridge.exposeInMainWorld('api', API)