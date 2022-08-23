import {useState} from 'react';
import { GifGrid, WriteCategory } from './components/componentes.js';


const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel']);
  
  const onAddCategory = (newCategory)=>{
    //Todo Ya existe!
    if (categories.includes(newCategory)) return; 

    //Todo No existe 
    // setCategories([newCategory,...categories ]);
    setCategories([newCategory]);

  }

  return (
    <>
        <h1>Gif Expert App</h1>

          <WriteCategory  
          onPorMiF={onAddCategory}
          />

        <ol>
          { categories.map( (category) =>
             (
                <GifGrid key={category} category={category}/>
            )
          )  
        }         
        </ol>
    </>
  )
}

export default GifExpertApp;
