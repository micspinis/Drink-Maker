import React, { useContext, useState } from 'react';
// Para poder consumir la información que viene desde el context usamos el "nuevo" hook useContext
import { CategoriasContext } from '../context/CategoriasContext';
// El siguiente import es el que contiene la referencia al context que pasara como argumento al hook
import { RecetasContext } from "../context/RecetasContext";
const Formulario = () => {

    // Definiendo state local
    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    });

    // Haciendo uso del context, traemos todo lo que esta diponible (en el value) y le aplicamos destructuring
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    // Funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }
    

    return ( 
        <form 
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
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
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
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