import { request } from "../api.js"
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
            str += `<li data-id="${data.id}">${data.title}<button class="addBtn">+</button><button class="delBtn">x</button></li>`
        }
        

        return str
    }

    this.render = () => {
        $postList.innerHTML = `
            <ul>
                ${this.state
                    .map((data) => `
                    ${
                        `${this.createTreeView(data)}` 
                    }
                    `).join("")
                }
            </ul>
        `
    }
    // 최초 한번 시작
    this.render()


    
    $postList.addEventListener('click',async(e)=>{
        const $li = e.target.closest('li')
        const {className} = e.target
        if($li){
            const {id} = $li.dataset
            if (className==="addBtn"){
                const newpost = await request(`/documents`,{method:"POST"},JSON.stringify({title:"new",parent:id}))
                push(`/${newpost.id}`)
            } else if (className==="delBtn"){
                const x = await request(`/documents/${id}`,{method:"DELETE"})
                push(``)
            } else{
                push(`/${id}`)
            }
            console.log(e.target.className)
        } 
    })
}



export default PostList;