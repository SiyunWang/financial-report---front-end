import React, { useState } from "react";

import "./IncomeStatementStyles.css";

const IncomeStatementCategory = ({ category, searchText, showInQauter }) => {
  const [showCategory, setShowCategory] = useState(true);
  const handleCategoryClick = () => {
    setShowCategory(!showCategory);
  };
  const search = (searchText, subCategory, category) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const lowerCaseSubCategory = subCategory.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();
    return (
      lowerCaseCategory.indexOf(lowerCaseSearchText) !== -1 ||
      lowerCaseSubCategory.indexOf(lowerCaseSearchText) !== -1
    );
  };

  return (
    <React.Fragment>
      <tr className="IncomeContainer" onClick={handleCategoryClick}>
        <th colSpan="4">{category.category}</th>
      </tr>
      {showCategory &&
        category.subCategories &&
        category.subCategories
          .filter((subCategory) =>
            search(searchText, subCategory.name, category.category)
          )
          .map((subCategory) => (
            <SubCategoryRow
              subCategory={subCategory}
              showInQauter={showInQauter}
              key={subCategory.name}
            />
          ))}
      {showCategory && <TotalRow total={category.total} />}
    </React.Fragment>
  );
};

const SubCategoryRow = ({ subCategory, showInQauter }) => {
  return (
    <tr>
      <td>{subCategory.name}</td>
      <td>{subCategory["January, 2020"]}</td>
      <td>{subCategory["February, 2020"]}</td>
      <td>{subCategory["March, 2020"]}</td>
    </tr>
  );
};

const TotalRow = ({ total }) => {
  return (
    <tr className="total">
      <td>Total</td>
      <td colSpan="3">{total}</td>
    </tr>
  );
};

export default IncomeStatementCategory;
