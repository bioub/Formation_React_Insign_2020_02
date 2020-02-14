import React from 'react';
import { Route } from 'react-router-dom';

function Presentation() {
  return (
    <div className="Presentation">
       Presentation
       <Route path="/presentation/offres" component={() => <h2>Nos offres</h2>}/>
       <Route path="/presentation/produits" component={() => <h2>Nos produits</h2>}/>
    </div>
  );
}

export default Presentation;