"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false, // pas de preload pour l’instant
        },
    });
    win.loadFile('dist/index.html'); // Vite compile ici
}
electron_1.app.whenReady().then(createWindow);
