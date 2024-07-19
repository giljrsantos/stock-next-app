import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PrismaClient } from '@prisma/client';

export default async function page(){
    const prisma = new PrismaClient();

    const categories = await prisma.category.findMany()
    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>{ category.name }</div>
            ))}
            <Button asChild>
                <Link href="/categories/new">Nova Categoria</Link>
            </Button>
        </div>
    )
}