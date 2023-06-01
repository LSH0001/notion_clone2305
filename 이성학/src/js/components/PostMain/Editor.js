function Editor({
    $target,
    initialState = {
        title: "",
        content: ""
    }
}) {
    
    const $editor = document.createElement("div")

    $target.appendChild($editor)

    this.state = initialState

    this.setState = (nextState) =>{
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $editor.innerHTML = `
            <input type="text" name="title" value="${this.state.title}" style="width:600px">
            <textarea name="content" style="width:600px; height:600px;">${this.state.content}</textarea>
        `
    }

    this.render()

    $editor.querySelector('[name="title"]')


}

export default Editor;