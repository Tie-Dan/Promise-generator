function* read() {
    let a = yield 1
    console.log(a)
    let b = yield 2
    console.log(b)
    let c = yield 3
    console.log(c)
}
let it = read(); // iterator 迭代器包含一个next方法
// 迭代器接口 Symbol.iterator
it.next('xxx') // 第一次传递的参数 是无意义的
it.next('word') // next传递参数会给上一个yield的返回值
it.next('xxx')
it.next('xxx')