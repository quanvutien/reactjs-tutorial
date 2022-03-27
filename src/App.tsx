import React from 'react';
import axios from 'axios';
import { Blob } from 'blob-polyfill';
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
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `3daea1dbf2b4c5cddd854377dfaf3ea7.jpg`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
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
