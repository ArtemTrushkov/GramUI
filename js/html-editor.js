function initPage(){
    let parent = document.querySelector(".html-editor");
    
    SUNEDITOR.create('sample', {
        width : '100%',
        height : parent.clientHeight - 60,
        maxHeight: parent.clientHeight - 60,
        buttonList : [
            ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
            ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
            ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
        ],
        callBackSave : function (contents, isChanged) {
            console.log(contents);
        }
    });
}
