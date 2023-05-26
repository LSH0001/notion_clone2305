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
        const x = {
            title : "멋짐",
            parent: null
        }
        const docContent = await request(`/documents`,{method: "POST"},JSON.stringify({title:"fgfg",parent:null}))
        console.log(docContent)
        editor.setState(docContent)
    }
}

export default PostEditPage;