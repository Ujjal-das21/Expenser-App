import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Expense.css"
function Expense(props) {
    const [emptyMemberList, setEmptyMemberList] = useState(true);
    const [emptyExpenseList, setEmptyExpenseList] = useState(true);
    if(props.expenseList.length>0)
    {
          if(emptyExpenseList==true)
          {
            setEmptyExpenseList(false);
          }
    }
    if (props.memberList.length > 0) {
        if (emptyMemberList === true) {
            setEmptyMemberList(false);
        }
    }
    const[expense,setExpense]=useState({
        item:"",
        price:0,
        person:""
    })
    function handleChangeExpense(event)
    {
        const {name,value}=event.target;
        setExpense(prev=>{
            return{...prev,
                   [name]:value
            
            }
        });

    }
    function handleExpenseAdd(event)
    {
        const currentPrice=Number(expense.price);
        props.setNetExpense(prev=>{
            return (prev+currentPrice);
        })
        event.preventDefault();
        console.log(expense);
        const personId=expense.person;
        props.addExpenseList(prev=>{
            return[...prev,expense];
        })
        props.memberList.find(element=>{
            if(element.id===personId)
            {
                console.log("got the person");
              
                element.amount+=currentPrice;
                console.log(element);
            }
        })
        setExpense({
            item:"",
            price:0,
            person:""
        })
     
        
    }
    return (<div className="card expense-div container">
        <h3 className="component-heading text-center" >Expense List</h3>
        <div className="row " id="table-row">
            <table class="table app-table " id="expense-table">
                <thead>
                    <tr>
                        <th className="table-heading" scope="col">#</th>
                        <th className="table-heading" scope="col">Item</th>
                        <th className="table-heading" scope="col">Price</th>
                        <th className="table-heading" scope="col">Person</th>
                    </tr>
                </thead>
                <tbody>
           {emptyExpenseList===false?props.expenseList.map((item,index)=>{
            var Name="";
            return(  <tr key={index}>
                <th scope="row">{index+1}</th>
                <td className="table-data">{item.item}</td>
                <td className="table-data">{item.price}</td>
                {/* <td className="table-data">{item.person}</td> */}
                {  props.memberList.find(person=>{
                if(person.id===item.person)
                {
                    Name=person.name;
                }
            })}
                {console.log("The name is "+Name)}
                <td className="table-data">{Name}</td>
            </tr>)
           }):""}
                </tbody>
            </table>

        </div>
        <div className="row card" id="expense-input">
            <form class="row row-cols-lg-auto g-3 align-items-center">
                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Item</label>
                    <div class="input-group">
                        <div class="input-group-text">Item</div>
                        <input onChange={handleChangeExpense} type="text" class="form-control" id="inlineFormInputGroupUsername" name="item" value={expense.item} placeholder="Item" />
                    </div>
                </div>
                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Price</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input onChange={handleChangeExpense} type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Price" name="price" value={expense.price} />
                    </div>
                </div>

                <div class="col-12 ">
                    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                    {emptyMemberList === false ?
                       <div className="col ">
                         <select  onChange={handleChangeExpense}  class="form-select" id="inlineFormSelectPref" name="person" value={expense.person}>
                            <option className="customDropdown-menu" selected>Select Person</option>
                            {props.memberList.map((memberElement, index) => {
                                return (<option className="customDropdown-menu" key={memberElement.id} value={memberElement.id}  >{memberElement.name}</option>)
                            })}

                        </select>
                       </div> : <p className="alert">No Members Added!</p>}
                </div>

                <div class="col-12" id="expenseAddBtn">
                    <button onClick={handleExpenseAdd} type="submit" class="btn btn-primary app-button" disabled={emptyMemberList}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASklEQVR4nGNgGAWjgK7g////0/7//z+VlhbsB+FRC+gTRP///5/y////3Wj4HRSji0+htQWTqeWr/aOpaMCDaCpNi4pRMAoYsAEAjmOjeUE8yMoAAAAASUVORK5CYII=" /></button>
                </div>
            </form>
        </div>
        <div className="row text-center" id="expense-proceed" >
            <div className="col"><form > <Link to="/member"> <button type="submit" class="btn btn-danger  next-button "><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3WMSuFYRgG4KcszuSUDE7xP2yUTbFayWCyGuX3+APEYjEom8kgm8FmQpxLpw59vu0zHOfJc9W7vt133W+9EaWUUkoppZRSSukMvcgKxxjiEjORCY78tBxZ4LAV/iSywEEr/BlmIwPsjjf/5SLNI8YOPhrhH7GF9QmeNfR/E34F76bDQ+fJYs/0GGLQtUAPV62LnnA+4XOK/Y4D+i4xh+tGgdGktiMT9HHTKPGGzcgEC7htlHjFRmSCRdw1SjyPJhaZYAn34wIvmI9sMBh/6lb/OksppZRSyn/1CTN29QgA9b6mAAAAAElFTkSuQmCC"/></button></Link></form></div>
            <div className="col"><form > <Link to="/payment"> <button type="submit" class="btn btn-danger  next-button "><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR4nO3WMUpDQRAG4J+ZvAvEQtMFIY1NsLT2QjbiFbxBPITp0mnjNeyCIBqyswk5wC+BCA87Q3iPgf+DaZf9l53dAURERERERHpEYlDpt9/EBTIK+lPQWejrYDNFNkF72Qc4hFitiStkEmymhR6/IYL+uSUmyKSyuf4T4mNDXCKTwsFN0HetEMtKjI9abEucVdpdoT10WUFbtALse+J9RYyOOA2btxfqswptnjpA0J7/HWBDDAvtPuiPXVahvZ3kCqVv4q7VzM9oZP/ICu01+Sjhs9TDHA/j9Bdx3vdeREREREQEafwASIMeXeVbbKkAAAAASUVORK5CYII=" /></button></Link></form></div>
        </div>
    </div>);
}
export default Expense;