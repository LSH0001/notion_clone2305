import PostList from "./PostList.js";

function PostPage({$target}) {
    const $page = document.createElement("div")

    new PostList({$target})

    const $newBtn =  document.createElement("button")
    $page.appendChild($newBtn)
    $newBtn.textContent = "새로 만들기"

    this.render = () => {
        $target.appendChild($page)
    }
}

export default PostPage;