function Editor({$target}) {
    
    const $editor = document.createElement("div")
    $target.appendChild($editor)

    this.render = () => {
        $editor.innerHTML = `
            <input type="text" name="title" style="width:600px">
            <textarea name="content" style="width:600px; height:600px;"></textarea>
        `
    }

    this.render()



}

export default Editor;