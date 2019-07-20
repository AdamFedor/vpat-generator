const fs = require('fs');
const handlebars = require('handlebars');


let exportFile = (data) => {
    // console.log('results', data)
    // fs.writeFileSync('./example.html', 'hehehe')
    example();
}

module.exports = exportFile;

// Example: https://www.npmjs.com/package/handlebars
let example = () => {
    var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
        "{{kids.length}} kids:</p>" +
        "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
    var template = handlebars.compile(source);

    var data = {
        "name": "Alan", "hometown": "Somewhere, TX",
        "kids": [{ "name": "Jimmy", "age": "12" }, { "name": "Sally", "age": "4" }]
    };
    var result = template(data);

    fs.writeFile("example.html", result, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}