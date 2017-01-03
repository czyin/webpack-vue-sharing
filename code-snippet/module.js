// IIFE & Closure
var foo = (function CoolModule() {

    var something = "cool"
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join(" ! "))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
})()


foo.identify() // foo module
foo.change()
foo.identify() // FOO MODULE


// 大多数模块依赖加载器 / 管理器

var ModuleManager = (function ModuleManager() {
    var modules = {}

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)
    }

    function get(name) {
        return modules[name]
    }

    return {
        define: define,
        get: get
    }
})()

ModuleManager.define("bar", [], function() {
    function hello(who) {
        return "Let me introduce: " + who
    }
    return {
        hello: hello
    }
})

ModuleManager.define("foo", ["bar"], function(bar) {
    var hungry = "hippo"

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase())
    }
    return {
        awesome: awesome
    }
})

var bar = ModuleManager.get("bar")
var foo = ModuleManager.get("foo")
console.log(bar.hello("hippo")) // Let me introduce: hippo
foo.awesome() // LET ME INTRODUCE: HIPPO
