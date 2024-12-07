export const clearCachePath = async (path) => {
    const response = fetch(process.env.API_LOCAL + "/api/cache", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "path", value: path }),
    });
    return response.ok;
}
export const clearCacheTag = async (tag) => {
    const response = fetch(process.env.API_LOCAL + "/api/cache", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "tag", value: tag }),
    });
    return response.ok;

}