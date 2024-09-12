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

    const response = await apiPost("/api/shop/tables/", data, {
        headers: {
            Authorization: `Bearer ${user.tokens.access}`,
        },
    });
    if (!response) {
        return { 'message': 'Error Creating Table', 'status': 'destructive' };
    }
    revalidatePath('/table')
    return { 'message': 'Table created successfully', 'status': 'success' };
}