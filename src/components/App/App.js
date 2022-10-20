import './App.css';
import Gallery from '../Gallery';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

function App() {
  const [memes, setMemes] = useState([]);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    handleRandom();
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => {
        setMemes(data.data.memes);
      })
  }, []);

  const handleLoadImg = () => {
        handleRandom();
    };

    const handleRandom = () => {
        let randoms = [];
        while (randoms.length < 20) {
            let random = Math.floor(Math.random() * 100);
            if (randoms.includes(random)) continue;
            randoms.push(random);
        }
        setRandoms(randoms);
    };

  return (
    <>
      <Button variant="primary" onClick= {handleLoadImg}>Random Memes</Button>
      <Gallery memes={memes} randoms = {randoms} />
    </>
  );
}

export default App;
