import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
