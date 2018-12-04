class IndexClass {
    constructor() {
        this.value = "asdf1";
    }

    alterBody() {
        document.getElementsByTagName('body')[0].innerHTML += "<h1>" + this.value + "</h1>";
    }
}

module.exports = {IndexClass}