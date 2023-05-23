function PostList({$target, initialState}) {
    const $postList = document.createElement("div")

    $target.appendChild($postList)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        // 데이터가 갱신 될 때 마다 
        this.render() 
    }

    this.render = () => {
        $postList.innerHTML = `
            <ul>
                ${this.state
                    .map((item) => `<li>${item.title}</li>`).join("")
                }
            </ul>
        `
    }

    // 최초 한번 시작
    this.render()
}

export default PostList;