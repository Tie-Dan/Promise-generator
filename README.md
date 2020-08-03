# 异步编程实战

### Promise

> ​	Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

##### 基本用法:

ES6 规定，`Promise`对象是一个构造函数，用来生成`Promise`实例。

```js
const promise = new Promise(function(resolve, reject) {
    // resolve(value); 成功
    // reject(error);  失败
});
```

`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

**then方法:**

`Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数。

```js
promise.then(function(value) {
  // success
}, function(error) {
  // err
});
```

**catch方法:**

跟then方法中的第二个参数reject函数相似都是用来捕捉错误信息

```js
promise.then(function(data) {
  // ...
}).catch(function(error) {
  // 处理 promise 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

跟then中的第二参数reject函数的区别:

- catch 方法可以捕获到 catch 之前整条 promise 链路上所有抛出的异常。

- then 方法的第二个参数捕获的异常依赖于上一个 Promise 对象的执行结果。
  - 如果是promise内部报错 reject 抛出错误后，then 的第二个参数就能捕获得到，如果then的第二个参数不存在，则catch方法会捕获到。
  - 如果是then的第一个参数函数 resolve 中抛出了异常，即成功回调函数出现异常后，then的第二个参数reject 捕获捕获不到，只能下一个then的第二参数才能捕捉到，catch方法可以捕获到。

**推荐使用:** catch因为更接近同步的写法

**finally方法:**

finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···})
```

**all方法:**

Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

等所有的promise实例都拿到结果，才能返回结果，而且结果的顺序根据传入的顺序决定。

```js
const p = Promise.all([p1, p2, p3]);
```

**race方法:**

Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

**返回最快拿到结果的实例结果**

```javascript
const p = Promise.race([p1, p2, p3]);
```

### Thunk函数

> 它是"传名调用"的一种实现策略，用来替换某个表达式。往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。
>
> **在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数。**
>
> 在JavaScript 语言中满满的都是**函数式编程**的方式,thunk函数,就是**柯里化**的概念。

### Generator函数的使用以及co库的使用

> 普通函数执行时没有停止功能 Generator函数可以暂停
>
> Generator 生成器 返回的是iterator接口
>
> CO库就是不停的调用next方法将最后结果返回
>
> Generator 中 yield 后面只能跟 Thunk 函数或 Promise 对象

### 异步终极解决方法async/await

**async 函数就是 Generator 函数的语法糖。**

> async 函数最后编译出来的结果就是generator+co
>
> async 函数返回的是一个promise对象
>
> async 函数中 await 后面可以是 promise 对象或者原始类型的值（会自动转为立即resovle的promise对象）























