import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    // state para la busqueda
    const [ recetas, guardarRecetas ] = useState([]);
    const [ busqueda, buscarRecetas ] = useState({
        nombre: '',
        categoria: ''
    });

    // tercer state
    const [ consultar, guardarConsultar ] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect( () => {
        if(consultar===true){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

                const resultado = await axios.get(url);
                guardarRecetas(resultado.data.drinks);
            }
            obtenerRecetas();
        }
    }, [busqueda]);
    
    
    return ( 
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;