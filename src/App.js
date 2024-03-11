//import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import React from 'react';

function App() {
  // const [number, setNumber] = React.useState(0);
  // function increment() {
  //   setNumber((prevNumber) => prevNumber + 1);

  let currnetdt= new Date();

  const todaydate= currnetdt.toLocaleDateString();
  const timenow=currnetdt.toLocaleTimeString();
  currnetdt = currnetdt.getHours();
  let greeting = " ";
  const cssStyle = {}

  if(currnetdt >= 1 && currnetdt < 12){

    greeting = "Good Morning"
    cssStyle.color = "green";

  } else if(currnetdt >=12 && currnetdt < 17){

    greeting = "Good Afternoon"
    cssStyle.color = "orange";

  } else if(currnetdt >=17 && currnetdt < 21){

    greeting = "Good Evening"
    cssStyle.color = "red";


  }else{
    greeting = "Good Night"
    cssStyle.color = "purple";

  }

  return (
    <>
    {/* <h1 data-test-id="currentNumber"> {number} </h1> 
    <button data-testid="add-one" onClick={increment}>
        Add one 
    </button> */}

    <div className=' bg-yellow-100 rounded shadow-sm  p-20  text-center'>
    <p className='text-2xl  text-green-700 font-bold'>Date: {todaydate}</p>  <p className='text-2xl text-yellow-5 00 font-bold'> Time :{timenow} </p>
    <h1 className='text-center text-4xl text-indigo-700 mt-3 '> Hello sir, <span style={cssStyle} className='text-4xl font-semibold'>{greeting}</span></h1>
    </div>
    </>
  );
  }
export default App;

// import React from "react";
// export default function App() {
//   const [number, setNumber] = React.useState(1);
//   function increment() {
//     setNumber((prevNumber) => prevNumber + 1);
//   }
//   return (
//     <>
//       <h1 data-test-id="currentNumber"> {number} </h1> 
//       <button data-testid="add-one" onClick={increment}>
//           Add one 
//       </button>
//     </>
//   );
// }