function PostList({$target}) {
    const $postList = document.createElement("div")

    $target.appendChild($postList)


    this.render = () => {
        $postList.innerHTML = `
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        `
    }

    this.render()
}

export default PostList;