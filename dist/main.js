"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            contextIsolation: false,
        },
    });
    win.loadURL('http://localhost:5173/');
}
electron_1.app.whenReady().then(createWindow);
