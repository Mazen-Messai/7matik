import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false, // pas de preload pour l’instant
    },
  });

  win.loadFile('dist/index.html'); // Vite compile ici
}

app.whenReady().then(createWindow);
