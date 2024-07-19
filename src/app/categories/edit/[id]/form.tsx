'use client'

import { useState } from "react";

interface UpdateFormProps {
    data: {
        id: string
        name: string
    }
}

export default function UpdateForm(props: UpdateFormProps){
    const category = props.data;
    
    return (
        <div>
            Formulário Categoria: { category.id } - {category.name}
        </div>
    )
}