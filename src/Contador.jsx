import React, { useState, useEffect } from 'react';
import './Contador.css'; 

const Contador = () => {
  const [count, setCount] = useState(0);
  const [animateNumber, setAnimateNumber] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);

  const incrementarContador = () => {
    setCount(count + 1);
    setAnimateNumber(true); 
    setAnimateTitle(true); 
  };

  useEffect(() => {
    if (animateNumber) {
      const timerNumber = setTimeout(() => {
        setAnimateNumber(false); 
      }, 300); 
      return () => clearTimeout(timerNumber); 
    }
  }, [animateNumber]);

  useEffect(() => {
    if (animateTitle) {
      const timerTitle = setTimeout(() => {
        setAnimateTitle(false); 
      }, 300); 
      return () => clearTimeout(timerTitle); 
    }
  }, [animateTitle]);


  return (
    <div className="contador-container"> 
      <h1 className={`contador-titulo ${animateTitle ? 'animate' : ''}`}>Contador Animado</h1> 
      <h1 className={`contador-numero ${animateNumber ? 'animate' : ''}`}>{count}</h1> 
      <button className="contador-botao" onClick={incrementarContador}>Clique aqui</button> 
    </div>
  );
};

export default Contador;