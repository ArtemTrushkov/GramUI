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