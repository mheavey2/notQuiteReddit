import styles from "./searchBar.module.css";
import { useState } from "react";

function SearchBar(props) {
  //store input state
  const [searchInput, setSearchInput] = useState("");

  //when value in searchBar changes capture it
  const inputChange = (event) => {
    setSearchInput(event.target.value);
  };

  //search function for search button
  const search = () => {
    props.onSearch(searchInput);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for something"
          className={styles.inputField}
          onChange={inputChange}
        ></input>
        {/* TODO:add magnifying glass icon */}
        <button className={styles.searchBtn} onClick={search}>
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
