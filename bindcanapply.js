class dashboard {
    constructor(name) {
        this.name = name;
    }

    handleClick() {
        console.log("clicked by", this.name);
    }
}

const dash = new dashboard("muntasir");
document.querySelector("button")
    .addEventListener("click",dash.handleClick.bind(dash));