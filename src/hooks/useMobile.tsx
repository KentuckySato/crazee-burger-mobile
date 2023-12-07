import { useEffect, useState } from "react"

export const useMobile = () => {

    const [width, setWidth] = useState<number>(window.innerWidth)
    const MAX_WIDTH_MOBILE = 768

    const handleWindowSizeChange = () => setWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        window.addEventListener('orientationchange', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
            window.removeEventListener('orientationchange', handleWindowSizeChange)
        }
    }, [])

    const isMobile = width <= MAX_WIDTH_MOBILE

    return { isMobile }
}