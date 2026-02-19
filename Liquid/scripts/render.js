const { Liquid } = require('liquidjs');
const fs = require('fs');
const path = require('path'); 

const engine = new Liquid();


const templatePath = path.join(__dirname, '..', 'templates', 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');
console.log(__dirname);

const dataPath = path.join(__dirname, '..', 'data', 'sample-data.json');
const emailData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

engine.parseAndRender(template, emailData)
.then((finalHTML) => {
    
    fs.writeFileSync('output.html', finalHTML);
    console.log(" Success! ");
}).catch((err) => {
    console.error(" Error ", err); 
});