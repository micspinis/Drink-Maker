import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext'; 

// Imports para ventana modal
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


// Funciones para crear ventana modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      overflow: 'scroll',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top:'10%',
      left:'10%',
      height:'100%',
      display:'block'
    },
}));


const Receta = ({receta}) => {

    // Configuracion del modal de material-ui
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false); //inicial como false por que el modal esta cerrado.

    const classes = useStyles();


    // Abrir y cerrar el modal (funciones de la libreria material-ui)
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    // extraccion de los valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);


    // Muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( informacion[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li> { informacion[`strIngredient${i}`] }  { informacion[`strMeasure${i}`] }</li>
                )
            }
        }

        return ingredientes;
    }
    

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header"> {receta.strDrink} </h2>
                <img 
                    className="card-img-top" 
                    src={receta.strDrinkThumb}
                    alt={`Imagen de ${receta.strDrink}`} 
                />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();    
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2> {informacion.strDrink} </h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>
                            <img className="img-fluid my-3" src={informacion.strDrinkThumb} alt="" />

                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                { mostrarIngredientes(informacion) }
                            </ul>
                        </div>
                    </Modal>
                </div> 
            </div>
        </div>
    );
}
 
export default Receta;