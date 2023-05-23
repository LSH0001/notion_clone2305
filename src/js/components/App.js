import PostPage from "./PostPage.js";

function App({$target}) {
    //console.log({$target})
    const postPage = new PostPage({
        $target
    })

    postPage.render()
}

export default App;