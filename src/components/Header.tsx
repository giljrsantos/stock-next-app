import Link from 'next/link';
import React from 'react';
import {Button} from './ui/button';

export default function Header(props: {title: string}){
    return (
        <div className='bg-black text-slate-50 font-semibold text-lg p-5 shadow-lg flex flex-row justify-between items-center'>
            <h1>{ props.title }</h1>
            <div className='flex flex-row gap-2'>
                <Button asChild variant="secondary">
                    <Link href="/">Início</Link>
                </Button>
                <Button asChild variant="secondary">
                    <Link href="/categories">Categorias</Link>
                </Button>
                <Button asChild variant="secondary">
                    <Link href="/products">Produtos</Link>
                </Button>                                
            </div>
        </div>
    )
}