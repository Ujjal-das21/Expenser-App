import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Expense from "./Expense/Expense";
import Home from "./Home/Home";
import Member from "./Member/Member";
import Navbar from "./Navbar/Navbar";
import Payment from "./Payment/Payment";
function App()
{
    const [memberList,addMemberList]=useState([]);
    const [expenseList,addExpenseList]=useState([]);
    const [netExpense,setNetExpense]=useState(0);
    const [memberEmpty,setMemberEmpty]=useState(true);

    if(memberList.length>0&&memberEmpty)
    {
        setMemberEmpty(false);
    }
    return(< div className="website-container container-fluid">
        <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Routes>
            <Route path="/" element={ <Home></Home>}></Route>
            <Route path="/member" element={  <Member  addMemberList={addMemberList} memberList={memberList}></Member>}></Route>
            <Route path="/expense" element={ <Expense setNetExpense={setNetExpense} expenseList={expenseList} memberList={memberList} addExpenseList={addExpenseList} ></Expense>}></Route>
            <Route path="/payment" element={ <Payment status={memberEmpty} netExpense={netExpense}  memberList={memberList} ></Payment>}></Route>
        </Routes>
        </BrowserRouter>
      
       
    </div>);
}
export default App;