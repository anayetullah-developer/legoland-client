import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Legoland - ${title}`
    },[title])
}


export default useTitle;
