import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import React from 'react';
// import { useState } from 'react';


function ExpenseItem(props){
  // const [title,setTitle] = useState(props.title);  
//    const [newTitle,setNewTitle]=useState("Enter..");
// const clickHandler=()=>{
// setTitle(newTitle);
// }
// const changeHandler=(event)=>{
//     setNewTitle(event.target.value);
// }
return(
    <div className='expense-item'>
      <ExpenseDate date={new Date(props.date)} />
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <input type="text"  value={newTitle}  onChange={changeHandler}/>
       <button onClick={clickHandler}>Change Title</button> */}
    </div>
)
}
export default ExpenseItem;