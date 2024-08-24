"use server"

export async function PrintAction(previousState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!name || !email) {
        return {
            value: null,
            message: "Name and email are required."
        };
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
        return {
            value: null,
            message: "Invalid email format."
        };
    }
    const value = {
        name,
        email,
    }; 
    return {
        value,
        success: "បានរក្សាទុកដោយជោគជ័យ!"
    };
}
