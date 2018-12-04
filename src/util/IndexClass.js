class IndexClass {

    constructor() {
        this.value = "Template de webpack";
        this.getValue = this.getValue.bind(this);
    }

    getValue() {
        return this.value
    }
}

const alterBody = value => {
    document.getElementsByTagName('body')[0].innerHTML += `<h1> ${value} </h1>`;
}

export { alterBody }
export default new IndexClass();