import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import AppProvider from './hooks';
import Routes from './routes'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
