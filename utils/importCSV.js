const csv = require('csv-parser')
const fs = require('fs')
const results = {};

let getCSV = (cb) => {
    fs.createReadStream('data.csv')
        .pipe(csv({
            skipLines: 1,
            skipComments: true,
            // 31 max headers with csv-parser
            headers: ['WCAG', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }))
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
            // return results;
            cb(results);
        });
}

module.exports = getCSV;