import { useEffect, useState } from "react"


export const Child:React.FC<{state: string}> = ({state}) => {
    
    const [childState, setChildState] = useState('')
    


    useEffect(() => {
        if(state) {
            setChildState(state)
        }
    }, [])
    
    
    return (
        <div>
            I'm child
            <p>This is my state {childState}</p>
        </div>

    )
}