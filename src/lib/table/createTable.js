"use server"
import { getSession } from "@/auth/lib";
import { apiPost } from "@/handlers/apiHandler";
import { revalidatePath } from "next/cache";

export async function createTable(prevState, formData) {
    const user = await getSession();
    console.log(formData, 'formData');

    const data = {
        name: formData.get("name"),
        capacity: formData.get("capacity"),
        area: formData.get("area"),
    };

    try {
        const response = await apiPost("/api/shop/tables/", data, {
            headers: {
                Authorization: `Bearer ${user.tokens.access}`,
            },
        });
        revalidatePath('/table')
        return { 'message': 'Table created successfully', 'status': 'success' };
    } catch (error) {
        console.error("Error creating table:", error);
        return { 'message': error.message, 'status': 'destructive' };
    }
}