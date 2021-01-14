var pdf = require("pdf-creator-node");
var fs = require('fs');

// Read HTML Template
var html = fs.readFileSync('reports.html', 'utf8');

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Jane Doe</div>'
    },
    "footer": {
        "height": "28mm",
        "contents": {
        first: 'Cover page',
        2: 'Second page', // Any page number is working. 1-based index
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
    }
}}

var users = [
    {
        name:"Jane",
        age:"26"
    },
    {
        name:"John",
        age:"26"
    },
    {
        name:"Mary",
        age:"26"
    },
    {
        name:"Jerry",
        age:"26"
    },
    {
        name:"Jerry",
        age:"26"
    },
    {
        name:"Jerry",
        age:"26"
    }
]

var document = {
    html: html,
    data: {
        users: users
    },
    // this output.pdf file will be created inside the route directory.
    path: "./output.pdf"
};

pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });