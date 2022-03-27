import React from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';
import logo from './logo.svg';
import './App.css';

function App() {
  const download = () => {
    axios
      .get(
        'https://qa.assets-server.div2.pgtest.co/data/3d/ae/3daea1dbf2b4c5cddd854377dfaf3ea7.jpg?e=1648400228&m=aYHh2iokrErEdhVM75sgog',
        {
          responseType: 'blob',
        },
      )
      .then((response) => {
        // const splitType = response.data.type.split('/');
        FileSaver.saveAs(new Blob([response.data], { type: 'image/jpeg' }), `3daea1dbf2b4c5cddd854377dfaf3ea7.jpg`);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={download}>
          Download
        </button>
      </header>
    </div>
  );
}

export default App;
