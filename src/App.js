import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

// Importando context
// El context tomara el lugar del Fragment que utilizamos de manera habitual. Ahora todo los componentes que esten dentro del CategoriasProvider tendran acceso a los valores declarados en el context.
import CategoriasProvider from './context/CategoriasContext';

function App() {
  return (
    <CategoriasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>  
  );
}

export default App;
