import React, { useState } from "react";
import "./Member.css";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
function Member(props) {
    const [emptyMember, changeEmptyMember] = useState(true);
    const [emptyList, changeEmptyList] = useState(true);

    const [member, setMember] = useState({
        id: "",
        name: "",
        amount: 0
    });

    function handleMemberChange(event) {
        const { name, value } = event.target;
        setMember(prev => {
            return {
                ...prev,
                [name]: value,
                id: uniqid()

            }
        })
        if(props.memberList.length>0&&emptyList)
        {
            changeEmptyList(false);
        }
        if (emptyMember === true) {
            changeEmptyMember(false);

        }

    }
    function handleAddMember(event) {
        if(member.name.length===0)
        {
            changeEmptyMember(true);
        }
        event.preventDefault();
        setMember(prev => {
            return {
                ...prev,

            }
        })
        // console.log(member);
        props.addMemberList(prev => {
            return [...prev, member];
        });
        if (emptyList === true) {
            console.log("list is not empty");
            changeEmptyList(false);

        }
        setMember(prev => {
            return {
                ...prev,
                id: "",
                name: ""
            }
        })
        changeEmptyMember(true);
    }
    return (<div className="card member-div container ">
        <h3 className="component-heading text-center" >Member List</h3>
        <div className="row " id="table-row">
            <table class="table app-table " id="member-table">
                <thead>
                    <tr>
                        <th className="table-heading" scope="col">#</th>
                        <th className="table-heading" scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {emptyList === false ? props.memberList.map((memberItem, index) => {
                        return (<tr key={memberItem.id}>
                            <th scope="row">{index + 1}</th>
                            <td className="table-data">{memberItem.name}</td>
                        </tr>)
                    }) : <p className="alert">No Members Added!</p>}
                </tbody>
            </table>

        </div>
        <div className="row" id="member-input">
            <form class="row row-cols-lg-auto g-3 align-items-center">
                <div class="col">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                    <div class="input-group text-input-space">
                        <div class="input-group-text">@</div>
                        <input onChange={handleMemberChange} type="text" class="form-control " id="inlineFormInputGroupUsername" name="name" value={member.name} placeholder="Username" required />
                    </div>
                </div>
                <div class="col" id="member-add-button">
                    <button onClick={handleAddMember} type="submit" class="btn btn-primary app-button" disabled={emptyMember}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASklEQVR4nGNgGAWjgK7g////0/7//z+VlhbsB+FRC+gTRP///5/y////3Wj4HRSji0+htQWTqeWr/aOpaMCDaCpNi4pRMAoYsAEAjmOjeUE8yMoAAAAASUVORK5CYII=" /></button>
                </div>
            </form>
        </div>
        <div className="row text-center" id="member-proceed" >
            {/* <div className="col"><form  >  <Link to="/expense" ><button type="submit" class="btn btn-danger  next-button " disabled={emptyList}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR4nO3WMUpDQRAG4J+ZvAvEQtMFIY1NsLT2QjbiFbxBPITp0mnjNeyCIBqyswk5wC+BCA87Q3iPgf+DaZf9l53dAURERERERHpEYlDpt9/EBTIK+lPQWejrYDNFNkF72Qc4hFitiStkEmymhR6/IYL+uSUmyKSyuf4T4mNDXCKTwsFN0HetEMtKjI9abEucVdpdoT10WUFbtALse+J9RYyOOA2btxfqswptnjpA0J7/HWBDDAvtPuiPXVahvZ3kCqVv4q7VzM9oZP/ICu01+Sjhs9TDHA/j9Bdx3vdeREREREQEafwASIMeXeVbbKkAAAAASUVORK5CYII=" /></button></Link></form></div> */}
            <div className="col"><form > <Link to="/"> <button type="submit" class="btn btn-danger  next-button "><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO3WMSuFYRgG4KcszuSUDE7xP2yUTbFayWCyGuX3+APEYjEom8kgm8FmQpxLpw59vu0zHOfJc9W7vt133W+9EaWUUkoppZRSSukMvcgKxxjiEjORCY78tBxZ4LAV/iSywEEr/BlmIwPsjjf/5SLNI8YOPhrhH7GF9QmeNfR/E34F76bDQ+fJYs/0GGLQtUAPV62LnnA+4XOK/Y4D+i4xh+tGgdGktiMT9HHTKPGGzcgEC7htlHjFRmSCRdw1SjyPJhaZYAn34wIvmI9sMBh/6lb/OksppZRSyn/1CTN29QgA9b6mAAAAAElFTkSuQmCC"/></button></Link></form></div>
            <div className="col"><form  ><button type="submit" class="btn btn-danger  next-button " disabled={emptyList}>  <Link to="/expense" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR4nO3WMUpDQRAG4J+ZvAvEQtMFIY1NsLT2QjbiFbxBPITp0mnjNeyCIBqyswk5wC+BCA87Q3iPgf+DaZf9l53dAURERERERHpEYlDpt9/EBTIK+lPQWejrYDNFNkF72Qc4hFitiStkEmymhR6/IYL+uSUmyKSyuf4T4mNDXCKTwsFN0HetEMtKjI9abEucVdpdoT10WUFbtALse+J9RYyOOA2btxfqswptnjpA0J7/HWBDDAvtPuiPXVahvZ3kCqVv4q7VzM9oZP/ICu01+Sjhs9TDHA/j9Bdx3vdeREREREQEafwASIMeXeVbbKkAAAAASUVORK5CYII=" /></Link></button></form></div>
        </div>
    </div>);
}
export default Member;