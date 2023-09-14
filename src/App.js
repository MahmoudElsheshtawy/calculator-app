/* eslint-disable no-unreachable */
/* eslint-disable no-eval */
import React, { useState } from 'react'


function App() {
  const [state, setstate] =useState("")
 

   const handleClick =(e)=>{
      setstate(state.concat(e.target.value));
      // setCalc(calc.concat(e.target.value));

   }
  //  Clear 
  const handleremove =()=>{
    setstate("")
  }
  //backsteep
  const handleback=()=>{
    setstate(state.slice(0,state.length -1))
  }
  // cacolater =
  const Calchandelar =()=>{
    try {
       setstate(eval(state).toString());
     }catch(err) {
       setstate("Errorrrrr")
     }
     
   }


  // 465.999.999.
  // const integer_formater = new Intl.NumberFormat("en-us" ,{
  //   maximumFractionDigits:0,
  // })
  // function formatopration(operand) {
  //   if (operand == null) return 
  //     const [integer,decimal]= operand.split('.')
  //     if(decimal == null) return integer_formater.format(integer)
 
  // }
 
  
  return (
    <div className="App">
               <div  className="container">
                <form action=''   >
                {/* ,formatopration(state)  */}
                  <input type='text'  value={state} />
                 
                  </form>
                  <div className='key' >
                 <button className='hightlight' id='clear' onClick={handleremove} >Clear</button>
                 <button className='hightlight' id="backsteep" onClick={handleback}>AC</button>
                 <button  className='hightlight' value={"/"}  onClick={handleClick}>&divide;</button>
                 <button  value={"7"} onClick={handleClick}>7</button>
                 <button value={"8"} onClick={handleClick}>8</button>
                 <button value={'9'} onClick={handleClick}>9</button>
                 <button  className='hightlight' value={"*"} onClick={handleClick}>*</button>
                 <button value={"4"} onClick={handleClick}>4</button>
                 <button value={'5'} onClick={handleClick}>5</button>
                 <button value={'6'} onClick={handleClick}>6</button>
                 <button  className='hightlight' value={"-"} onClick={handleClick}>&ndash;</button>
                 <button value={'1'} onClick={handleClick}>1</button>
                 <button value={'2'} onClick={handleClick}>2</button>
                 <button value={'3'} onClick={handleClick}>3</button>
                 <button  className='hightlight' value={"+"} onClick={handleClick}>+</button>
                 <button value={'0'} onClick={handleClick}>0</button>
                 <button value={'.'} onClick={handleClick}>.</button>
                 <button onClick={Calchandelar}  className="tow hightlight">=</button>

                </div>

               </div>
    </div>
  );
}

export default App;
