'use client'
import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { deleteTableWithDelay } from "@/lib/table/deleteTable";
import { useToast } from "@/hooks/use-toast";
import { Trash } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";

export function DeleteTable({ tableId, tableData }) {
    const { toast } = useToast();
    const [state, formAction] = useActionState(deleteTableWithDelay, { message: null });
    const timeoutIdRef = useRef(null);


    useEffect(() => {
        if (state.message) {
            // Set up the timeout for the actual deletion
            timeoutIdRef.current = setTimeout(() => {
                formAction(tableId); // Proceed with deletion after 5 seconds
            }, 5000);

            toast({
                title: "Table deleted",
                action: (
                    <ToastAction
                        onClick={() => {
                            clearTimeout(timeoutIdRef.current); // Cancel deletion
                            toast({
                                variant: 'success',
                                title: "Deletion undone",
                            });
                        }}
                    >
                        Undo
                    </ToastAction>
                ),
            });

            return () => clearTimeout(timeoutIdRef.current);
        }
    }, [state]);

    return (
        <Button onClick={() => formAction(tableId, tableData)}>
            <Trash />
        </Button>
    );
}