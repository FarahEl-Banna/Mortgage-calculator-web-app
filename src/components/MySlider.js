import './InputFeild.css';
import  React, { useState, useEffect } from "react";
import commas from './FormatNumber'; 



const useSlider = (max,step, defaultState, label, id,symbole,min) => {
    const [state, setSlide] = useState(defaultState);
    const handleChange = e => {
      var n = commas(e.target.value);
      if (symbole ==='$')
            document.getElementById(id).innerHTML = symbole + n ;
        else  document.getElementById(id).innerHTML=  n + " "+symbole  ;
    };

    useEffect(()=> {
      var n = commas(state);
        if (symbole ==='$')
            document.getElementById(id).innerHTML = symbole + n ;
        else  document.getElementById(id).innerHTML=  n + " "+symbole  ;
      });
    const Slider = () => (
        <div>
            <label>{label}: </label>
            <output id={id}> </output>
            <br/>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                // value={state} // don't set value from state
                defaultValue={state} // but instead pass state value as default value
                onChange={handleChange} // dont't set state on all change as react will re-render
                onMouseUp={e=> setSlide(e.target.value)} // only set state when handle is released
            /></div>
    );
    return [state, Slider, setSlide];
  };
  
   export default useSlider;


