'use client'

import { useState } from "react";
import Submit from "../../Submit";

interface UpdateFormProps {
    data: {
        id: string
        name: string
    }
}

export default function UpdateForm(props: UpdateFormProps){
    const [name, setName] = useState(props.data.name);
    function handleChange(event: any){
        setName(event.target.value);
    }
    const category = props.data;
    
    return (
        <div>
            <form>
                <input type="hidden" name="id" value={props.data.id} />
                <label>
                    Nome:
                    <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 m-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[300px]" value={props.data.name} onChange={handleChange} />
                </label>
                <Submit>Salvar</Submit>
            </form>
            
        </div>
    )
}