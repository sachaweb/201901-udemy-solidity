// not a "reauire" statement because that would call a js file
const path = require('path'); // "path" guarantees cross-platform performance
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1)); 
