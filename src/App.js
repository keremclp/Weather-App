import "./App.css";
/* import Searchbar component from component file */
import Searchbar from "./components/SearchBar";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  
  return <Searchbar onSearchChange={handleOnSearchChange} />;
}

export default App;
