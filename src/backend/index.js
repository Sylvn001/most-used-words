const {ipcMain} = require('electron')

const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {

  pathsToRows(paths)
    .then(rows => console.log(row))
    .then(() => {
        event.reply('process-subtitles', [
          {name: "you", amount: 800},
          {name: "akemi", amount: 1200},
          {name: "he", amount: 853},
        ])
    })
})