function update(index) {
    var url = 'http://127.0.0.1:3003/id' + index
    var req = new XMLHttpRequest();
    req.onload = function(data) {
        for (let index = 1; index <= 3; index++) {
            document.getElementById('id' + index).style.display = 'none'
            document.getElementById('id' + index).innerHTML = '';
        }

        window.history.pushState(null, '', 'id' + index)

        document.getElementById('id' + index).style.display = 'block'
        document.getElementById('id' + index).innerHTML = this.responseText;
    };

    req.open('get', url, true);
    req.send();
}

window.onpopstate = function(event) {
    console.log('window.onpopstate')
    event.preventDefault()
        // console.log('window.onpopstate')
    return false
}

document.getElementById('nav').addEventListener('click', function(event) {
    event.preventDefault()
    update(event.target.getAttribute('href').replace('id', ''))
})

window.onhashchange = function(event) {
    // event.preventDefault = false;
    // console.log('window.onhashchange')
        // for (var index = 1; index <= 3; index++) {
        //     document.getElementById('id' + index).style.display = 'none'
        //     document.getElementById('id' + index).innerHTML = '';
        // }
        // update(location.hash.replace('#id', ''))
}

window.onload = function(a) {
    update(location.pathname.replace('/id', ''))
}
