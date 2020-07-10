import React, { createContext, useState } from 'react';


// Crear el context -> Referencia al context
// Se utiliza el siguiente export, para poder usarlo en el hook useContext, ya que este tendra que tomarlo como argumento
export const CategoriasContext = createContext();


// Crear provider, que es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    // Crear el state del context
    const [ hola, guardarHols ] = useState('Hola estoy fluyendo desde el context, esto es algo nuevo y genial XD!');

    return(
        // Aquie declaramos el flujo de datos usando props.childer y Provides
        <CategoriasContext.Provider
            // Todo lo que se ponga en value son los valores que estaran disponibles en el resto de componentes
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}


export default CategoriasProvider;
