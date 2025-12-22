export function parseDate(dateStr: string) {
    return new Date(dateStr.replace(" ", "T"))
}
