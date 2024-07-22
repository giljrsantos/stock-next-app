

import DeleteDialog from "@/components/delete-dialog/DeleteDialog";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { PrismaClient } from '@prisma/client';
import Link from "next/link";

export default async function page(){
    const prisma = new PrismaClient();

    const categories = await prisma.category.findMany()

    async function deleteCategory(id: string) {
        'use server'
        console.log('Delete category with id', id);
    }
    return (
        <div>
            <Table>
                <TableCaption>Uma lista de suas categorias.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead className="w-[100px] text-center">Ação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                    <Button asChild variant="link">
                                        <Link href={`/categories/edit/${category.id}`}>Editar</Link>
                                    </Button>                                    
                                    <DeleteDialog message={`Apagar: ${category.name}?`} id="category.id" actionYes={deleteCategory}></DeleteDialog>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Button asChild>
                <Link href="/categories/new">Nova Categoria</Link>
            </Button>
        </div>
    )
}