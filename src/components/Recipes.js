import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  const { recipes } = props;
  return (
    <div className="card-columns">
      {recipes.map((recipe, index) => (
        <RecipeItem
          key={index}
          label={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;
