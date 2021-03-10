import React from "react";

const Search = ({
  searchText,
  handleSearchTextChange,
  showInQuater,
  handleCheckBox
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />

      <label>
        <input
          name="quater"
          type="checkbox"
          checked={showInQuater}
          onChange={(e) => handleCheckBox(e.target.checked)}
        />
        Show in Quater
      </label>
    </form>
  );
};

export default Search;
