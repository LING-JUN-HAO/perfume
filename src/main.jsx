import React from 'react';
import { createRoot } from 'react-dom/client';
import Dir from './dir';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Dir />
  </React.StrictMode>
);