import React, { useState } from "react";
import "./App.css";
import Userform from "./components/Userform";
import UserDetails from "./components/Userdetails";
import useFetch from "./components/useFetch";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
const apiDelete = process.env.REACT_APP_API_DELETE;
function App() {
  const [usrs, fetchData, postData, deleteData] = useFetch(apiUrl);
  let [showForm, setForm] = useState(false);
  const addUserHandler = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };
  const createUser = (user) => {
    postData(apiUrl, user);

    setForm(false);
  };
  const getUsersHandler = () => {
    fetchData();
  };
  const deleteUser = (user) => {
    deleteData(apiDelete, user);
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
      <UserDetails userinfo={usrs} deleteuser={deleteUser}></UserDetails>
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
