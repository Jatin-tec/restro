"use server"
import { getSession } from "@/auth/lib";
import { apiDelete } from "@/handlers/apiHandler";
import { revalidatePath } from "next/cache";

export async function deleteTableWithDelay(tableId, delay = 5000) {
    const user = await getSession();

    try {
        // Wait for the undo timeout before actually deleting
        await new Promise((resolve) => setTimeout(resolve, delay));

        // Proceed with actual deletion if undo hasn't been triggered
        await apiDelete(`/api/shop/tables/${tableId}/`, {
            headers: {
                Authorization: `Bearer ${user.tokens.access}`,
            },
        });

        // Revalidate to refresh the table list
        revalidatePath('/table');

        return { message: 'Table deleted successfully', status: 'success' };
    } catch (error) {
        console.error("Error deleting table:", error);
        return { message: error.message, status: 'error' };
    }
}
