import { useEffect, useState } from "react";

/*What's wrong here?*/
export const ErrorComponent:React.FC = () => {
    const [items, setItems] = useState<any>([]);

    const getter = () => {
        fetch('//dummyjson.com/products')
        .then(res => res.json())
        .then(data => data);
    }

    useEffect(() => {
        getter()
        try {
            setItems(getter())
        }catch(err) {
            console.log(err);
        }
    }, [])

    return (
        <div>
            My list:
            <ul>
                {items.map((item: any) => <li>item.brand</li>)}
            </ul>
        </div>
    )
}