import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Reddit from "../../util/Reddit.jsx";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  // TODO: define what the app needs to do after Render with useEffect()
  const [searchResults, setSearchResults] = useState("");

  //login?

  //search
  // search for item
  const search = (searchInput) => {
    Reddit.searchItem(searchInput)
      .then((itemsArray) => {
        setSearchResults(itemsArray);
      })
      .catch((error) => {
        console.log("Error searching item: ", error);
      });
    console.log(searchInput);
  };

  return (
    <>
      <div className={styles.contentContainer}>
        <header className={styles.head}>
          <div className={styles.logo}>
            <h2>NotQuiteReddit</h2>
          </div>
          <div className={styles.searchContainer}>
            {/* <SearchBar onSearch={search} /> */}
          </div>
        </header>

        <aside className={styles.linksSidebar}>
          <div>
            {/* TODO: remove sidepar p placeholder */}
            <div>
              <h4>Topics Dropdown</h4>
            </div>
          </div>
        </aside>
        <main className={styles.mainContainer}>
          <div>
            s<button>Sort By DropDown</button>
            <button>Location Dropdown</button>
            <div className={styles.resultsContainer}>
              {/* <SearchResults searchResults={searchResults} /> */}
            </div>
          </div>
        </main>
        <aside className={styles.communitiesSidebar}>
          <div>
            <h4>Popular Communites</h4>
          </div>
        </aside>
        <footer className={styles.foot}>
          <p>footer</p>
        </footer>
      </div>
    </>
  );
}

export default App;
