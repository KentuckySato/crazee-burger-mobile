export const refreshPage = () => window.location.reload()

export const setLocalStorage = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error("Error saving to local storage:", error)
    }
}

export const getLocalStorage = <T>(key: string): T | null => {
    const storedItem = localStorage.getItem(key)
    if (storedItem) {
        try {
            return JSON.parse(storedItem) as T
        } catch (error) {
            console.error("Error parsing local storage item:", error)
            return null
        }
    }
    return null
}
