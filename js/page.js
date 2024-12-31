let pageName = urlParams.get('page');
let body = document.body;

if(pageName !== null){
    getRequest("html/pages/"+ pageName +".html")
        .then(pageHtml => {
            mainElement.innerHTML = "";
            mainElement.append(htmlToElement(pageHtml));

            let script = document.createElement('script');
            script.onload = function () {
                initPage();
            };
            script.src = "js/" + pageName + ".js";
            document.head.appendChild(script);
    })
}

// make sure to create html and js file for page id;
//pageId: html-editor
// html file: html-editor.html
//js file: html-editor.js
function addPages(){
    getJsonRequest("data/pages.json")
        .then(pages => {
            let menuItems = document.getElementsByClassName("menu-items")[0];
            pages.forEach( page => {
                let pageElement = getPageElement(page.Id, page.Title);
                menuItems.append(pageElement);
            })
        });
}

function getPageElement(pageId, pageTitle){
    let htmlEl =
        "<li class=\"item\"> " +
        "   <a href=\"?page="+ pageId +"\">" + pageTitle + "</a> " +
        "</li>";

    return htmlToElement(htmlEl);
}