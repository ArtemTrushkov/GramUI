function initPage(){
    let parent = document.querySelector(".html-editor");
    
    SUNEDITOR.create('sample', {
        width : '100%',
        height : parent.clientHeight - 70,
        maxHeight: parent.clientHeight - 70,
        buttonList : [
            ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
            ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
            ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
        ],
        callBackSave : function (contents, isChanged) {
            let topicId = prompt("Please enter topic id");
            let text;
            if (topicId == null || topicId == "") {
                return;
            } else {
                let fileName = topicId + ".html";
                download(wrapContent(contents), fileName)
            }
        }
    });
}

function download(text, name) {
    let blob = new Blob([text], { type: "text/plain" });

    var url = URL.createObjectURL(blob),
        a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click(); a.remove();
    URL.revokeObjectURL(url);
}

function wrapContent(text){
    return "<div class=\"full-size\">" + text + "</div>"
    
}
