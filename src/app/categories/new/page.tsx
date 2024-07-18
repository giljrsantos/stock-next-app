import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page(){
    return (
        <div>
            <h2>Nova Categoria</h2>
            <div className="flex flex-row w-full m-5">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" placeholder="Nome Categoria" className="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[300px]" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit"> Salvar</button>
                    </div>
                </form>
            </div>

            <Button asChild>
                <Link href="/categories/new">Voltar</Link>
            </Button>
        </div>
    )
}