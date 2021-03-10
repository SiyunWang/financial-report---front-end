import React from "react";
// import { PureComponent } from "react";
import IncomeStatementCategory from "./IncomeStatementCategory";

const IncomeStatementTable = ({ data, headers, searchText, showInQauter }) => {
  const categories = data;

  return (
    <table>
      <thead>
        <tr className="table-head">
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
        {/* <tr className="table-head">
          <th></th>
          <th>Jan, 2020</th>
          <th>Feb, 2020</th>
          <th>Mar, 2020</th>
        </tr> */}
      </thead>

      <tbody>
        {categories.map((category) => (
          <IncomeStatementCategory
            category={category}
            searchText={searchText}
            key={category.category}
            showInQauter={showInQauter}
          />
        ))}
      </tbody>
    </table>
  );
};

export default IncomeStatementTable;
