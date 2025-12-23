export const getSafeImageSrc = (url?: string | null) => {
    if (!url) return "/black.jpg"

    try {
        new URL(url)
        return url
    } catch {
        return "/black.jpg"
    }
}