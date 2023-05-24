import PostEditPage from "./PostMain/PostEditPage.js";
import PostPage from "./SideBar/PostPage.js";
function App({$target}) {
    const postPage = new PostPage({
        $target
    })

    postPage.render()

    
    const postEditPage = new PostEditPage({
        $target,
        initialState: {}
    })

    postEditPage.render()
}

export default App;