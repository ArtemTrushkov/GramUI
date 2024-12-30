const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

let topicList;
getJsonRequest("data/menu.json")
    .then( result => {
        topicList = result; 
        createMenuByTopic(0);
    });

function htmlToElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes[0];
}

//----Advanced Topics

function createMenuByTopic(topicId){
    let languagesForm = document.querySelector(".menu-content");
    let topic = topicList.find(i => i.Id === topicId)
    if(topic === undefined || topic.HasItems === false){
        return;
    }
    let topicElement= getTopicElement(topic.ParentId, topic.Title);
    languagesForm.textContent = ''
    languagesForm.appendChild(topicElement);
    
    let subtopics = getTopicsByParent(topic.Id);
    subtopics.forEach( i => {
        if(i.HasItems === true){
            topicElement.appendChild(getSubMenuElement(i.Id, i.Title));
        }
        else{
            topicElement.appendChild(getMenuElement(i.Id, i.Title));
        }
    })
    
    AddMenuItemListeners();
}

function AddMenuItemListeners(){
    const subMenuItem = document.querySelectorAll(".submenu-item");
    
    subMenuItem.forEach( i => {
        let itemId = i.getAttribute("id");
        i.addEventListener("click", () => {
            createMenuByTopic(Number(itemId));
        })
    })
}

function getTopicsByParent(parentId){
    return topicList.filter(i => i.ParentId === parentId);
}

function getTopicElement(id, title) {
    let topic =
    "<ul class=\"menu-items\">" +
    "      <div class=\"submenu-item item\" id=\"" + id + "\"> " + 
    "       <span>" + title + "</span> " + 
    "       <i class=\"fa-solid "+ (id===null ? "" : "fa-chevron-left") +"\"></i>" +
    "      </div> " +
    "</ul>";
    return htmlToElement(topic);
}

function getSubMenuElement(id, title) {
    let langElHtml =
        "<li class=\"item\">" +
        "      <div class=\"submenu-item\" id=\"" + id + "\"> " +
        "       <span>" + title + "</span> " +
        "       <i class=\"fa-solid fa-chevron-right\"></i>" +
        "      </div> " +
        "      <ul class=\"menu-items submenu\" >" +
        "       <div class=\"menu-title\">"+
        "           <i class=\"fa-solid fa-chevron-left\"></i>"+
        title +
        "       </div> " +
        "      </ul> " +
        "     </li>";

    return htmlToElement(langElHtml);
}

function getMenuElement(id, title){
    let htmlEl =
        "<li class=\"item\"> " +
        "   <a topic-id=\"" + id + "\" href=\"?topicId="+ id +"\">" + title + "</a> " +
        "</li>";

    return htmlToElement(htmlEl);
}