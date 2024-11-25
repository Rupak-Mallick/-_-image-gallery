import { useEffect } from "react";
import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { Search } from './Search';


export const ImageGallery = () => {
    const [ images, setImages ]= useState([]);
    const [term, setTerm] = useState("");

    useEffect(()=> {
        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(response => response.json())
            .then(json => {
                setImages(json.hits)
            });
            
    },[term]);
  return (
    <div className="container mx-auto">
        <Search searchText={(text)=> setTerm(text)}/>
        <div className="grid grid-cols-3 gap-4">
            {images.map((images)=>(
                <ImageCard image={images} key={images.id}/>
            ))}
        </div>
    </div>
  )
}
