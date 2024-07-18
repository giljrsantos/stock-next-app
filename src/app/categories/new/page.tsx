import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page(){
    return (
        <div>
            <h2>Nova Categoria</h2>
            <div className="flex flex-row w-full m-5">Formulaŕio</div>
            <Button asChild>
                <Link href="/categories/new">Voltar</Link>
            </Button>
        </div>
    )
}