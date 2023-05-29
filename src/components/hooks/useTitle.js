import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sakura Kitchen`;
    }, [title])
}
export default useTitle;