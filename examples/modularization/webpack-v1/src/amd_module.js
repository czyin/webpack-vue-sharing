define(function() {
    return {
        method: function() {
            console.log('amd_module')
            document.getElementsByTagName("body")[0].innerHTML+= '<p class="amd">amd_module</p>'
        }
    }
})
