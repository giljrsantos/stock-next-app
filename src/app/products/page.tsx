import DeleteDialog from '@/components/delete-dialog/DeleteDialog';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Link } from 'lucide-react';
export default async function page() {
    return (
        <div>
            <Table>
                <TableCaption>Uma lista de seus produtos.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead className="w-[100px] text-center">Ação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Milk</TableCell>
                        <TableCell>Comida</TableCell>
                        <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                    <DeleteDialog message={`Apagar`} id={''} actionYes={undefined}></DeleteDialog>                                  
                                </div>
                            </TableCell>                        
                    </TableRow>
                    <TableRow>
                        <TableCell>Toothpast</TableCell>
                        <TableCell>Produtos Limpeza</TableCell>
                        <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                <DeleteDialog message={`Apagar`} id={''} actionYes={undefined}></DeleteDialog>                                                                   
                                </div>
                            </TableCell>                        
                    </TableRow>
                    <TableRow>
                        <TableCell>Detergent</TableCell>
                        <TableCell>Produtos Limpeza</TableCell>
                        <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                <DeleteDialog message={`Apagar`} id={''} actionYes={undefined}></DeleteDialog>                                                                   
                                </div>
                            </TableCell>                        
                    </TableRow> 
                    <TableRow>
                        <TableCell>Soap</TableCell>
                        <TableCell>Produtos Limpeza</TableCell>
                        <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                <DeleteDialog message={`Apagar`} id={''} actionYes={undefined}></DeleteDialog>                                                                     
                                </div>
                            </TableCell>                        
                    </TableRow>                                         
                    <TableRow>
                        <TableCell>Asperine</TableCell>
                        <TableCell>Saúde</TableCell>
                        <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                <DeleteDialog message={`Apagar`} id={''} actionYes={undefined}></DeleteDialog>                                                                    
                                </div>
                            </TableCell>                        
                    </TableRow>
                    <TableRow>
                        <TableCell>Tomato</TableCell>
                        <TableCell>Comida</TableCell>
                        <TableCell className="text-right">
                                <div className="flex flex-row gap-2">
                                <DeleteDialog message={`Apagar`} id={''} actionYes={undefined}></DeleteDialog>                                                                   
                                </div>
                            </TableCell>                        
                    </TableRow>                    
                </TableBody>
            </Table>


        </div>
    )
}