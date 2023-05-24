import Editor from "./Editor.js";

function PostEditPage({$target, initialState}) {
    const $page = document.createElement("div")

    this.state = initialState

    const editor = new Editor({
        $target: $page,
    })

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }


    this.render = () => {
        $target.appendChild($page)
    }
}

export default PostEditPage;