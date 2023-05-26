export const API_END_POINT = "https://mwu1.notion.edu-api.programmers.co.kr"

export const request = async (url, option = {},data) => {

    try{
        const res = await fetch(`${API_END_POINT}${url}`, {
            ...option,
            headers:{
                "x-username" : "LSH",
                "Content_Type" : "application/json"
            },
            body:data
        })
        
        if (res.ok) {
            return res.json()
        }
    }   catch (e) {
        console.log(e.message)
    }
    

}