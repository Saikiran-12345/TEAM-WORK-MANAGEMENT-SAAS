import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

// Initialize seed data
import { seedDatabase } from './data/seed';
seedDatabase();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
);
