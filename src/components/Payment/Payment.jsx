import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css"
function Payment(props) {
    const perHead=Math.ceil(props.netExpense/props.memberList.length);
    console.log(perHead);
 
    return (<div className="card payment-div container">
        <h3 className="component-heading text-center" >Payment Board</h3>
        <div className="row " >
            <table class="table app-table " id="payment-table">
                <thead>
                    <tr>
                        <th className="table-heading" scope="col">#</th>
                        <th className="table-heading" scope="col">Name</th>
                        <th className="table-heading" scope="col">Amount</th>
                        <th className="table-heading" scope="col">Due</th>
                    </tr>
                </thead>
                <tbody>
                    {props.status===false?props.memberList.map((item,index)=>{
                        return(<tr>
                            <th scope="row">{index+1}</th>
                            <td className="table-data">{item.name}</td>
                            <td className="table-data">{item.amount}</td>
                            <td className="table-data" style={(item.amount-perHead)<0?{color: "red"}:{color: "green"}} >{item.amount-perHead}</td>
                        </tr>)
                    }):<p className="alert">No Transactions!</p>}
                    
                </tbody>
            </table>

        </div>
        <div className="row">
            <div className="card container" id="payment-input">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Expense Details</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul class="list-group list-group-flush">
                        <div className="row">
                            <div className="col"><li class="list-group-item">Total</li></div>
                            <div className="col "><li class="list-group-item">{props.netExpense}</li></div>
                        </div>
                        <div className="row">
                            <div className="col"><li class="list-group-item">Persons</li></div>
                            <div className="col "><li class="list-group-item">{props.memberList.length}</li></div>
                        </div>
                        <div className="row">
                            <div className="col"><li class="list-group-item">Share</li></div>
                            <div className="col "><li class="list-group-item">{perHead}</li></div>
                        </div>
                        
                    </ul>
                    <div class="card-body" id="payment-reset">
                        <Link to="/expense" className="card-link"><button  type="submit" class="btn btn-primary next-button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3WMSuFYRgG4KcszuSUDE7xP2yUTbFayWCyGuX3+APEYjEom8kgm8FmQpxLpw59vu0zHOfJc9W7vt133W+9EaWUUkoppZRSSukMvcgKxxjiEjORCY78tBxZ4LAV/iSywEEr/BlmIwPsjjf/5SLNI8YOPhrhH7GF9QmeNfR/E34F76bDQ+fJYs/0GGLQtUAPV62LnnA+4XOK/Y4D+i4xh+tGgdGktiMT9HHTKPGGzcgEC7htlHjFRmSCRdw1SjyPJhaZYAn34wIvmI9sMBh/6lb/OksppZRSyn/1CTN29QgA9b6mAAAAAElFTkSuQmCC"/></button></Link>
                        <Link to="/" className="card-link"><button onClick="window.location.reload()" type="submit" class="btn btn-primary app-button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRUlEQVR4nO2aW0tVQRTHByoLNFG7PgT5Vgml9RmiMOzyYCX1GYzoW2iWiVFv1UuvXcyg+gAREUZFeSkMzILKguqlOtEvpr2Ccc7aZ7vPvrhP+IMDetjOmr9r1qw1a7YxS/ynAM3AQeA0cBuYAD4DP+TzSb4bBfqBQ0CjKQLASuA4cAf4RXxKwD3gqB3LVLZlhX8A3gMH0hKwCjgFvCU93gG9YYI8W7NpiOgEXpEd08Buxe48knrhQsQkxoABoBvYIXGzAqiTn+13R4AzwJMK4/wGLrreSUUIsAF4FGL0C9AHbKli3G0i/GvI2PeBjakIAVqBl4qRn7JDNcUetNzGWuCsBL/PFLApkRDxhCbiuV0mSQUo9nYB44q9sjnEjQltOV0D6tMW4dhtBEYUu1UL0QL7ErAsKxH/AJYDVxMLkS1W80QmIoB9wOsoL8QSItl60vs7+/vqLESIzZk4IiwLGdRmbH93Sj2wPZtviIlZgDf8sqM/SxHOUrYZPTUhtgD0k13iPJE7wF1PSJ+pNQhqIb8Uj112LDoE9b7LmKlFCIo3lwFTixAcQV26TS1CUGW6bDe1CDDnCWkxBYSgnJmVT6f2gO10uNSZAsL8mmy6JoUQVB4u3xeytNaYgkFwknT5qD00WfRgB9q9OY7X5PZL0IFxGdEeso2EQidEYDCyFpS+rctjUzCAZ94cu7SHmpSicaspCECbcuDTm+DSjM71UJWgFhyt9PAx5WDVnOuMFWwqAL55c+uJSjizRQt64Jw3p5nIhA2cVNZie26z9gB2Kq3UXhOFeMXeLOXWDqowl3rghTeXqahLIXeAvZRzPY8uo9dtvKlcN5TdnVQEOK+IuZxjy/SKYn+omsHsEnuoDHYDaMhEgflrt0HxhOVB1RU5sF45OSKt/46MAntCsWdjdF3SwVtDxJTkcqYlpTxht9hSiIjNSW24ntGWGXJtZgvOtirLjgEl2bnLKZknQmJmmMo8FS8dlrNDi1yE1sl/vUNK8UGlAHSxu9NQpqdUYE/IUkuLidhbbELvnKjmOqACtuwIfWEga0F2yfTIuydaoEZRkpNpT2GaHQSXmPvlhZlbskXPOS/VzEm5MSL38l2LUfYsYXLiD+5LaXaqk4ArAAAAAElFTkSuQmCC"/></button></Link>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default Payment;