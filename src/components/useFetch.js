import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (apiUrl) => {
  let [users, setusers] = useState([]);
  useEffect(() => {
    fetchData();
  }, [users]);
  const fetchData = () => {
    axios.get(apiUrl).then((response) => {
        const users = [];
        for (let key in response.data) {
          users.push({ ...response.data[key], id: key });
        }
        setusers(users);
      })
      .catch((error) => console.log("Error"));
  };
  const postData = (apiUrl, user) => {
    axios.post(apiUrl, user);
  };
  const deleteData = (apiDelete, user) => {
    axios.delete(apiDelete + user.id + ".json");
  };
  return [users, fetchData, postData, deleteData];
};
export default useFetch;
