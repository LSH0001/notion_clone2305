export const API_END_POINT = "https://mwu1.notion.edu-api.programmers.co.kr"

export const request = (url, option = {}) => {

    try{
        const res = fetch(`${API_END_POINT}${url}`, {
            ...option,
            headers:{
                "x-username" : "test",
                "Content_Type" : "application/json"
            }
    
        })
        
        if (res.ok) {
            return res.json()
        }
    }   catch (e) {
        console.log(e.message)
    }
    

}