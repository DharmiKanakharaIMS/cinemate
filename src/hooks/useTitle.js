import { useEffect } from "react"

function useTitle(title) {

    useEffect(()=>{
            document.title = `${title} / Cinemate`
        })
  return null
}

export default useTitle