import { useEffect, useState } from 'react';

/*
1. Why on first render the component all console.logs appear twice? 
Hint- it's not related to the component itself
2. On the first render all 3 console.logs will apear in web console
but when you click the button, only two- why is that?
*/
const UseEffectTask = () => {
    const [name, setName] = useState('Alex');
    
    useEffect(()=>{
        console.log("1- No dependency array");
    });
    useEffect(()=>{
        console.log("2- Empty dependency array");
    }, []);
    useEffect(()=>{
        console.log("3- Dependency array with state");
    }, [name]);

    const clickHandler = () => {
        setName('John');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click to update state</button>
            <p>{`Name: ${name}`}</p>
        </div>
    );
}
export default UseEffectTask;