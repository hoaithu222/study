"use server";

import { revalidateTag } from "next/cache";

export const handleAction = async (form) => {

    // console.log(form.get("title"));
    // console.log("handleAction");
    const title = form.get("title");
    if (!title) {
        return { status: false }
    }
    // call api
    const response = await fetch(`${process.env.SERVER_API_TODO}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title })
    });

    // clear cache
    if (response.ok) {
        revalidateTag("todos");
        return { status: true }
    }
    return { status: false }

};