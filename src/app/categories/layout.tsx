import { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function layout({children}: PropsWithChildren){
    return (
        <Card>
            <CardHeader>
                <CardTitle>Categorias</CardTitle>
            </CardHeader>
            <CardContent>{ children }</CardContent>
        </Card>
    )
}