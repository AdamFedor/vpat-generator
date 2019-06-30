const csv = require('csv-parser')
const fs = require('fs')
const results = {};

let getCSV = (cb) => {
    fs.createReadStream('data.csv')
        .pipe(csv(['WCAG',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
        .on('data', (data) => {
            results[data['WCAG']] = []
            for (key in data) {
                if (data[key] !== '') {
                    if (data[key] !== data['WCAG']) {
                        results[data['WCAG']].push(data[key])
                    }
                }
            }
        })
        .on('end', () => {
            cb()
        });
}

let printResults = () => {
    console.log(results);
    console.log(results['1.1.1'][0]);
}
getCSV(printResults);