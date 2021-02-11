const Recipes = (props) => {
  const { recipes } = props;
  console.log("in recipes component", recipes);
  return (
    <div className="card-columns">
      {recipes.map((recipe, index) => (
        <div className="card py-2 mt-5 mb-1 text-center" key={index}>
          <img
            src={recipe.recipe.image}
            alt={`${recipe.recipe.label} Image`}
            className="img-fluid w-50 mx-auto rounded-circle"
          />
          <div className="card-body">
            <h5>{recipe.recipe.label}</h5>
          </div>
          <ul className="list-group list-group-flush">
            {recipe.recipe.ingredientLines.map((ingredient, index) => (
              <li className="list-group-item" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
