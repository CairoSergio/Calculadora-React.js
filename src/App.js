import React, { useState } from "react";


function Tecla({ buttonData }) {
  return (
    <div className="division">
      {buttonData.map((data, index) => (
        <button key={index} onClick={data.callback}  className="TecCima" id={data.state}>
          {data.description}
        </button>
      ))}
    </div>
  );
}

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [nome, setNome ]= useState('Resultados');
  const [maxtamanho, setMaxtamanho] = useState(10)
  const [ index, setIndex] = useState(0)
  const nivel = [
    ' nivel1',
    ' nivel2',
    ' nivel3',
    ' nivel4'
  ]
  const handleNumberClick = (number) => {
    if(display.length===maxtamanho){
      if(index===4){
        alert('voce atingiu o numero maximo de digitos')
      }else{
        setNome(nome + nivel[index])
        setIndex(index + 1)
        setMaxtamanho(maxtamanho + 3)
        console.log(index , maxtamanho)
      }
    }else{
      console.log(display.length)
      if(number==='%' || number==='.'){
        return
      }else{
        setDisplay((prevDisplay) => prevDisplay === "0" ? number : prevDisplay + number);
      }
    }
  };

  const handleOperatorClick = (operator) => {
    if(display.length===maxtamanho){
      if(index===4){
        alert('voce atingiu o numero maximo de digitos')
      }else{
        setNome(nome + nivel[index])
        setIndex(index + 1)
        setMaxtamanho(maxtamanho + 3)
        console.log(index , maxtamanho)
      }
    }else{
      if(display==='0'){
        if(operator==='/' || operator==='*' || operator==='.'){
          return
        }else{
    
          setDisplay((prevDisplay) => prevDisplay === "0" ? operator : prevDisplay + operator);
        };
      }else{
        if(display==='-' || display==='+'){
          if(operator==='*' || operator==='/'){
            return
          }else{
            setDisplay(operator)
          }
        }else{
          
          setDisplay((prevDisplay) => prevDisplay === "0" ? operator : prevDisplay + operator);
        }
      }
    }
  };

  const handleEqualClick = () => {

    setDisplay((prevDisplay) => eval(prevDisplay).toString());
  };

  const handleClearClick = () => {
    setDisplay("0");
    setNome('Resultados')
    setIndex(0)
    setMaxtamanho(10)
  };
  const handleClear1Click = () =>{
    let newDisplay = display.substring(0, display.length - 1);
    if(display.length===10){
      setIndex(0)
      setMaxtamanho(10)
      setNome('Resultados')
    }
    if(display.length===13){
      setIndex(1)
      setMaxtamanho(13)
      setNome('Resultados nivel1')
    }
    if(display.length===16){
      setIndex(2)
      setMaxtamanho(16)
      setNome('Resultados nivel1')
    }
    if(display.length===1){
      setDisplay("0")
    }else{
      setDisplay(newDisplay)
    }
  }

  const buttonData = [
    { description: "AC", callback: handleClearClick },
    { description: "C", callback: handleClear1Click },
    { description: "%", callback: () => handleNumberClick("%") },
    { description: "/", callback: () => handleOperatorClick("/"), state: 'amarela'},
    { description: "7", callback: () => handleNumberClick("7"),state:'numero' },
    { description: "8", callback: () => handleNumberClick("8"),state:'numero' },
    { description: "9", callback: () => handleNumberClick("9"),state:'numero' },
    { description: "x", callback: () => handleOperatorClick("*"), state: 'amarela'},
    { description: "4", callback: () => handleNumberClick("4"),state:'numero' },
    { description: "5", callback: () => handleNumberClick("5"),state:'numero' },
    { description: "6", callback: () => handleNumberClick("6") ,state:'numero'},
    { description: "-", callback: () => handleOperatorClick("-"), state: 'amarela' },
    { description: "1", callback: () => handleNumberClick("1"),state:'numero' },
    { description: "2", callback: () => handleNumberClick("2") ,state:'numero'},
    { description: "3", callback: () => handleNumberClick("3") ,state:'numero'},
    { description: "+", callback: () => handleOperatorClick("+"), state: 'amarela'},
    { description: "0", callback: () => handleNumberClick("0"), state:'zero' },
    { description: ".", callback: () => handleOperatorClick(".") ,state:'numero'},
    { description: "=", callback: handleEqualClick , state: 'amarela'},
  ];
  return (
    <div className="container">
      <div className={nome}>
        
        {display}
      </div>
      <Tecla buttonData={buttonData} />
    </div>
  );
}

export default Calculator;
