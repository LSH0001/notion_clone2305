import { request } from "../api.js";
import PostList from "./PostList.js";

function PostPage({$target}) {
    const $page = document.createElement("div")

    const postList = new PostList({
        $target: $page,
        initialState: []
    })

    const $newBtn =  document.createElement("button")
    $page.appendChild($newBtn)
    $newBtn.textContent = "new date"

    this.render = async () => {
        const data = await request("/documents")
        postList.setState(data)
        console.log(data)

        $target.appendChild($page)
    }
}

export default PostPage;