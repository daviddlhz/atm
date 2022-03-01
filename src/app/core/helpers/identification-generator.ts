export function generateId(): number {
    return Number((new Date().getTime()).toString())
}