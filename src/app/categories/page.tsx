'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PrismaClient } from '@prisma/client';
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from '@/components/ui/table';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import DeleteDialog from "@/components/delete-dialog/DeleteDialog";

export default async function page(){
    const prisma = new PrismaClient();

    const categories = await prisma.category.findMany()
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
                                    <DeleteDialog message={`Delete " ${category.name}`} id="{category.id}" actionYes={deleteCategory}></DeleteDialog>
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