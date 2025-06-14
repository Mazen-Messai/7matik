import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      contextIsolation: false,
    },
  });

  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(createWindow);
