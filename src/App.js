import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

// Importando context
// El context tomara el lugar del Fragment que utilizamos de manera habitual. Ahora todo los componentes que esten dentro del CategoriasProvider tendran acceso a los valores declarados en el context.
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider, { ModalContext } from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

            <Header />
            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>
              <ListaRecetas />
            </div>
            
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>  
  );
}

export default App;
