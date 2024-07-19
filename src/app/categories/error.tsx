'use client'

import { Button } from '@/components/ui/button';

export default function Error({
    error,
    reset
}: {
    error: Error & {digest?: string}
    reset: () => void
}){
    return (
        <div>
            <h2>Algo deu errado!</h2>
            <b>{ error.message }</b>
            <br />
            <Button onClick={
                // Tente recuperar tentando renderizar novamente o segmento
                () => reset()}>
                    Tente novamente
                </Button>
        </div>
    )
}