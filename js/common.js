let mainElement = document.querySelector(".main");
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let topicId = Number(urlParams.get('topicId'));

if(queryString.length === 0) queryString = "?page=home";

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
    return template.content.children[0];
}