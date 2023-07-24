import React, { useState } from "react";
import "./App.css";
import Userform from "./components/Userform";
import UserDetails from "./components/Userdetails";
import useFetch from "./components/useFetch";

function App() {
  const [usrs, fetchData, postData, deleteData] = useFetch();
  let [showForm, setForm] = useState(false);
  const addUserHandler = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };
  const createUser = (user) => {
    postData(user);
    setForm(false);
  };
  const getUsersHandler = () => {
    fetchData();
  };
  return (
    <>
      {" "}
      <div className="d-flex justify-content-end gap-5">
        <button className="btn btn-primary" onClick={addUserHandler}>
          Add User
        </button>
        <button className="btn btn-info" onClick={getUsersHandler}>
          Get Users
        </button>
      </div>
      <UserDetails userinfo={usrs} deleteuser={deleteData}></UserDetails>
      <div>
        {" "}
        {showForm && (
          <Userform closeform={closeForm} createuser={createUser}></Userform>
        )}{" "}
      </div>
    </>
  );
}
export default App;
