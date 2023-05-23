import App from "./components/App.js";
import Editor from "./components/Editor.js";

const $app = document.querySelector("#app");

new App({
    $target:$app
});

new Editor({$target: $app})