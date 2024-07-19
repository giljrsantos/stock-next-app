import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

export default function page(){
    async function createCategory(formData: FormData) {
        'use server'
        //console.log('Create Category with formData', formData);

        const formObject = Object.fromEntries(formData);

        if(!formObject.name){
            throw new Error('Name is required');
        }

        const prisma = new PrismaClient();
        await prisma.category.create({
            data: {
                name: formObject.name as string
            }
        });

        redirect('/categories');
    }
    return (
        <div>
            <h2>Nova Categoria</h2>
            <div className="flex flex-row w-full m-5">
                <form action={createCategory}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Nome Categoria" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[300px]" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit"> Salvar</button>
                    </div>
                </form>
            </div>

            <Button asChild variant="outline">
                <Link href="/categories/new">Voltar</Link>
            </Button>
        </div>
    )
}