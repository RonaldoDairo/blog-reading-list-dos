

const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/Dairo"

export const getTodoList = async() => {
    try{
        const response = await fetch(URL, { method: "GET" });
        const data = await response.json();
        return data
    }catch(err){
            console.log('err')
        }
}