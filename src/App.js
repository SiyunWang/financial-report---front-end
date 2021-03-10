import React, { useState, useEffect } from "react";
import IncomeStatementTable from "./IncomeStatementTable";
import Search from "./Search";
import { getIncomeStatement } from "./apiMock";

import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showInQuater, setShowInQauter] = useState(false);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleCheckBox = () => {
    setShowInQauter(!showInQuater);
    // console.log(showInQuater);
  };

  useEffect(() => {
    getIncomeStatement().then((response) => {
      const arr = [""];
      for (let key in response[0].subCategories[0]) {
        if (key !== "name") {
          arr.push(key);
        }
      }
      setData(response);
      setHeaders(arr);
    });
  }, []);

  return (
    <div className="App">
      <h1>Income Statement</h1>
      <Search
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
        showInQuater={showInQuater}
        handleCheckBox={handleCheckBox}
      />
      <br />
      <IncomeStatementTable
        data={data}
        headers={headers}
        searchText={searchText}
        showInQuater={showInQuater}
      />
    </div>
  );
};

export default App;
