import { useState } from "react"

export const WriteCategory = ({onPorMiF}) => {

  const [inputValue, setInputValue] = useState('');
  const cambioArbitro = ({target})=>{
    setInputValue(target.value);
  };
    const onSubmit = (event) =>{
      event.preventDefault();
      if (inputValue.trim().length<=1) return;
      setInputValue('');
      onPorMiF(inputValue.trim());

    };
  return (
  <>
      <form onSubmit={  onSubmit  }>
          <input  
            type="text"
            placeholder="Buscar gifts..."
            value={inputValue}
            onChange={ cambioArbitro}  
          />
      </form>
  </>
  )
}

export default WriteCategory

