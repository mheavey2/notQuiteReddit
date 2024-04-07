import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  // TODO: define what the app needs to do after Render with useEffect()

  //login?

  //search

  return (
    <>
      <header>
        <div className={styles.logo}>
          <h2>NotQuiteReddit</h2>
        </div>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </header>
    </>
  );
}

export default App;
