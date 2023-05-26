import { push } from "../router.js"

function PostList({$target, initialState}) {
    const $postList = document.createElement("div")

    $target.appendChild($postList)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        // 데이터가 갱신 될 때 마다 
        this.render() 
    }

    this.createTreeView = (data) => {
        let str = ""
        //console.log(data)
        if(data.documents.length!==0){
            str += `<li data-id="${data.id}">${data.title}
                <ul>
                    ${data["documents"].map(element => {
                        return this.createTreeView(element)  
                    }).join("")}
                </ul>
            </li>
            `
        } else {
            str += `<li data-id="${data.id}">${data.title}</li>`
        }
        

        return str
    }

    this.render = () => {
        $postList.innerHTML = `
            <ul>
                ${this.state
                    .map((data) => `
                    ${
                        `<ul>${this.createTreeView(data)}</ul>` 
                    }
                    `).join("")
                }
            </ul>
        `
    }
    // 최초 한번 시작
    this.render()


    
    $postList.addEventListener('click',(e)=>{

        const $li = e.target.closest('li')
        if($li){
            const {id} = $li.dataset

            push(`/${id}`)
        }
    })
}


export default PostList;