let mainElement = document.querySelector(".main");
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

function getJsonRequest(url){
    return fetch(url)
        .then((res) => res.text())
        .then((text) => {
            return JSON.parse(text);
        })
        .catch((e) => console.error(e));
}

function getRequest(url){
        return fetch(url)
            .then((res) => res.text())
            .catch((e) => console.error(e));
}

function htmlToElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes[0];
}