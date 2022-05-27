import Expenses from './components/Expenses';
import './App.css';
import React from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title:'School Fee',
    amount:250,
    date: new Date(2021,5,12)
  },
//   {
//    id: 'e2',
//    title:'Car Insurance',
//    amount:300,
//    date: new Date(2021,6,22)
//  },
//  {
//    id: 'e3',
//    title:'House Rent',
//    amount:700,
//    date: new Date(2021,7,12)
//  },
//  {
//    id: 'e4',
//    title:'Grocery',
//    amount:540,
//    date: new Date(2021,6,25)
//  },


 //if you have api fetch through use effect===> here
 //then, go to add Expense Handler function at line 42==>
 //just use apply all set here=========>For You.

// function fetchData(){
  //   fetch(url).then(
//     res=>{
//       return res.json();
//     }
//   ).then(
//     data=>{
//       setExpenses(data); #All DONE.
//     }
//   )
// }

// useEffect(()=>{
//fetchData();
// })

];




function App() {
 const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

const addExpenseHandler = (expense)=>{
setExpenses([expense,...expenses]);


//fetch('url',{
//method:'POST' //for new data add==>create
//body:JSON.stringify(expense), it goes through json string
//headers:{
//'content-Type':'application/json
//}
//}).then(
//res=>{
  //fetchData();
//}
//);


};

  return (
    <div>
      <h2 className='h22'>$ My Expenses $</h2>
      <NewExpense onAddExpense={addExpenseHandler }/>
     <Expenses item={expenses}/>

    </div>
  );
}

export default App;
