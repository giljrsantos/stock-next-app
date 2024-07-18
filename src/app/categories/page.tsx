import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page(){
    return (
        <div>
            <Button asChild>
                <Link href="/categories/new">Nova Categoria</Link>
            </Button>
        </div>
    )
}