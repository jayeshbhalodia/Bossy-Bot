// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')
const boss = {
    hello: 'Hely',
};

contextBridge.exposeInMainWorld(
  'boss',
  boss,
);
