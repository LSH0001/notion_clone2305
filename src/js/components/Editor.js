function Editor({$target}) {
    
    const $editor = document.createElement("div")
    $target.appendChild($editor)

    this.render = () => {
        $editor.innerHTML = `
            <input type="text" name="title">
            <textarea name="content" id="" cols="30" rows="10"></textarea>
        `
    }

    this.render()



}

export default Editor;