const importCSV = require('./utils/importCSV')
const exportFile = require('./utils/exportHTML')

let importFile = (results) => {
    exportFile(results);
}

importCSV(importFile)