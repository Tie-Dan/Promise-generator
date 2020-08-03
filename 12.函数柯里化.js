var thunkify = require('thunkify');
var fs = require('fs');
// 正常版本的readFile（多参数版本）
fs.readFile(fileName, callback);

// Thunk版本的readFile（单参数版本）
let readFileThunk = Thunk(fileName)(callback);

let Thunk = function (fileName) {
    return function (callback) {
        return fs.readFile(fileName, callback);
    };
};

讲 21

// npm install thunkify



var read = thunkify(fs.readFile);
read('package.json')(function (err, str) {
    console.log(str)
});