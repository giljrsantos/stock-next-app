import { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function layout({children}: PropsWithChildren){
    return (
        <Card>
            <CardHeader>
                <CardTitle>Produtos</CardTitle>
            </CardHeader>
            <CardContent>{ children }</CardContent>
        </Card>
    )
}