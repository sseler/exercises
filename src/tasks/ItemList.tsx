import { useEffect } from "react";

/*
1. Handle data fetch from api (case when it succed or error)
2. Create state to keep response data 
3. Create list which contains max 5 records and show it on UI
4. Create a function which will increase array length by 2 on every button click
5. Everything write in typescript
*/

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // json mock

export const ItemList = () => {
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }, []);
    

    return (
        <>
            <h1>Item List</h1>

            <button>Increase array</button>
        </>
    )
}
    


