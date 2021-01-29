import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Temp() {
  const [value, setValue] = useState(0);
  function Increase() {
    setValue((Incraese) => {
      return Incraese + 1
    })
  
}

function Decrease() {
  setValue((Decrease) => {
    return Decrease -1
  })
}
return(
  <div><button onClick={Increase}>+++++++</button>
  <h1>{value}</h1>
  <button onClick={Decrease}>---------</button>
  </div>
)
}
ReactDOM.render(<Temp/>, document.querySelector('#root'));