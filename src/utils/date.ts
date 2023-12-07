type FormatDate = {
    year: number
    month: string
    day: string
    hours: string
    minutes: string
    seconds: string
}

const formatCurrentDate = (): FormatDate => {
    const currentDate = new Date()

    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, "0") // +1 month start at 0
    const day = String(currentDate.getDate()).padStart(2, "0")

    const hours = String(currentDate.getHours()).padStart(2, "0")
    const minutes = String(currentDate.getMinutes()).padStart(2, "0")
    const seconds = String(currentDate.getSeconds()).padStart(2, "0")

    return {
        year,
        month,
        day,
        hours,
        minutes,
        seconds,
    }
}

export const getFormattedDate = (): string => {
    const date = formatCurrentDate()
    return `${date.year}-${date.month}-${date.day} ${date.hours}:${date.minutes}:${date.seconds}`
}
