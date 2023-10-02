import { useState } from "react"
import { Child } from "./Child"

export const Parent:React.FC = () => {

    const [state, setState] = useState('state');
    

    return (
        <div>
            I'm parent
            <Child state={state} />
        </div>
    )
}
