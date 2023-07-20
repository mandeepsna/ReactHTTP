import React from "react";
import "./UserDetails.css";

function UserDetails(props) {
  const deleteuserHandler=(element)=>
  {
     props.deleteuser(element)
  }
  return (
    <div className="user-details">
      <table className="users-table">
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th></th>
        </tr>
        {props.userinfo.map((element) => {
          return (
            <tr>
              <td>{`${element.firstname} ${element.lasttname}`}</td>
              <td>{element.email}</td>
              <td>{element.date}</td>
              <td>{element.gender}</td>
              <td>
                <button className="btn btn-primary me-3">Edit</button>
                <button className="btn btn-danger" onClick={()=> deleteuserHandler(element)}>Delete </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default UserDetails;
