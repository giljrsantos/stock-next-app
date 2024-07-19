'use client'

import { useState } from "react"

export default function UpdateForm(){
    const [ count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <p>Você clicou { count } vez</p>
            <button onClick={handleClick}>Clique em mim</button>
        </div>
    )
}