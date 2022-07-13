import "../App.css";
import { useState } from "react";
import React from 'react';

const Title = (props) => {

  const [value, setValue] = useState(0);

  return <div>
    <div>
      {value}
    </div>
    <button onClick={()=>{
      setValue((value) => (value += 1));
    }}>Поменять</button>
  </div>
}

export default Title