import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const download = () => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'https://qa.assets-server.div2.pgtest.co/data/preview/a4/9c/a49c8e6e3fcbc8c0da13fb921659cded.png?e=1649175242&m=8h3Fq7lMokDbVj4x742aWw',
    );
    element.setAttribute('download', 'a49c8e6e3fcbc8c0da13fb921659cded.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  console.log('!!new Blob()', !!new Blob());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {(!!new Blob()).toString()}
        <button type="button" onClick={download}>
          Download
        </button>
      </header>
    </div>
  );
}

export default App;
