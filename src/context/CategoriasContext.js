import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


// Crear el context -> Referencia al context
// Se utiliza el siguiente export, para poder usarlo en el hook useContext, ya que este tendra que tomarlo como argumento
export const CategoriasContext = createContext();


// Crear provider, que es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    // Crear el state del context
    const [ categorias, guardarCategorias ] = useState([]);

    // Ejecutar el llamado a la API (Usando AXIOS)
    useEffect( () => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }        
        obtenerCategorias();
    }, [])


    return(
        // Aquie declaramos el flujo de datos usando props.childer y Provides
        <CategoriasContext.Provider
            // Todo lo que se ponga en value son los valores que estaran disponibles en el resto de componentes
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}


export default CategoriasProvider;
