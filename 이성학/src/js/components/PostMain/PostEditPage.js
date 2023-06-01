import { request } from "../api.js";
import Editor from "./Editor.js";

function PostEditPage({$target, initialState}) {
    const $page = document.createElement("div")

    this.state = initialState

    const editor = new Editor({
        $target: $page,

    })

    this.setState = (nextState) => {
        this.state = nextState
        this.fetch(nextState.docId)
        this.render()
    }


    this.render = () => {
        $target.appendChild($page)
    }

    this.fetch = async (id) => {
        let docContent
        if (id){
            docContent = await request(`/documents/${id}`)
        } else {
            docContent = {
                title : "",
                content: ""
            }
        }
        editor.setState(docContent)
    }
}

export default PostEditPage;