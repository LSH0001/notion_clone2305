const ROUTE_CHANGE_EVENT = 'router-change'


export const initRouter = (router) => {
    window.addEventListener(ROUTE_CHANGE_EVENT,(e)=>{
        const {nextUrl}= e.detail
        //if (nextUrl){
            history.pushState(null,null,`/src/index.html${nextUrl}`)
            router()
        //}

    })
}

export const push=(nextUrl) => {
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, {
        detail: {
            nextUrl
        }
    }))
}

