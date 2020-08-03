var x = 1;

function f(m) {
    // 传明儿调用
    return m * 2;
}

f(x + 5)


f(x + 5)
// 传值调用时，等同于
f(6)