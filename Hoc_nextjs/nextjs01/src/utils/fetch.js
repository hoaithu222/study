export const fetcher = async ({ url, headers = {} }) => {
    const response = await fetch(url, {
        method: "GET",
        headers,
    })
    if (!response.ok) {
        throw new Error("Lỗi khi lấy dữ liệu")
    }
    return response.json();
};