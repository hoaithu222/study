import { revalidatePath, revalidateTag } from "next/cache";
// import { revalidateTag } from "next/cache";
// revalidatePath xóa theo đường dẫn xóa tất xóa cả trang
// revalidateTag  xóa theo đường thẻ

export async function POST(request) {
    const { type, value } = await request.json();
    if (type === "path") {
        revalidatePath(value);
    }
    else if (type === "tag") {
        revalidateTag(value);
    }


    return Response.json({
        status: true,
    })

}