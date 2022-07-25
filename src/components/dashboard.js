
import useSlider from './MySlider';
import useButton from './MyButton';
import OutputFeild from './MyOutputFeild';
import './InputFeild.css';



function Dashboard() {
  const max =[1000000,500000,30,];
  const [PurchaseValue, PSlider] = useSlider(
    max[0],
    max[0]/1000,
    max[0]/2,
    "Purchase Price",
    "PurchasePrice",
    '$'
  );
  const [DownPaymentValue, DPSlider] = useSlider(
    PurchaseValue,
    100,
    PurchaseValue/4,
    "Down Payment",
    "DownPayment",
    '$'
  );
  const [RepaymentTimeValue, RTSlider] = useSlider(
    max[2],
    1,
    max[2]/2,
    "Repayment Time",
    "RepaymentTime",
    'years'
  );
  const [InterestRateValue, IRSlider] = useSlider(
    100,
    1,
    3,
    "Interest Rate",
    "InterestRate",
    '%',
    1
  ); 
  var [Button, result] = useButton(PurchaseValue, DownPaymentValue,InterestRateValue,RepaymentTimeValue); 
  //console.log(result);
  return (
    <div className='container'>
      <h2 className='title'>Mortgage Calculator</h2>
      <div className='ingrid'>
          <PSlider />
          <DPSlider />
          <RTSlider />
          <IRSlider />
          <OutputFeild l ="Loan Amount:" value ={result[0]} />
          <OutputFeild l ="Estimated pr. Month:" value ={result[1]} />
          <Button />
          </div>
    </div>
  );
}

export default Dashboard;
