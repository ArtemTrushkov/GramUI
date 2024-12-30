const mainElement = document.querySelector(".main");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const topicId = Number(urlParams.get('topicId'));
if(topicId > 0){
    getRequest("/html/split-view.html")
        .then(splitview => {
            mainElement.innerHTML = splitview;
            splitMe.init();
        })
}