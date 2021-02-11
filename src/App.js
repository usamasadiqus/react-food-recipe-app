import { useEffect, useState } from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("Spaghetti");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const APP_ID = "711a367b";
  const APP_KEY = "5faba9ed0d7ccb4ccc27682d253f83a6";

  const loadData = async () => {
    const { data } = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header search={search} onInputChange={onInputChange} />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
