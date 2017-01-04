module.exports = {
    method: function() {
        console.log('commonjs_module')
        document.getElementsByTagName("body")[0].innerHTML+= '<p class="commonjs">commonjs_module</p>'
    }
}
