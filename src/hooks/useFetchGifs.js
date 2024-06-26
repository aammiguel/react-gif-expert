import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true )

    const getImages = async() => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
        getGifs(category);
    }, [])

  return {
    images, 
    isLoading
  }
}
