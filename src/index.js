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
  <div><button className="ibut" onClick={Increase}><h1>+++++++</h1></button>
  <h1 className="val">{value}</h1>
  <button className="dbut" onClick={Decrease}><h1>---------</h1></button>
  </div>
)
}
ReactDOM.render(<Temp/>, document.querySelector('#root'));
