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
                                    {/*<Button asChild variant="link">
                                        <Link href={`/categories/del/${category.id}`}>Apagar</Link>
                                    </Button>*/}
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="link">Apagar</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                Você deseja remover está categoria {category.name}?
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Não</AlertDialogCancel>
                                                <AlertDialogAction>Sim</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
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