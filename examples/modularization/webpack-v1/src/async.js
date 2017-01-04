module.exports = {
    method: function() {
        console.log('async')
        document.getElementsByTagName("body")[0].innerHTML+= '<p class="async">async</p>'
    }
}
