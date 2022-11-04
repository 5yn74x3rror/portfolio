import React from 'react';
import './App.css';

const App: React.FunctionComponent<AppProps> = ({ x, y }) => {
  return (
    <div className="App">
        {x}{x}
    </div>
  );
}

export default App;

interface AppProps {
  x: String,
  y?: String,
}