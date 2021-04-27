import { useState, useEffect } from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_FOOD_RECIPE_ID}&app_key=${process.env.REACT_APP_FOOD_RECIPE_API_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };

  return (
    <div>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
