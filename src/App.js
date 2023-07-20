import React, { useEffect, useState } from "react";
import "./App.css";
import Userform from "./components/Userform";
import UserDetails from "./components/Userdetails";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users.json"
      )
      .then((response) => {
        const users = [];
        for (let key in response.data) {
          users.push({ ...response.data[key], id: key });
        }
        setusers(users);
      })
      .catch(() => console.log("Error"));
  }, []);
  let [showForm, setForm] = useState(false);
  let [users, setusers] = useState([]);
  const addUserHandler = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  const createUser = (user) => {
    axios
      .post(
        "https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users.json",
        user
      )
      .then((response) => {
        getUsersHandler();
      })
      .catch(() => console.log("Error"));

    setForm(false);
  };

  const getUsersHandler = () => {
    axios
      .get(
        "https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users.json"
      )
      .then((response) => {
        const users = [];
        for (let key in response.data) {
          users.push({ ...response.data[key], id: key });
        }
        setusers(users);
      })
      .catch(() => console.log("Error"));
  };

  const deleteUser = (user) => {
    axios
      .delete(
        "https://react-http-tutorial-746a1-default-rtdb.firebaseio.com/users/" +
          user.id +
          ".json"
      )
      .then((response) => {
        getUsersHandler();
      })
      .catch(() => console.log("Error"));
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
      <UserDetails userinfo={users} deleteuser={deleteUser}></UserDetails>
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
