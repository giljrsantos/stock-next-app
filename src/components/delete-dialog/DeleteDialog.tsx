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
import { Button } from '@/components/ui/button';

interface DeleteDialogProps {
    message: string
    id: string
    actionYes: any
}

export default function DeleteDialog(props: DeleteDialogProps){
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="link">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absoluty surer?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {props.message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className='bg-destructive hover:bg-destructive-hover' asChild>Continuar</AlertDialogAction>
                    <Button onClick={() => props.actionYes(props.id)}></Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}