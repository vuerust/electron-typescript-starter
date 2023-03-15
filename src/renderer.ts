// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
const btnModifyTitle = document.getElementById('btnModifyTitle')
const btnPing = document.getElementById('btnPing')

btnModifyTitle?.addEventListener('click', () => {
  console.log("[*] button modify title clicked.");
  const newTitle = "Hello Electron with Typescript!";
  window.electronAPI?.modifyTitle(newTitle);
});

btnPing?.addEventListener('click', async () => {
  console.log("[*] button ping clicked.");
  // console.log(window);
  // console.log(window.electronAPI);
  const result = await window.electronAPI?.ping("ping");
  console.log(`[*] ipcMain -> renderer, renderer receive result from ipcMain : ${result}`);
});
