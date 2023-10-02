import { useState } from "react";



export const Objects:React.FC = () => {

    const [input, setInput] = useState('') 
    
    const first_object = {
        name: 'John',
        lastName: 'Doe',
    }

    const secondObject = first_object;
    secondObject.name = 'Jonathan';


    const handleSubmit = (e:any) => {
        e.preventDefault();
        secondObject.lastName = input;
        console.log(first_object)
        console.log(secondObject);
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Enter your name:
                <input type="text" value={input} onChange={(e) => setInput(e.target.value) }/>
            </label>
        </form>
    )
}