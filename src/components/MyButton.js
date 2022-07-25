
import React from 'react';
import './InputFeild.css';
import { useState} from "react";

// class MyButton2 extends React.Component{
//     constructor(props){

//     }
//     handleClick = () => {
//         monthlyPaymentResult();
//       };
//       render() {
//         return (
//           <button onClick={this.handleClick}>
//             Get a mortgage quote
//           </button>
//         );
//       }
// }
// function monthlyPaymentResult(p, n, i) {
//     return Math.floor(
//         (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
//     );
//  }

const useButton = (PurchaePrice ,DownPayment, rate, years) => {   
    const [state, setState] = useState([]);
    rate = rate/12/100;
    const numberofPayments = years *12 ;
    var principalLoan ,mortgagePayments ;
    var result = [principalLoan,mortgagePayments];
    

     const handleClick = () =>{
        principalLoan = PurchaePrice - DownPayment;
        const stableConst = Math.pow(1+rate,numberofPayments);
        mortgagePayments = Math.floor( principalLoan*((rate*stableConst)/((stableConst)-1)));
        result = [principalLoan,mortgagePayments];
        setState(result);
        //console.log(result);
        //alert("cliked "+ mortgagePayments)
      };
    const Button = ()=>(
        <div>
            <button className='button' onClick={handleClick}>Get a mortgage quote</button>
        </div>
    );

     return [Button,state];
};

 export default useButton;


// Formula for mortgage payments: M = P[r(1+r)^n/((1+r)^n)-1)]
 //M = the total monthly mortgage payment
 //P = the principal loan amount(Purchase Price - Down Payment)
 //r = your monthly interest rate
 //n = number of payments over the loan’s lifetime.