const fs = require('fs')
const util = require('util')
let read = util.promisify(fs.readFile)
var asyncReadFile = async function () {
  var f1 = await read('name.txt', 'utf8');
  var f2 = await read('age.txt', 'utf8');
  console.log(f1.toString());
  console.log(f2.toString());
  return '我是铁蛋儿'
};
asyncReadFile().then(data => {
  console.log(data)
})