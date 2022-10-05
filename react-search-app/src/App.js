import "./App.css";
import "./app1.css";
import { Users } from "./user";
import Table from "./Table";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  //console.log(Users.filter(user=>user.first_name.toLowerCase().includes(query)));

  //....................................................................................
  //02.React multi search function
  /*
  const keys = ["first_name", "last_name", "email"];

  console.log(Users[0]["first_name"]);

  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(query));
    });
  };
*/
  //.........................................................................

  //3.React search API Using a backend server
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length == 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search....."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />

      {/*<Table data={search(Users)} />*/}
    </div>
  );
}

export default App;
