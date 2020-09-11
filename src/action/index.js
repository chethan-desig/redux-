const url = "http://localhost:8900"

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then((data)=>data.json())
    return{
        type:'GET_LATEST',
        payload:output
    }
} 

export function artistNews(){
    const output = fetch(`${url}/articles?_start=3&_end=6`,{method:'GET'})
    .then((data)=>data.json())
    return{
        type:'GET_DETAIL',
        payload:output
    }
} 



export function galNews(){
    const output = fetch(`${url}/galleries`,{method:'GET'})
    .then((data)=>data.json())
    return{
        type:'GET_GAL',
        payload:output
    }
} 