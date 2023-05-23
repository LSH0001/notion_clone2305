import { request } from "../api.js";
import PostList from "./PostList.js";

function PostPage({$target}) {
    const $page = document.createElement("div")

    const Test_DATA = [
        {
            "id": 1, // Document id
            "title": "노션을 만들자", // Document title
            "documents": [
            {
                "id": 2,
                "title": "블라블라",
                "documents": [
                {
                    "id": 3,
                    "title": "함냐함냐",
                    "documents": []
                }
            ]
            }
        ]
        },
        {
        "id": 4,
        "title": "hello!",
        "documents": []
        }
    ]

    


    const postList = new PostList({
        $target,
        initialState: Test_DATA
    })

    const $newBtn =  document.createElement("button")
    $page.appendChild($newBtn)
    $newBtn.textContent = "new date"

    this.render = () => {
        const data = request("/documents")

        console.log(data)
        $target.appendChild($page)
    }
}

export default PostPage;