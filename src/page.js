const m = require('mithril');

class HelloComponent {
    view() {
        window.rendered = true;
        return m("div", [
            m("h1", {class: "title"}, "Hello World"),
            m("p", "this is rendered by Mithril"),
            m("button", "button")
        ]);
    }
}

m.mount(document.querySelector("#root"), HelloComponent);
