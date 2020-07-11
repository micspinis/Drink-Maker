import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    // state para la busqueda
    const [ recetas, guardarRecetas ] = useState([]);
    const [ busqueda, buscarRecetas ] = useState({
        nombre: '',
        categoria: ''
    });
    
    
    return ( 
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;