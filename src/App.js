
import './App.css';

import React from 'react';
import  Pdf  from './pdf';
import {useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';


 function DownloadLink({name, des }) {
  return (
    <div class="center">
    <PDFDownloadLink document={<Pdf name={name} des={des} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download pdf now!'
      }
    </PDFDownloadLink>
  </div>
  )

}



const App = function () {

  const [name,setName] = useState('');
  const [des,setDes] = useState('');
  const [signal,setSignal] = useState(0);

  function handleChange1(event) {
    setName(event.target.value);
    setSignal(0);
  }

  function handleChange2(event) {
    setDes(event.target.value);
    setSignal(0);
  }


  function handleClick() {
    setSignal(1);
 
  }



  return  (
  <>
    <center><h1>Bug: Myanmar Font error while converting into PDF</h1></center>
    <form class="signup-form" action="/signup" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username"  name="username" placeholder="Test in burmese" onChange={handleChange1} required />

        <label for="description">Description:</label>
        <textarea type="description"  id="des" placeholder="Test in burmese" name="des" onChange={handleChange2}></textarea>
        <button type="button" onClick={handleClick}>Convert PDF</button>

    </form>

    {signal && <DownloadLink name={name} des={des}/> }
  </>)
};

export default App;
