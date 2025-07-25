import { useEffect, useState } from "react"

function useFetch(apiPath,queryTerm="") {

    const [data, setdata] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`
     useEffect(()=>
      {
          async function fetchMovies(){
            const response = await fetch(url);
            const json = await response.json();
            setdata(json.results);
          }
          fetchMovies()
      },[url])
  return {data}
}

export default useFetch