import React from 'react';
import logo from './logo.svg';
import './App.css';
import IconPicker from './components/IconPicker/IconPicker';
import IconPickerExample from './IconPickerExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components</h1>
        <p>Page with the example implementation of React components from this Repository.</p>
      </header>
      <main style={{ textAlign: "left" }}>
        <IconPickerExample />
      </main>
    </div>
  );
}

export default App;
