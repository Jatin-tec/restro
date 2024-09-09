"use server"
import { getSession } from "@/auth/lib";
import { apiPost } from "@/handlers/apiHandler";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export async function createArea(prevState, formData) {
    const user = await getSession();
    console.log(formData);

    const data = {
        name: formData.get("name"),
    };

    try {
        const response = await apiPost("/api/shop/area/", data, {
            headers: {
                Authorization: `Bearer ${user.tokens.access}`,
            },
        });
        revalidatePath('/table')
        return { 'message': 'Area created successfully', 'status': 'success' };
    } catch (error) {
        console.error("Error creating area:", error);
        return { 'message': error.message, 'status': error.status };
    }
}