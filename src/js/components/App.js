import PostEditPage from "./PostMain/PostEditPage.js";
import PostPage from "./SideBar/PostPage.js";
import { request } from "./api.js";
import { initRouter } from "./router.js";
function App({$target}) {
    const $sideBar = document.createElement("div")
    const $postMain = document.createElement("div")
    $target.appendChild($sideBar)
    $target.appendChild($postMain)

    const postPage = new PostPage({
        $target :$sideBar
    })

    postPage.render()

    
    const postEditPage = new PostEditPage({
        $target : $postMain,
        initialState: {}
    })

    postEditPage.render()



    this.route = () => {
        const {pathname} = window.location
        if (pathname==='/src/index.html'){
            postEditPage.setState({})
            postPage.render()
        } else {
            const [,docId] = pathname.split('/src/index.html/')
            postEditPage.setState({docId})
            postPage.render()
        }
    }

    this.route()



    initRouter(()=>this.route())
}

export default App;