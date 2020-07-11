import React, { useContext } from 'react';
// Para poder consumir la información que viene desde el context usamos el "nuevo" hook useContext
import { CategoriasContext } from '../context/CategoriasContext';
// El siguiente import es el que contiene la referencia al context que pasara como argumento al hook
const Formulario = () => {

    // Haciendo uso del context, traemos todo lo que esta diponible (en el value) y le aplicamos destructuring
    const { categorias } = useContext(CategoriasContext);
    console.log(categorias);


    return ( 
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            > {categoria.strCategory} </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;