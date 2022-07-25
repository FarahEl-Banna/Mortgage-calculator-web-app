import './InputFeild.css';
import commas from './FormatNumber'; 

function useOutputFeild(props) {
    var n = commas(props.value);
    return (
        <div>
            <label> {props.l} :</label>
            <br/>
            <output>$ {n} </output>
        </div>
    );
  };
  
   export default useOutputFeild;