import { BrowserWindow, ipcMain } from "electron";

export function ipcMainProcess(win: BrowserWindow) {
  ipcMain.on('setTitle', (event, title) => {
    console.log(`[*] new title: ${title}`);
    // const webContents = event.sender;
    // const win = BrowserWindow.fromWebContents(webContents)
    win?.setTitle(title);
  });

  ipcMain.handle('ping', (event, value) => {
    console.log(`[*] preload -> ipcMain, ipcMain receive data from preload: ${value}`);
    return `${value} pong`;
  });
}