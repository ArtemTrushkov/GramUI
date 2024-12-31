const topicId = Number(urlParams.get('topicId'));
if(topicId > 0){
    getRequest("html/split-view.html")
        .then(splitview => {
            GetTopicData(topicId)
                .then( topicData => {
                    mainElement.innerHTML = "";
                    let splitView = htmlToElement(splitview);
                    splitView.children[0].children[1].appendChild(htmlToElement(topicData.html));
                    mainElement.append(splitView);
                    splitMe.init();
        })
    })
}

function GetTopicData(topicId){
    return getRequest("html/topics/"+topicId+".html")
        .then( topicHtml => {
             return {
                 html: topicHtml,
             }
        });
}