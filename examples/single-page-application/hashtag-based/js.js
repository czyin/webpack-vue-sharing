function update(index) {
    var url = 'http://127.0.0.1:3003/id' + index
    var req = new XMLHttpRequest();
    req.onload = function(data) {
        console.log('data', this.responseText)
        document.getElementById('id' + index).style.display = 'block'
        document.getElementById('id' + index).innerHTML = this.responseText;
    };

    req.open('get', url, true);
    req.send();

}

window.onhashchange = function(event) {
    for (var index = 1; index <= 3; index++) {
        document.getElementById('id' + index).style.display = 'none'
        document.getElementById('id' + index).innerHTML = '';
    }
    update(location.hash.replace('#id', ''))
}

window.onload = function(a) {
    update(location.hash.replace('#id', ''))
}
