let page = urlParams.get('page');
if(page !== null){
    getRequest("/html/pages/"+ page +".html")
        .then(page => {
            mainElement.innerHTML = "";
            mainElement.append(htmlToElement(page));
    })
}

function addPages(){
    let pages = [];
    pages.push(getPageElement("html-editor", "Editor"));
    
    let menuItems = document.getElementsByClassName("menu-items")[0];
    pages.forEach(i => {
        menuItems.append(i);
    })
}

function getPageElement(pageId, pageTitle){
    let htmlEl =
        "<li class=\"item\"> " +
        "   <a href=\"?page="+ pageId +"\">" + pageTitle + "</a> " +
        "</li>";

    return htmlToElement(htmlEl);
}