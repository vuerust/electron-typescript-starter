# electron-typescript-starter ✨ 

**renderer.ts communicate with ipcMain by preload.ts:**

- `main.ts` - regist ipcMain event and load preload.ts.
- `preload.ts` - expose ipcRenderer event as bridge for fornted page using communicate to ipcMain.
- `renderer.ts` - **renderer process** example to call api that exposed in preload.ts.
- `index.html` - A web page to render, and reference renderer.ts.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [yarn](https://yarnpkg.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/vuerust/electron-typescript-starter.git
# Go into the repository
cd electron-typescript-starter
# Install dependencies
yarn install # npm install
# Run the app
yarn start # npm start
```

### Reference

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electron/electron-quick-start-typescript](https://github.com/electron/electron-quick-start-typescript) - a very basic starter Electron app with typescript


### Buy Me A Coffee ☕️
![donate](https://user-images.githubusercontent.com/115679914/225176055-b7449e5a-ee14-458c-a3d7-693c84e67291.jpeg)
