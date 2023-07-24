import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = () => {
  let [users, setusers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiUrl = `${process.env.REACT_APP_API_ENDPOINT}/users.json`;
    axios
      .get(apiUrl)
      .then((response) => {
        const users = [];
        for (let key in response.data) {
          users.push({ ...response.data[key], id: key });
        }
        setusers(users);
      })
      .catch((error) => console.log("Error"));
  };

  const postData = (user) => {
    const apiUrl = `${process.env.REACT_APP_API_ENDPOINT}/users.json`;
    axios
      .post(apiUrl, user)
      .then((respose) => {
        setusers([...users, { ...user, id: respose.data.name }]);
      })
      .catch((error) => console.log("Error"));
  };

  const deleteData = (user) => {
    const apiUrl = `${process.env.REACT_APP_API_ENDPOINT}/users/${user.id}.json`;
    axios
      .delete(apiUrl)
      .then((response) => {
        users.splice(users.indexOf(user), 1);
        setusers([...users]);
      })
      .catch((error) => console.log("Error", error));
  };
  return [users, fetchData, postData, deleteData];
};
export default useFetch;
