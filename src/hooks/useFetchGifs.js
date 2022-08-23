import {useEffect,  useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (newArgumento) => {

    //*Iniciar como un arreglo vacío
    const [images, setImages] = useState([]);

    const getImages= async()=>{

            const newImages= await getGifts(newArgumento);
            setImages(newImages);
            
        }
            
        useEffect( ()=>{
        getImages();    
    },[] );

    //Todo esto es un hook
        return{
            images: images,
            isLoading:  true,

        }
}
