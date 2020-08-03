// 普通的add函数
function add(x, y) {
    return x + y;
}

add(1, 2); // 3

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y;
    };
}

curryingAdd(1)(2); // 3

// add求和函数  add(1)(5)(3)输出9。
let add = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

add(1)(2)(3); //6