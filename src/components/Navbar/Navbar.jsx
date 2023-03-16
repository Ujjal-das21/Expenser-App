import React from "react";
import "./Navbar.css"

function Navbar()
{
    return(<div className="container navbar-div">
        <nav class="navbar navbar-expand-lg  " >
  <div class="container-fluid">
    <a class="navbar-brand black-color brand" href="#">Expenser</a>
    <button class="navbar-toggler white-background" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link white-color" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link white-color" aria-current="page" href="/member">Member</a>
        </li>
        <li class="nav-item">
          <a class="nav-link white-color" href="/expense">Expense</a>
        </li>
        <li class="nav-item">
          <a class="nav-link white-color" href="/payment">Payment</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle  white-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
     
    </div>
  </div>
</nav>
    </div>);
}
export default Navbar;