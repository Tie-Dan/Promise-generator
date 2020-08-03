var fs = require("fs");
var thunkify = require("thunkify");
var co = require('co')
var readFileThunk = thunkify(fs.readFile);

var gen = function* () {
    yield readFileThunk("4.txt");

    yield readFileThunk("age.txt");
};

co(gen).then((data) => {
    console.log(data)
    // data((err, res) => {
    //     console.log(res)
    // })
});