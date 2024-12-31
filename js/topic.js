if(topicId > 0){
    getRequest("html/split-view.html")
        .then(splitview => {
            loadTopic(htmlToElement(splitview), topicId);
    })
}

function loadTopic(parentEl, topicId){
    getTopicData(topicId)
        .then( topicData => {
            mainElement.innerHTML = "";
            parentEl.children[0].children[1].appendChild(htmlToElement(topicData.html));
            mainElement.append(parentEl);
            splitMe.init();
        })
}

function getTopicData(topicId){
    return getRequest("html/topics/"+topicId+".html")
        .then( topicHtml => {
             return {
                 html: topicHtml,
             }
        });
}